import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ secretTest, secretTest2, secretTest3 }) {
	console.log('the secret test', secretTest)
	console.log('the secret test2', secretTest2)
	console.log('the secret test3', secretTest3)
	return <div>Testing</div>
}

export async function getServerSideProps() {
	/* trying to see which env vars show up
  SECRET_TEST is set in the amplify console
  SECRET_TEST_OTHER is set Amplify console
  SECRET_TEST_OTHER_ONE is set in parameter store: https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html#environment-secrets
  */

	// Where does this stuff get logged??
	// Why do the Amplify Console build logs show this as an SSG app and not an SSR app?
	console.log(process.env.SECRET_TEST)
	console.log(process.env.secrets?.SECRET_TEST_OTHER)
	console.log(process.env.secrets?.SECRET_TEST_OTHER_ONE)

	return {
		props: {
			secretTest: process.env.SECRET_TEST,
			secretTest2: process.env.secrets?.SECRET_TEST_OTHER || 'nothing',
			secretTest3: process.env.secrets?.SECRET_TEST_OTHER_ONE || 'nope',
		},
	}
}
