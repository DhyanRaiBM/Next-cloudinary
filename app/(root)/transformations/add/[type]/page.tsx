import Header from "@/components/shared/Header"
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants"


const Page = async ({params:{type}}: SearchParamProps) => {
  console.log(type);
  const transformation = transformationTypes[type];

  return (
    <>
    <Header 
      title={transformation.title}
      subtitle={transformation.subTitle}
    />
    <section className="mt-5">
        <TransformationForm 
          type={transformation.type as TransformationTypeKey}
        />

    </section>
  </>
  )
}
export default Page