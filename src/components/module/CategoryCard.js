import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ name, title }) {
  return (
    <div className="shadow m-3 p-1 rounded">
      <Link href={`/properties?category=${name}`}>
        <Image
          className="rounded"
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p className="flex justify-center font-medium text-base">{title}</p>
      </Link>
    </div>
  );
}
