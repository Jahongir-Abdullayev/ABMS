
import useTranslation from "next-translate/useTranslation";
import { AboutUsBlock } from "./AboutUsBlock";
import { OwnFactory } from "./OwnFactory";
import { BarChart } from "./Barchart";
import { Gallery } from "./Gallery";
import { Certificate } from "./Certificate";


export function AboutUsPage() {
  

  return (
    <div>
     <AboutUsBlock />
     <BarChart />
     <OwnFactory />
     <Gallery />
     <Certificate />
    </div>
  );
}