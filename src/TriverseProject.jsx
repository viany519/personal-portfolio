import UiUxProjectPage from "./UiUxProjectPage.jsx";
import heroImage from "./assets/images/triverse-home.png";
import secondaryImage from "./assets/images/triverse-products.png";

export default function TriverseProject(){
  return <UiUxProjectPage
    theme="ux-triverse"
    title="Triverse"
    eyebrow="UI/UX DESIGN • PERFUME E-COMMERCE • FIGMA"
    summary="A UI/UX concept for a perfume e-commerce brand with a dreamy cosmic visual identity."
    description="Triverse presents fragrance products through a polished shopping experience that combines brand storytelling, product discovery, and promotional sections in one cohesive interface."
    figmaUrl="https://www.figma.com/design/6gEzNTqJ5kt9iu1BrrjMNV/LNT-FINPRO?node-id=0-1&t=oLH8m2ZNKI6pQYcj-1"
    heroImage={heroImage}
    secondaryImage={secondaryImage}
    metrics={[
      { label: "Category", value: "Perfume Store" },
      { label: "Tool", value: "Figma" },
      { label: "Focus", value: "Shopping Experience" }
    ]}
  />;
}
