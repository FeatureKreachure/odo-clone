import Block from "@/components/Block";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex gap-3 mx-10">
        <Block
          imageSrc="/daily/pink.svg"
          title="Item"
          description="item description"
          price={299}
          knockoff={399}
          discount={20}
        />
        <Block
          imageSrc="/daily/pink.svg"
          title="Item"
          description="item description"
          price={299}
          knockoff={399}
          discount={20}
        />
      </div>
    </main>
  );
}
