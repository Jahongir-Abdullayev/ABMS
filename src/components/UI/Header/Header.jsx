import { KeyboardArrowDown } from '@mui/icons-material'
import WeekendIcon from '@mui/icons-material/Weekend'
import { Box, Container, FormControl, MenuItem, Select } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BurgerMenu from '../BurgerMenu'
import cls from './style.module.scss'

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
      label: 'ru'
    },
    {
      key: 'uz',
      label: 'uz'
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
    width: "30px",
    marginRight: "10px",
  };
  const arrowUp = {
    cursor: "pointer",
    width: "30px",
    marginRight: "10px",
    transform: "rotate(180deg)",
  };

  const handleLanguageChaneg = (e) => {
    setLanguage(e.target.value);
    setLangOpen(false);
  };


  return (
    <div
      style={{ background: "#F1EFEF" }}
      className={`${cls.main_container} ${
        router.route.substring(0, 6) === "/news/" && cls.news_active
      }`}
    >
      <Container className={cls.mobile_container}>
        <Box className={cls.header_menu}>
          <div className={cls.logo}>
            <Link href={"/"} passHref>
              {/* <Image
              style={{ cursor: "pointer" }}
              src={logo}
              width="70px"
              height="70px"
              alt="logo"
            /> */}

              <WeekendIcon />
            </Link>
          </div>
          <div className={cls.headerMenu_items}>
            <a onClick={() => router.push("/#home")}>
              {" "}
              <div className="hoverable_btn">{t("home")}</div>{" "}
            </a>
            <a onClick={() => router.push("#catalog")}>
              <div className="hoverable_btn">{t("catalogs")}</div>
            </a>
            <a onClick={() => router.push("/#about")}>
              {" "}
              <div className="hoverable_btn">{t("about")}</div>{" "}
            </a>
            <a onClick={() => router.push("#contact")}>
              {" "}
              <div className="hoverable_btn">{t("contacts")}</div>{" "}
            </a>
          </div>

          <div className={cls.contact_lang_btns}>
            <div className={cls.contact}>
              <a href="tel:+998999999999">71 100-1001</a>
            </div>
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
                        {item.key}
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
