import { useRouter } from 'next/router'

const dynamic = () => {

    const router = useRouter()
    const { dynamic } = router.query
  return (
    <div>Dynamic page {dynamic}</div>
  )
}

export default dynamic