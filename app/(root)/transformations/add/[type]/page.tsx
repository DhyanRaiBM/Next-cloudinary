import Header from "@/components/shared/Header"
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants"
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";


const Page = async ({params:{type}}: SearchParamProps) => {
  console.log(type);
  const { userId } = auth();
  const transformation = transformationTypes[type];
  const user = await getUserById(userId as string);

  return (
    <>
    <Header 
      title={transformation.title}
      subtitle={transformation.subTitle}
    />
    <section className="mt-5">
      <TransformationForm 
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </section>
  </>
  )
}
export default Page