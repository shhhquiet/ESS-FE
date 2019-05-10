import Layout from '../../components/layouts/admin';
import { isLoggedIn } from '../../gql/Queries/User';
import redirect from '../../utils/redirect';
import TimeLine from '../../components/AdminWeek'

const testSlots = [
  { time: '9:00AM', instructor: 'Allison', single: false, student: 'Lil Timmy', studentAge: 7, notes: null },
  { time: '10:00AM', instructor: 'Allison', single: false, student: 'jimjam', studentAge: 7, notes: null },
  { time: '10:30AM', instructor: 'Allison', single: true, student: 'jimjam', studentAge: 7, notes: null },
  { time: '11:00AM', instructor: 'Allison', student: 'jimjam', studentAge: 7, notes: null },
  { time: '11:30AM', instructor: 'Allison', student: 'jimjam', studentAge: 7, notes: null },
  { time: '12:00PM', instructor: 'Allison', student: 'jimjam', studentAge: 7, notes: null },
  { time: '12:30PM', instructor: 'Allison', student: 'jimjam', studentAge: 7, notes: null },
  { time: '1:00PM', instructor: 'Suzi', student: 'Suzie', studentAge: 14, notes: null },
  { time: '1:00PM', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  { time: '1:30PM', instructor: 'Suzi', student: 'Suzie', studentAge: 14, notes: null },
  { time: '1:30PM', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  { time: '3:00PM', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  { time: '3:30PM', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  // {
  //   time: '9:00AM',
  //   instructor: 'Lisa',
  //   student: 'Bblo',
  //   studentAge: 24,
  //   notes: ['Nerd', 'Weird Arms', 'Freakishly Long Hair']
  // },
  // { time: '9:00AM', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  // {
  //   time: '2:00PM',
  //   instructor: 'Allison',
  //   student: 'Trevbun',
  //   studentAge: 37,
  //   notes: ['Handsome af', 'cool dude']
  // },
  // { time: '2:30PM', instructor: 'Tiffani', student: 'Jimmy', studentAge: 12, notes: null }
];

const testSlots2 = [
  { time: '9:00AM', instructor: 'Allison', single: true, student: 'Private', studentAge: 7, notes: null },
  { time: '9:30AM', instructor: 'Allison', single: true, student: 'Private', studentAge: 7, notes: null },
  { time: '11:00AM', instructor: 'Carrie', single: false, student: 'Private', studentAge: 14, notes: null },
  { time: '11:00AM', instructor: 'Tiffani', single: true, student: 'Semi Private', studentAge: 14, notes: null },
  { time: '11:30AM', instructor: 'Carrie', single: true, student: 'Private', studentAge: 14, notes: null },
  { time: '11:30AM', instructor: 'Tiffani', single: false, student: 'Semi Private', studentAge: 14, notes: null },
  { time: '12:00PM', instructor: 'Carrie', single: true, student: 'Suzie', studentAge: 14, notes: null },
  { time: '12:00PM', instructor: 'Tiffani', single: true, student: 'Suzie', studentAge: 14, notes: null },
  { time: '12:30PM', instructor: 'Tiffani', single: false, student: 'Suzie', studentAge: 14, notes: null },
  { time: '1:00PM', instructor: 'Tiffani', student: 'Suzie', studentAge: 14, notes: null },
  { time: '1:30PM', instructor: 'Tiffani', student: 'Suzie', studentAge: 14, notes: null },
  { time: '3:00PM', instructor: 'Suzi', student: 'Suzie', studentAge: 14, notes: null },
  { time: '3:30PM', instructor: 'Suzi', student: 'Suzie', studentAge: 14, notes: null },
  { time: '4:00PM', instructor: 'Tiffani', student: 'Suzie', studentAge: 14, notes: null },
  { time: '4:30PM', instructor: 'Tiffani', student: 'Suzie', studentAge: 14, notes: null },
  { time: '5:00PM', instructor: 'Suzi', student: 'Suzie', studentAge: 14, notes: null },
  { time: '5:00PM', instructor: 'Lori', student: 'Suzie', studentAge: 14, notes: null },
  { time: '5:30PM', instructor: 'Lori', student: 'Suzie', studentAge: 14, notes: null },
  { time: '5:30PM', instructor: 'Tiffani', student: 'Suzie', studentAge: 14, notes: null },
  { time: '6:00PM', instructor: 'Lori', student: 'Suzie', studentAge: 14, notes: null },
  { time: '6:00PM', instructor: 'Lisa', student: 'Suzie', studentAge: 14, notes: null },
  { time: '6:30PM', instructor: 'Lori', student: 'Suzie', studentAge: 14, notes: null },
  { time: '7:00PM', instructor: 'Lori', student: 'Suzie', studentAge: 14, notes: null },
  { time: '7:30PM', instructor: 'Lisa', student: 'Suzie', studentAge: 14, notes: null },
  // {
  //   time: '9:00AM',
  //   instructor: 'Lisa',
  //   student: 'Bblo',
  //   studentAge: 24,
  //   notes: ['Nerd', 'Weird Arms', 'Freakishly Long Hair']
  // },
  // {
  //   time: '1:00PM',
  //   instructor: 'Lisa',
  //   student: 'Bblo',
  //   studentAge: 24,
  //   notes: ['Nerd', 'Weird Arms', 'Freakishly Long Hair']
  // },
  // { time: '1:00PM', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  // { time: '10:30AM', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  // {
  //   time: '2:00PM',
  //   instructor: 'Allison',
  //   student: 'Trevbun',
  //   studentAge: 37,
  //   notes: ['Handsome af', 'cool dude']
  // },
  // { time: '4:30PM', instructor: 'Tiffani', student: 'Jimmy', studentAge: 12, notes: null }
];

const testSlots3 = [

]

const testCollection = [
  testSlots,
  testSlots2,
  testSlots,
  testSlots2,
  testSlots,
  testSlots2,
  testSlots,
]

function Home() {
	return (
		<Layout>
			<TimeLine slotsCollection={testCollection}/>
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