import Layout from '../../components/layouts/admin';
import { isLoggedIn } from '../../gql/Queries/User';
import redirect from '../../utils/redirect';


function Home() {
	return (
		<Layout>
			<div>No, this is Patrick!</div>
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
