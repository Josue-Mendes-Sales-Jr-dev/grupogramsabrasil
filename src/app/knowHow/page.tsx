import H1 from "@/components/h1"
import Image from "next/image"
import Imag from "../../../images/gramsa rubens.jpeg"



export default function KnowHow(){
    return(
        <div className="flex flex-col gap-5 items-center mt-20 sm:mt-5">
            <H1 className="w-[20rem] sm:w-[10vw] text-center text-white text-[2rem] border-solid border-b-4">
                Inovação
            </H1>
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[100vh] w-[100vw]">
             
            <div className=" py-20 rounded-tl-[3rem] w-[80%] sm:w-[50%] min-h-[70vh] flex flex-col items-center justify-center bg-white">
              <H1 className="text-blue-400 text-[2rem]">
                Gramsa
              </H1>
              <div className="w-[80%] text-center text-black flex flex-col items-center gap-4">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
             
              </div>
            </div>
            <div className="w-[80%] sm:w-[50%] h-[70vh] flex items-center justify-center ">
                <Image src={Imag} className="w-[100%] ] h-[100%]  rounded-br-[3rem]" width={500} height={500} alt="imagem"/>
             </div>
        
        </div>
        <div className="w-[100vw] flex flex-col items-center gap-10 pb-20">
              <H1 className="text-white w-[20rem] sm:w-[10rem] text-center text-[2rem] border-solid border-b-4">
                GRAMSA
              </H1>
              <div className="w-[70%] text-center lg:w-[85%] flex flex-col items-center gap-5 justify-between text-black sm:columns-2 lg:columns-3">
                <p className="bg-white p-10 rounded-md">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p className="bg-white p-10 rounded-md">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                <p className="bg-white p-10 rounded-md">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et recusandae impedit natus dicta laborum quidem adipisci, animi in! Rerum, enim voluptatum! A tempora inventore et sint pariatur asperiores iste ut!
                </p>
                
              </div>
          </div>
        </div>
    )
}