// import {SyncLoader} from 'react-spinners'

import { LoadingSpinner } from "@/components/shared/LoadingSpinner"

// type Props = {}
// const loading = (props: Props) => {
//   return (
//     <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height:"100vh",
//         width:"100%",
//     }} ><SyncLoader color="#36d7b7"/></div>
//   )
// }
// export default loading



type Props = {}
const loading = (props: Props) => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:"100vh",
        width:"100%",
    }} ><LoadingSpinner className="" /></div>
  )
}
export default loading