import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {

  const router = useRouter()
  console.log(router)
  const { id } = router.query
  return (
    <div>
      {`Coffee Store Page # ${id}`}<br/><br/>
      <Link href="/">Back to Home</Link><br/><br/>
      <Link href="/coffee-store/1">Go to page 1</Link><br/><br/>
      <Link href="/coffee-store/2">Go to page 2</Link>
    </div>
  )
}

export default CoffeeStore