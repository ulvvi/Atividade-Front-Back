export type CategoryProps = {
    title: string;
    image: string;
    imgAlt: string;
};  

export default function Category({ title, image, imgAlt }: CategoryProps) {
    return(
        <div className="w-[70px] h-[72px] flex flex-col justify-between items-center">
            <img src={image} alt={imgAlt} className="w-[49px] h-[51px]"/>
            <h1 className="w-[] h-[p17x] text-[14px] text-[#2B2B2B]">{title}</h1>
        </div>
    )
}

