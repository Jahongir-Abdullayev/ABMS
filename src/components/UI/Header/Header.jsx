import { KeyboardArrowDown } from '@mui/icons-material'
import WeekendIcon from '@mui/icons-material/Weekend'
import { Box, Container, FormControl, MenuItem, Select } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BurgerMenu from '../BurgerMenu'
import cls from './style.module.scss'
import logo from '../../../../public/images/logo.png'
import { RuFLag } from 'utils/icons'
import RuFlag from '../../../../public/images/ruFlag.svg'
import UZFlag from '../../../../public/images/uzFlag.svg'

export function Header() {
  const router = useRouter()
  const { locale } = useRouter();
  const [language, setLanguage] = useState(locale === "ru" ? 0 : locale === "uz" ? 1 : 2);
  const [toggle, setToggle] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t } = useTranslation("common");

  const langs = [
    {
      key: 'ru',
      label: 'Ru',
      icon: RuFlag
    },
    {
      key: 'uz',
      label: 'Uz',
      icon: UZFlag
    },
    // {
    //   key: 'en',
    //   label: 'en'
    // }
  ]

  const burgerData = [
    {
      id: 1,
      name: t("home"),
      href: "/#home",
    },
    {
      id: 3,
      name: t("catalogs"),
      href: "/#catalog",
    },
    {
      id: 2,
      name: t("about"),
      href: "/#about",
    },
    {
      id: 4,
      name: t("contacts"),
      href: "/contacts",
    },
  ];

  const arrowDown = {
    cursor: "pointer",
    width: "20px",
    color: '#00000099',
    marginRight: '3px'
  };
  const arrowUp = {
    cursor: "pointer",
    width: "20px",
    transform: "rotate(180deg)",
    color: '#00000099',
    marginRight: '3px'
  };

  const handleLanguageChaneg = (e) => {
    setLanguage(e.target.value);
    setLangOpen(false);
  };


  return (
    <div
      style={{ background: "#FFFFFF" }}
      className={`${cls.main_container} ${
        router.route.substring(0, 6) === "/news/" && cls.news_active
      }`}
    >
      <Container className={cls.mobile_container}>
        <Box className={cls.header_menu}>
          <div className={cls.left_side}> 
            <div className={cls.logo}>
              {/* <RuFlag /> */}
              <Link href={"/"} passHref>
                {/* <Image
              style={{ cursor: "pointer" }}
              src={logo}
              width="70px"
              height="70px"
              alt="logo"
            /> */}
                <div className={cls.logoName}>
                  <Image src={logo} alt="logo" width={102} height={36} />
                </div>
              </Link>
            </div>
            <div className={cls.headerMenu_items}>
              <a onClick={() => router.push("/#main")}>
                <div className="hoverable_btn">{t("main")}</div>
              </a>
              <a onClick={() => router.push("#about")}>
                <div className="hoverable_btn">{t("aboutUs")}</div>
              </a>
              <a onClick={() => router.push("/#partners")}>
                <div className="hoverable_btn">{t("partners")}</div>
              </a>
              <a onClick={() => router.push("#contact")}>
                <div className="hoverable_btn">{t("contacts")}</div>
              </a>
            </div>
          </div>

          <div className={cls.contact_lang_btns}>
            <div className={cls.select_language}>
              <FormControl style={{ height: "100%" }}>
                <Select
                  open={langOpen}
                  value={language}
                  onClick={() => setLangOpen(!langOpen)}
                  onChange={(e) => handleLanguageChaneg(e)}
                  className={cls.language}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  IconComponent={() => (
                    <KeyboardArrowDown
                      style={!langOpen ? arrowDown : arrowUp}
                      onClick={() => setLangOpen(!langOpen)}
                    />
                  )}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  {langs?.map((item, index) => (
                    <MenuItem key={index} value={index}>
                      <Link
                        href={`${router.asPath}`}
                        locale={item.key}
                        passHref
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "15px",
                          }}
                        >
                          <Image
                            src={item?.icon}
                            alt="logo"
                            width={20}
                            height={20}
                          />
                          {item.label}
                        </div>
                      </Link>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <BurgerMenu data={burgerData} className={cls.burger} />
        </Box>
      </Container>
      {/* {router.route === "/" ? <About /> : ""} */}
    </div>
  );
}
