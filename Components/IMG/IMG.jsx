import Image from "next/future/image";
export default function IMG({src,alt}) {

    return(
        <div>
             <Image width={0} height={0} src={src} alt={alt}/>
        </div>
    )
}