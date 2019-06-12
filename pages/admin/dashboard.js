import Layout from '../../components/layouts/admin';
import Dashboard from '../../components/AdminDash'
import { isLoggedIn } from '../../gql/Queries/User';
import redirect from '../../utils/redirect';

function Home() {
	return (<Layout><Dashboard /></Layout>);
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

