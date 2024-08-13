import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Featured/>
     <CategoryList/>
     <div className="flex gap-[50px]">
      {/* <CardList/> */}
      {/* <Menu/> */}
     </div>
    </div>
  );
}
