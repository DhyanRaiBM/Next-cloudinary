import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Home = async () => {
  const projectCreators = ["Dhyan Rai BM", "Pranam Hebbar", "ShanuPrakash", "Hulan Changappa"];
  const techStack = [
    { category: "Frontend", technologies: ["JavaScript (Next.js)", "Tailwind CSS", "Cloudinary API"] },
    { category: "Backend", technologies: ["Node.js (Express.js)", "MongoDB"] },
    { category: "Deployment", technologies: ["Vercel", "Cloudinary"] },
    { category: "Version Control", technologies: ["Git", "GitHub"] },
  ];

  return (
    <>
      <section className="home">
        <div className="border-b-2 pb-7 ">
          <div className="flex justify-around">
          <h1 className="home-heading ">
            AI Image Enhancer : Imagenary
          </h1>
          </div>
          <ul className="flex-center w-full gap-20 mt-5">
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="flex-center flex-col gap-2"
              >
                <li className="flex-center w-fit rounded-full bg-white p-4">
                  <Image src={link.icon} alt="image" width={24} height={24} />
                </li>
                <p className="p-14-medium text-center text-white">{link.label}</p>
              </Link>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <div className="flex justify-around">
          <h1 className="text-xl text-bold text-white ">
            Project By : <span className="font-bold">Dhyan Rai BM</span>
          </h1>
          </div>
          <ul className="flex-center w-full gap-8 mt-6">
              <Link
                href="https://www.linkedin.com/in/dhyan-rai-bm/"
                className="flex-center flex-col gap-2"
              >
                <li className="flex-center w-fit ">
                  {/* <Image src="" alt="image" width={24} height={24} /> */}
                  <GrLinkedin size={30} />
                </li>
                <p className="p-14-medium text-center text-white">Linkedin</p>
              </Link>
              <Link
                href="https://github.com/DhyanRaiBM"
                className="flex-center flex-col gap-2"
              >
                <li className="flex-center w-fit ">
                  {/* <Image src={link.icon} alt="image" width={24} height={24} /> */}
                  <FaGithub size={30} />
                </li>
                <p className="p-14-medium text-center text-white">Github</p>
              </Link>
              <Link
                href="https://www.instagram.com/_dhyan_rai/?igsh=MWloNXM2YXV6ZDZrag%3D%3D"
                className="flex-center flex-col gap-2"
              >
                <li className="flex-center w-fit">
                  {/* <Image src={link.icon} alt="image" width={24} height={24} /> */}
                  <TiSocialInstagram size={30} />

                </li>
                <p className="p-14-medium text-center text-white">Instagram</p>
              </Link>
          </ul>
        </div>
        <div>
          
          {/* <h1 className="mt-10 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-300"><span className="">Project By :</span></h1> */}
          {/* <div className="space-y-2 xl:col-span-3 ml-2">
              <div className="">
                <div>
                  <h2 className="font-bold leading-8 tracking-tight">
                    <span
                      className="text-gray-300"
                    >
                      JavaScript (Next.js):
                    </span>
                  </h2>
                </div>
                <div className=" ml-2 prose max-w-none text-gray-400 dark:text-gray-400">
                Next.js provides a robust framework for building React applications with server-side rendering and simplified routing, enhancing performance and SEO.
                </div>
              </div>
          </div>

          <div className="space-y-2 xl:col-span-3 ml-2">
              <div className="">
                <div>
                  <h2 className="font-bold leading-8 tracking-tight">
                    <span
                      className="text-gray-300"
                    >
                      CSS (Tailwind):
                    </span>
                  </h2>
                </div>
                <div className=" ml-2 prose max-w-none text-gray-400 dark:text-gray-400">
                Tailwind CSS offers a utility-first approach to styling, making it easy to create responsive and customizable designs with concise and readable code.
                </div>
              </div>
          </div>

          <div className="space-y-2 xl:col-span-3 ml-2">
              <div className="">
                <div>
                  <h2 className="font-bold leading-8 tracking-tight">
                    <span
                      className="text-gray-300"
                    >
                      Cloudinary API:
                    </span>
                  </h2>
                </div>
                <div className=" ml-2 prose max-w-none text-gray-400 dark:text-gray-400">
                Cloudinary simplifies image management by providing powerful tools for uploading, transforming, optimizing, and delivering images, enhancing the performance and user experience of web applications.
                </div>
              </div>
          </div> */}
        </div>
      </section>

      {/* <section className="home" >
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 rounded-lg">
        <h1 className="mt-10 mb-4 text-2xl font-extrabold leading-none tracking-tight text-white"><span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">Project By -</span></h1>

          <ul className="text-white">
            {projectCreators.map((creator, index) => (
              <li className="text-lg font-semibold text-white" key={index}>{creator}</li>
            ))}
          </ul>
          <h1 className="mt-10 mb-4 text-2xl font-extrabold leading-none tracking-tight text-white"><span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600">Tech Stack Used -</span></h1>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-2">
              <div>
                <h2 className="font-bold leading-8 tracking-tight">
                  <span
                    className="text-white"
                  >
                    JavaScript (Next.js)
                  </span>
                </h2>
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
              Next.js provides a robust framework for building React applications with server-side rendering and simplified routing, enhancing performance and SEO.
              </div>
            </div>
        </div>
      </div>
      </section> */}
    </>
  );
};

export default Home;
