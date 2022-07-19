import Image from "next/future/image";
export default function IMG({src,alt,className,...props}) {

    return(
        <div>
             <Image {...props} className={className} layout='raw' width={0} height={0} src={src} alt={alt}/>
        </div>
    )
}