import Layout from '../../components/layouts/admin';
import { isLoggedIn } from '../../gql/Queries/User';
import redirect from '../../utils/redirect';
import AdminWeek from '../../components/AdminWeek';

const testSlots = [
  {
    time: '9:00AM',
    instructor: 'Allison',
    single: false,
    student: ["L'il Timmy", "L'il Jimmy"],
    studentAge: 7,
    notes: null
  },
  {
    time: '10:00AM',
    instructor: 'Allison',
    single: false,
    student: ['Tits McGee', 'Ron Burgundy?'],
    studentAge: 7,
    notes: null
  },
  {
    time: '10:30AM',
    instructor: 'Allison',
    single: true,
    student: 'holden',
    studentAge: 7,
    notes: null
  },
  {
    time: '11:00AM',
    instructor: 'Allison',
    single: true,
    student: 'Trevor',
    studentAge: 7,
    notes: null
  },
  {
    time: '11:30AM',
    instructor: 'Allison',
    single: true,
    student: 'Lauren',
    studentAge: 7,
    notes: null
  },
  {
    time: '12:00PM',
    instructor: 'Allison',
    single: true,
    student: 'Yasirah',
    studentAge: 7,
    notes: null
  },
  {
    time: '12:30PM',
    instructor: 'Allison',
    single: true,
    student: "O'Rourke",
    studentAge: 7,
    notes: null
  },
  {
    time: '1:00PM',
    instructor: 'Suzi',
    single: true,
    student: 'Nick (Batman)',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:00PM',
    instructor: 'Allison',
    single: true,
    student: 'Simmons',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:00PM',
    instructor: 'Lisa',
    single: true,
    student: 'Simmons',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:30PM',
    instructor: 'Suzi',
    single: true,
    student: 'Bondor',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:30PM',
    instructor: 'Allison',
    single: true,
    student: 'Eileen',
    studentAge: 14,
    notes: null
  },
  {
    time: '3:00PM',
    instructor: 'Allison',
    single: true,
    student: 'Nedim',
    studentAge: 14,
    notes: null
  },
  {
    time: '3:30PM',
    instructor: 'Allison',
    single: true,
    student: 'Kai',
    studentAge: 14,
    notes: null
  }
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
  {
    time: '9:00AM',
    instructor: 'Allison',
    single: true,
    student: 'Adam',
    studentAge: 7,
    notes: null
  },
  {
    time: '9:30AM',
    instructor: 'Allison',
    single: true,
    student: 'Joshy',
    studentAge: 7,
    notes: null
  },
  {
    time: '11:00AM',
    instructor: 'Carrie',
    single: false,
    student: ["Tits McGee", "Ron Burgundy?"],
    studentAge: 14,
    notes: null
  },
  {
    time: '11:00AM',
    instructor: 'Tiffani',
    single: true,
    student: 'Terrie',
    studentAge: 14,
    notes: null
  },
  {
    time: '11:30AM',
    instructor: 'Carrie',
    single: true,
    student: 'Luis',
    studentAge: 14,
    notes: null
  },
  {
    time: '11:30AM',
    instructor: 'Tiffani',
    single: false,
    student: ["Me", "n u"],
    studentAge: 14,
    notes: null
  },
  {
    time: '12:00PM',
    instructor: 'Carrie',
    single: true,
    student: 'Sean',
    studentAge: 14,
    notes: null
  },
  {
    time: '12:00PM',
    instructor: 'Tiffani',
    single: true,
    student: 'Beej',
    studentAge: 14,
    notes: null
  },
  {
    time: '12:30PM',
    instructor: 'Tiffani',
    single: false,
    student: ['Suzie', 'Boozie'],
    studentAge: 14,
    notes: null
  },
  {
    time: '1:00PM',
    instructor: 'Tiffani',
    single: true,
    student: 'Elvis',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:30PM',
    instructor: 'Tiffani',
    single: true,
    student: 'Brady',
    studentAge: 14,
    notes: null
  },
  { time: '3:00PM', instructor: 'Suzi', single: true, student: 'LB', studentAge: 14, notes: null },
  {
    time: '3:30PM',
    instructor: 'Suzi',
    single: true,
    student: 'Stinky',
    studentAge: 14,
    notes: null
  },
  {
    time: '4:00PM',
    instructor: 'Tiffani',
    single: true,
    student: 'Sleepy',
    studentAge: 14,
    notes: null
  },
  {
    time: '4:30PM',
    instructor: 'Tiffani',
    single: true,
    student: 'Mega Man',
    studentAge: 14,
    notes: null
  },
  { time: '5:00PM', instructor: 'Suzi', single: true, student: 'Wen', studentAge: 14, notes: null },
  {
    time: '5:00PM',
    instructor: 'Lori',
    single: true,
    student: 'Jampa',
    studentAge: 14,
    notes: null
  },
  { time: '5:30PM', instructor: 'Lori', single: true, student: 'KK', studentAge: 14, notes: null },
  {
    time: '5:30PM',
    instructor: 'Tiffani',
    single: true,
    student: 'Natalie',
    studentAge: 14,
    notes: null
  },
  {
    time: '6:00PM',
    instructor: 'Lori',
    single: true,
    student: 'Steve',
    studentAge: 14,
    notes: null
  },
  {
    time: '6:00PM',
    instructor: 'Lisa',
    single: true,
    student: 'Tony',
    studentAge: 14,
    notes: null
  },
  {
    time: '6:30PM',
    instructor: 'Lori',
    single: true,
    student: 'Meghan',
    studentAge: 14,
    notes: null
  },
  {
    time: '7:00PM',
    instructor: 'Lori',
    single: true,
    student: 'Andy',
    studentAge: 14,
    notes: null
  },
  {
    time: '7:30PM',
    instructor: 'Lisa',
    single: true,
    student: 'Ninja',
    studentAge: 14,
    notes: null
  }
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

const testSlots3 = [];

export const testCollection = [
  testSlots,
  testSlots2,
  testSlots,
  testSlots2,
  testSlots,
  testSlots2,
  testSlots
];

function Home() {
  return (
    <Layout>
      <AdminWeek slotsCollection={testCollection} />
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
