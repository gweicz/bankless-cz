import {useRouter} from "next/router";

export default function Novinka() {

  const router = useRouter();
  const {id} = router.query;

  return <h1>Novinka {id}</h1>

}