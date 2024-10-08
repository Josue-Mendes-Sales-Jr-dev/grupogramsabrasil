import Link from 'next/link'
import Image from "next/image"


type ICardProps ={
    Icon?: any|never
    title?: string
    subtitle?: string
    img?:any|never
}

export default function CardProject(props:ICardProps){
    return(
      <>
      <div className="rounded-sm w-[18.5rem] h-[24rem] shadow-3xl">
              <Image src={props.img} className="object-cover rounded-sm w-[100%] h-[70%] hover:scale-110 transition-transform duration-500" width={500} height={500} alt="13"/>
               <div className="w-[100%] h-[20%] opacity-90">
                <div className="flex flex-col items-center justify-center w-[90%] h-[90%]">
                  <p className="text-white text-[.8rem] w-[90%]">
                  * Projeto de barragem!!
                  </p>
                  <p className="text-white text-[.8rem] w-[90%]">
                  * Topografia, Equipamentos
                  </p>
                </div>
               </div>
               <Link href='knowHow' className="flex items-center justify-center w-[100%] h-[10%] px-8 py-3 bg-slate-900 hover:bg-slate-500 text-white">
                 {props.Icon}
               </Link>
             </div>
      </>
    )
}