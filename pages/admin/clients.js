import Layout from '../../components/layouts/admin';
import { isLoggedIn } from '../../gql/Queries/User';
import redirect from '../../utils/redirect';
import ClientTable from '../../components/clientTable'

function Home() {
	console.log('hi')
	return (
		<Layout>
			<ClientTable />
		</Layout>
	);
}

export default Home;

Home.getInitialProps = async ctx => {
	const { currentUser } = await isLoggedIn(ctx.apolloClient);
	console.log(currentUser);
	if (!currentUser) {
		redirect(ctx, '/admin/login');
	} else {
		return {};
	}
};