import UiUxProjectPage from "./UiUxProjectPage.jsx";
import heroImage from "./assets/images/simkost-home.png";
import secondaryImage from "./assets/images/simkost-detail.png";

export default function SimkostProject(){
  return <UiUxProjectPage
    theme="ux-simkost"
    title="SIMKOST"
    eyebrow="UI/UX DESIGN • PROPERTY SEARCH • FIGMA"
    summary="A UI/UX design for a kos search platform that helps users explore residences and compare rooms more easily."
    description="SIMKOST was designed as a clean housing search experience with clear property discovery, room detail pages, facility information, and booking-oriented decision support."
    figmaUrl="https://www.figma.com/design/gkB6gDssRcHJO7qVmjgXiZ/FINPRO-LAB-DATABASE?node-id=0-1&t=UkSp8qPmDSn080af-1"
    heroImage={heroImage}
    secondaryImage={secondaryImage}
    metrics={[
      { label: "Category", value: "Kos Platform" },
      { label: "Tool", value: "Figma" },
      { label: "Focus", value: "Search & Booking" }
    ]}
  />;
}
