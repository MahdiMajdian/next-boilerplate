import type { GetStaticPropsContext } from 'next'
import { NextPageWithLayout } from 'app/constants/types'


const Login: NextPageWithLayout = () => {
  return (
    <div>
      <h1>
        Login here
      </h1>
    </div>
  )
}

export default Login

export async function getStaticProps({locale}: GetStaticPropsContext) {

  return {
    props: {
      messages: (await import(`../languages/${locale}.json`)).default,
    }
	};
};
