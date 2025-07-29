import { Language, Lesson, Badge } from '../types'

export const languages: Language[] = [
  {
    id: '1',
    name: 'Javanese',
    code: 'jv',
    pulau: 'Jawa',
    description: 'Learn the most widely spoken regional language in Indonesia',
    total_lessons: 25
  },
  {
    id: '2',
    name: 'Sundanese',
    code: 'su',
    pulau: 'Jawa',
    description: 'Discover the beautiful language of West Java',
    total_lessons: 20
  },
  {
    id: '3',
    name: 'Batak',
    code: 'btk',
    pulau: 'Sumatera',
    description: 'Explore the rich language of North Sumatra',
    total_lessons: 18
  },
  {
    id: '4',
    name: 'Minang',
    code: 'min',
    pulau: 'Sumatera',
    description: 'Learn the expressive language of West Sumatra',
    total_lessons: 22
  }
]
export const javaneseBasicLessons: Lesson[] = [
  {
    id: '1',
    language_id: '1',
    title: 'Basic Greetings',
    description: 'Learn essential Javanese greetings',
    level: 'Beginner',
    order: 1,
    xp_reward: 10,
    is_completed: false,
    questions: [
      {
        id: '1',
        type: 'multiple_choice',
        question: 'How do you say "Good morning" in Javanese?',
        options: ['Sugeng enjing', 'Sugeng siang', 'Sugeng sonten', 'Sugeng dalu'],
        correct_answer: 'Sugeng enjing'
      },
      {
        id: '2',
        type: 'multiple_choice',
        question: 'What does "Piye kabare?" mean?',
        options: ['How are you?', 'What is your name?', 'Where are you from?', 'How old are you?'],
        correct_answer: 'How are you?'
      },
      {
        id: '3',
        type: 'drag_drop',
        question: 'Match the Javanese greeting with its meaning',
        options: ['Sugeng rawuh', 'Welcome'],
        correct_answer: 'Welcome'
      }
    ]
  },
  {
    id: '2',
    language_id: '1',
    title: 'Order At a Cafe or Stall',
    description: 'Learn Javanese words for order at a cafe',
    level: 'Beginner',
    order: 2,
    xp_reward: 15,
    is_completed: false,
    questions: [
      {
        id: '4',
        type: 'multiple_choice',
        question: 'How do you say "I want to order" in Javanese?',
        options: ['Aku arep pesen', 'Aku mangan', 'Aku ngombe', 'Aku tuku'],
        correct_answer: 'Aku arep pesen'
      },
      {
        id: '5',
        type: 'fill_blank',
        question: 'Complete: "___ kopi siji, Bu." (One coffee, ma’am)',
        options: ['Pesen', 'Kula', 'Tulung', 'Aku'],
        correct_answer: 'Tulung'
      },
      {
        id: '6',
        type: 'multiple_choice',
        question: 'What is the Javanese word for "drink"?',
        options: ['Ngombe', 'Mangan', 'Pesen', 'Tuku'],
        correct_answer: 'Ngombe'
      },
      {
        id: '7',
        type: 'fill_blank',
        question: 'Complete: "Aku ___ wedang jahe." (I drink ginger tea)',
        options: ['mangan', 'ngombe', 'pesen', 'dahar'],
        correct_answer: 'ngombe'
      },
      {
        id: '8',
        type: 'multiple_choice',
        question: 'What does "mangan" mean?',
        options: ['To buy', 'To eat', 'To drink', 'To order'],
        correct_answer: 'To eat'
      },
      {
        id: '9',
        type: 'fill_blank',
        question: 'Complete: "Aku ___ bakso rong." (I want two meatballs)',
        options: ['pesen', 'tuku', 'arep', 'mangan'],
        correct_answer: 'pesen'
      },
      {
        id: '10',
        type: 'multiple_choice',
        question: 'How do you say "delicious" in Javanese?',
        options: ['Enak', 'Panas', 'Asem', 'Manis'],
        correct_answer: 'Enak'
      },
      {
        id: '11',
        type: 'fill_blank',
        question: 'Complete: "Wedang ronde iki ___ banget!" (This ronde is very delicious!)',
        options: ['asem', 'enak', 'panas', 'legit'],
        correct_answer: 'enak'
      },
      {
        id: '12',
        type: 'multiple_choice',
        question: 'What is "please give me the menu" in Javanese?',
        options: ['Tulung wenehi menu', 'Tulung pesen siji', 'Aku arep mangan', 'Wenehno panganan'],
        correct_answer: 'Tulung wenehi menu'
      },
      {
        id: '13',
        type: 'fill_blank',
        question: 'Complete: "___ teh anget siji, Mas." (One hot tea, bro)',
        options: ['Tuku', 'Pesen', 'Tulung', 'Ngombe'],
        correct_answer: 'Tulung'
      }
    ]
  },
  {
    id: '3',
    language_id: '1',
    title: 'Family Members',
    description: 'Learn Javanese words for family',
    level: 'Beginner',
    order: 3,
    xp_reward: 15,
    is_completed: false,
    questions: [
      {
        id: '14',
        type: 'multiple_choice',
        question: 'How do you say "mother" in Javanese?',
        options: ['Ibu', 'Bapak', 'Mbah', 'Simbah'],
        correct_answer: 'Ibu'
      },
      {
        id: '15',
        type: 'fill_blank',
        question: 'Complete: My father is "___" in Javanese',
        options: ['Bapak', 'Ibu', 'Adhik', 'Kakang'],
        correct_answer: 'Bapak'
      },
      {
        id: '16',
        type: 'multiple_choice',
        question: 'What is "older brother" in Javanese?',
        options: ['Adhik', 'Kakang', 'Ibu', 'Sedulur'],
        correct_answer: 'Kakang'
      },
      {
        id: '17',
        type: 'fill_blank',
        question: 'Complete: "Younger sibling" is "___" in Javanese',
        options: ['Kakang', 'Adhik', 'Mbah', 'Pakdhe'],
        correct_answer: 'Adhik'
      },
      {
        id: '18',
        type: 'multiple_choice',
        question: 'What is the Javanese word for "grandparent"?',
        options: ['Pakdhe', 'Mbah', 'Ibu', 'Sedulur'],
        correct_answer: 'Mbah'
      },
      {
        id: '19',
        type: 'fill_blank',
        question: 'Complete: My grandfather is called "___"',
        options: ['Mbah Kakung', 'Mbah Putri', 'Bude', 'Kakang'],
        correct_answer: 'Mbah Kakung'
      },
      {
        id: '20',
        type: 'multiple_choice',
        question: 'How do you say "aunt (older than parent)" in Javanese?',
        options: ['Pakdhe', 'Bude', 'Adhik', 'Sedulur'],
        correct_answer: 'Bude'
      },
      {
        id: '21',
        type: 'multiple_choice',
        question: 'How do you say "uncle (older than parent)" in Javanese?',
        options: ['Bude', 'Pakdhe', 'Kakang', 'Mbah'],
        correct_answer: 'Pakdhe'
      },
      {
        id: '22',
        type: 'fill_blank',
        question: 'Complete: "Sibling" in Javanese is "___"',
        options: ['Sedulur', 'Adhik', 'Kakang', 'Ibu'],
        correct_answer: 'Sedulur'
      },
      {
        id: '23',
        type: 'multiple_choice',
        question: 'What is "grandmother" in Javanese?',
        options: ['Mbah Putri', 'Mbah Kakung', 'Ibu', 'Bude'],
        correct_answer: 'Mbah Putri'
      }
    ]
  },
  {
    id: '4',
    language_id: '1',
    title: 'Get to Know and Greet Other People',
    description: 'Learn Javanese words for how to greet other people',
    level: 'Intermediate',
    order: 4,
    xp_reward: 20,
    is_completed: false,
    questions: [
      {
        id: '24',
        type: 'multiple_choice',
        question: 'How do you say "Hello" politely in Javanese?',
        options: ['Halo', 'Sugeng enjing', 'Apa kabar', 'Kulo nuwun'],
        correct_answer: 'Kulo nuwun'
      },
      {
        id: '25',
        type: 'fill_blank',
        question: 'Complete: "___ jenengmu sopo?" (What is your name?)',
        options: ['Jeneng', 'Sopo', 'Kowe', 'Eh'],
        correct_answer: 'Jeneng'
      },
      {
        id: '26',
        type: 'multiple_choice',
        question: 'What is "My name is..." in Javanese?',
        options: ['Jenengku...', 'Aku jeneng...', 'Asma kula...', 'Kulo jeneng...'],
        correct_answer: 'Jenengku...'
      },
      {
        id: '27',
        type: 'fill_blank',
        question: 'Complete: "___ kabarmu?" (How are you?)',
        options: ['Piye', 'Sopo', 'Apa', 'Nopo'],
        correct_answer: 'Piye'
      },
      {
        id: '28',
        type: 'multiple_choice',
        question: 'What is "I’m fine, thank you" in Javanese?',
        options: ['Aku ora papa, matur nuwun', 'Kulo sehat', 'Aku baik', 'Alhamdulillah apik'],
        correct_answer: 'Aku ora papa, matur nuwun'
      },
      {
        id: '29',
        type: 'fill_blank',
        question: 'Complete: "___ kabar sampeyan?" (How are you? - polite)',
        options: ['Piye', 'Kulo', 'Napa', 'Kabar'],
        correct_answer: 'Piye'
      },
      {
        id: '30',
        type: 'multiple_choice',
        question: 'How do you say "Good morning" in Javanese?',
        options: ['Sugeng dalu', 'Sugeng enjing', 'Sugeng sonten', 'Enjing wae'],
        correct_answer: 'Sugeng enjing'
      },
      {
        id: '31',
        type: 'multiple_choice',
        question: 'How do you say "Good evening" in Javanese?',
        options: ['Sugeng enjing', 'Sugeng siang', 'Sugeng dalu', 'Sugeng wengi'],
        correct_answer: 'Sugeng dalu'
      },
      {
        id: '32',
        type: 'fill_blank',
        question: 'Complete: "___ asalmu?" (Where are you from?)',
        options: ['Saka', 'Asal', 'Saking', 'Kulo'],
        correct_answer: 'Saka'
      },
      {
        id: '33',
        type: 'multiple_choice',
        question: 'How do you say "Nice to meet you" in Javanese?',
        options: ['Seneng ketemu kowe', 'Sugeng rawuh', 'Aku seneng', 'Sampun ketemu'],
        correct_answer: 'Seneng ketemu kowe'
      },
      {
        id: '34',
        type: 'fill_blank',
        question: 'Complete: "Aku ___ saking Jakarta." (I am from Jakarta)',
        options: ['asal', 'tiba', 'saka', 'arep'],
        correct_answer: 'saka'
      },
      {
        id: '35',
        type: 'multiple_choice',
        question: 'What is a polite way to greet an elder in Javanese?',
        options: ['Halo', 'Kulo nuwun', 'Piye kabarmu', 'Apa kabar'],
        correct_answer: 'Kulo nuwun'
      },
      {
        id: '36',
        type: 'fill_blank',
        question: 'Complete: "Sugeng ___!" (Good night!)',
        options: ['dalem', 'dalu', 'sonten', 'esuk'],
        correct_answer: 'dalu'
      }
    ]
  },
  {
    id: '5',
    language_id: '1',
    title: 'Introduce the Family',
    description: 'Learn Javanese words for introduce the family',
    level: 'Intermediate',
    order: 5,
    xp_reward: 20,
    is_completed: false,
    questions: [
      {
        id: '37',
        type: 'multiple_choice',
        question: 'How do you say "This is my father" in Javanese?',
        options: ['Iki bapakku', 'Iki bapakmu', 'Iki adhikku', 'Kono bapakku'],
        correct_answer: 'Iki bapakku'
      },
      {
        id: '38',
        type: 'fill_blank',
        question: 'Complete: "Iki ___ ibuku." (This is my mother)',
        options: ['bapak', 'ibu', 'ibuku', 'kakak'],
        correct_answer: 'ibuku'
      },
      {
        id: '39',
        type: 'multiple_choice',
        question: 'What does "adhikku" mean?',
        options: ['My younger sibling', 'My uncle', 'My cousin', 'My mother'],
        correct_answer: 'My younger sibling'
      },
      {
        id: '40',
        type: 'fill_blank',
        question: 'Complete: "Iki ___ kakangku." (This is my older brother)',
        options: ['kakang', 'kakangku', 'sedulur', 'pakdhe'],
        correct_answer: 'kakangku'
      },
      {
        id: '41',
        type: 'multiple_choice',
        question: 'How do you say "My sister is beautiful" in Javanese?',
        options: ['Adhikku ayu', 'Kakakku bagus', 'Mbakyuku bagus', 'Mbakyuku ayu'],
        correct_answer: 'Mbakyuku ayu'
      },
      {
        id: '42',
        type: 'fill_blank',
        question: 'Complete: "Aku duwe ___ loro." (I have two siblings)',
        options: ['kanca', 'anak', 'sedulur', 'ibu'],
        correct_answer: 'sedulur'
      },
      {
        id: '43',
        type: 'multiple_choice',
        question: 'What is "anak" in English?',
        options: ['Child', 'Parent', 'Uncle', 'Sister'],
        correct_answer: 'Child'
      },
      {
        id: '44',
        type: 'fill_blank',
        question: 'Complete: "Pakdheku ___ banget." (My uncle is very kind)',
        options: ['ayem', 'becik', 'banter', 'dhuwur'],
        correct_answer: 'becik'
      },
      {
        id: '45',
        type: 'multiple_choice',
        question: 'How do you say "My grandfather is from Solo" in Javanese?',
        options: ['Mbah kakungku saka Solo', 'Mbah kakung saka Solo', 'Pakdheku Solo', 'Kakangku saka Solo'],
        correct_answer: 'Mbah kakungku saka Solo'
      },
      {
        id: '46',
        type: 'fill_blank',
        question: 'Complete: "___ jenenge Siti." (Her name is Siti)',
        options: ['Jenenge', 'Jenengku', 'Jenengmu', 'Aku'],
        correct_answer: 'Jenenge'
      },
      {
        id: '47',
        type: 'multiple_choice',
        question: 'What is the Javanese word for "husband"?',
        options: ['Bojo lanang', 'Bojo wadon', 'Kakang', 'Sedulur'],
        correct_answer: 'Bojo lanang'
      },
      {
        id: '48',
        type: 'multiple_choice',
        question: 'What is the Javanese word for "wife"?',
        options: ['Bojo wadon', 'Bojo lanang', 'Ibu', 'Adhik'],
        correct_answer: 'Bojo wadon'
      },
      {
        id: '49',
        type: 'fill_blank',
        question: 'Complete: "Bojo ___ guru." (My spouse is a teacher)',
        options: ['ku', 'nya', 'kuwu', 'bojo'],
        correct_answer: 'ku'
      }
    ]
  },
  {
    id: '6',
    language_id: '1',
    title: 'Talking About Food',
    description: 'Learn Javanese words for talking about food',
    level: 'Intermediate',
    order: 6,
    xp_reward: 20,
    is_completed: false,
    questions: [
      {
        id: '50',
        type: 'multiple_choice',
        question: 'What is "rice" in Javanese?',
        options: ['Wadhah', 'Nasi', 'Sega', 'Panganan'],
        correct_answer: 'Sega'
      },
      {
        id: '51',
        type: 'fill_blank',
        question: 'Complete: "Aku arep mangan ___." (I want to eat rice)',
        options: ['nasi', 'roti', 'sega', 'teh'],
        correct_answer: 'sega'
      },
      {
        id: '52',
        type: 'multiple_choice',
        question: 'How do you say "vegetables" in Javanese?',
        options: ['Sayur', 'Godhog', 'Lauk', 'Ulam'],
        correct_answer: 'Sayur'
      },
      {
        id: '53',
        type: 'fill_blank',
        question: 'Complete: "Sayur ___ iku enak." (That vegetable soup is delicious)',
        options: ['asem', 'godhog', 'lodeh', 'urap'],
        correct_answer: 'lodeh'
      },
      {
        id: '54',
        type: 'multiple_choice',
        question: 'What is "spicy" in Javanese?',
        options: ['Asin', 'Pedhes', 'Manis', 'Asem'],
        correct_answer: 'Pedhes'
      },
      {
        id: '55',
        type: 'fill_blank',
        question: 'Complete: "Sambel iki ___ banget!" (This chili sauce is very spicy!)',
        options: ['manis', 'pedhes', 'asam', 'gurih'],
        correct_answer: 'pedhes'
      },
      {
        id: '56',
        type: 'multiple_choice',
        question: 'How do you say "sweet" in Javanese?',
        options: ['Asin', 'Gurih', 'Manis', 'Legi'],
        correct_answer: 'Legi'
      },
      {
        id: '57',
        type: 'fill_blank',
        question: 'Complete: "Wedang jahe iku ___." (Ginger tea is sweet)',
        options: ['pedhes', 'gurih', 'legi', 'asem'],
        correct_answer: 'legi'
      },
      {
        id: '58',
        type: 'multiple_choice',
        question: 'What is the Javanese word for "snack"?',
        options: ['Kudapan', 'Cemilan', 'Jajan', 'Panganan cilik'],
        correct_answer: 'Jajan'
      },
      {
        id: '59',
        type: 'fill_blank',
        question: 'Complete: "Aku tuku ___ pasar." (I bought snacks at the market)',
        options: ['jajan', 'sega', 'sambel', 'ayam'],
        correct_answer: 'jajan'
      },
      {
        id: '60',
        type: 'multiple_choice',
        question: 'What is "fried chicken" in Javanese?',
        options: ['Ayam goreng', 'Ayam bakar', 'Ayam penyet', 'Goreng ayam'],
        correct_answer: 'Ayam goreng'
      },
      {
        id: '61',
        type: 'fill_blank',
        question: 'Complete: "Aku seneng ___ goreng karo sambel." (I like fried chicken with chili sauce)',
        options: ['ayam', 'ikan', 'tempe', 'sayur'],
        correct_answer: 'ayam'
      },
      {
        id: '62',
        type: 'multiple_choice',
        question: 'How do you say "I am full" in Javanese?',
        options: ['Luwe', 'Wareg', 'Ngantuk', 'Kenyang'],
        correct_answer: 'Wareg'
      }
    ]
  },
  {
    id: '7',
    language_id: '1',
    title: 'Asking for Directions',
    description: 'Learn Javanese words for asking for directions',
    level: 'Intermediate',
    order: 7,
    xp_reward: 20,
    is_completed: false,
    questions: [
      {
        id: '63',
        type: 'multiple_choice',
        question: 'How do you say "Where is..." in Javanese?',
        options: ['Apa iku', 'Kepiye', 'Nanging ngendi', 'Ngendi'],
        correct_answer: 'Ngendi'
      },
      {
        id: '64',
        type: 'fill_blank',
        question: 'Complete: "___ alun-alun kutha?" (Where is the town square?)',
        options: ['Apa', 'Ngendi', 'Saka', 'Piye'],
        correct_answer: 'Ngendi'
      },
      {
        id: '65',
        type: 'multiple_choice',
        question: 'What is "turn right" in Javanese?',
        options: ['Ngidul', 'Ngiri', 'Nengen', 'Minggir'],
        correct_answer: 'Nengen'
      },
      {
        id: '66',
        type: 'fill_blank',
        question: 'Complete: "Saka kene, ___ nengen." (From here, turn right)',
        options: ['mlaku', 'meneng', 'mlebu', 'nengen'],
        correct_answer: 'nengen'
      },
      {
        id: '67',
        type: 'multiple_choice',
        question: 'How do you say "go straight" in Javanese?',
        options: ['Lurus wae', 'Ngidul', 'Tengen', 'Kiri'],
        correct_answer: 'Lurus wae'
      },
      {
        id: '68',
        type: 'fill_blank',
        question: 'Complete: "___ wae nganti lampu abang." (Go straight until the red light)',
        options: ['Ngidul', 'Tengen', 'Lurus', 'Kiri'],
        correct_answer: 'Lurus'
      },
      {
        id: '69',
        type: 'multiple_choice',
        question: 'What does "ngidul" mean?',
        options: ['North', 'South', 'East', 'West'],
        correct_answer: 'South'
      },
      {
        id: '70',
        type: 'multiple_choice',
        question: 'What is "market" in Javanese?',
        options: ['Pasar', 'Alun-alun', 'Sekolah', 'Kutha'],
        correct_answer: 'Pasar'
      },
      {
        id: '71',
        type: 'fill_blank',
        question: 'Complete: "Aku arep menyang ___." (I want to go to the market)',
        options: ['kutha', 'sekolah', 'pasar', 'masjid'],
        correct_answer: 'pasar'
      },
      {
        id: '72',
        type: 'multiple_choice',
        question: 'How do you ask "How do I get to..." in Javanese?',
        options: ['Kepiye carane menyang...', 'Ngendi dalane...', 'Apa jenenge...', 'Menehke aku...'],
        correct_answer: 'Kepiye carane menyang...'
      }
    ]
  },
  {
    id: '8',
    language_id: '1',
    title: 'Talking About Work',
    description: 'Learn Javanese words for talking about work',
    level: 'Advanced',
    order: 8,
    xp_reward: 25,
    is_completed: false,
    questions: [
      {
        id: '73',
        type: 'multiple_choice',
        question: 'How do you say "I work as a teacher" in Javanese?',
        options: ['Aku kerja dadi guru', 'Aku dadi siswa', 'Aku sekolah guru', 'Aku nyambut damel guru'],
        correct_answer: 'Aku kerja dadi guru'
      },
      {
        id: '74',
        type: 'fill_blank',
        question: 'Complete: "Aku ___ ing kantor saben dina." (I work at the office every day)',
        options: ['kerja', 'lungo', 'ngaso', 'dolanan'],
        correct_answer: 'kerja'
      },
      {
        id: '75',
        type: 'multiple_choice',
        question: 'What is "job" in Javanese?',
        options: ['Kerja', 'Nyambut damel', 'Pegaweyan', 'Tugas'],
        correct_answer: 'Pegaweyan'
      },
      {
        id: '76',
        type: 'fill_blank',
        question: 'Complete: "Apa ___ panjenengan?" (What is your occupation?)',
        options: ['pegaweyan', 'kerjo', 'gawean', 'tugas'],
        correct_answer: 'pegaweyan'
      },
      {
        id: '77',
        type: 'multiple_choice',
        question: 'How do you say "I am unemployed" in Javanese?',
        options: ['Aku ora kerja', 'Aku lulus', 'Aku pegawai', 'Aku sekolah'],
        correct_answer: 'Aku ora kerja'
      },
      {
        id: '78',
        type: 'fill_blank',
        question: 'Complete: "Dheweke ___ ing rumah sakit." (He works at the hospital)',
        options: ['kerja', 'nginep', 'turu', 'nyambut damel'],
        correct_answer: 'nyambut damel'
      },
      {
        id: '79',
        type: 'multiple_choice',
        question: 'What does "kantor" mean?',
        options: ['Factory', 'School', 'Office', 'Market'],
        correct_answer: 'Office'
      },
      {
        id: '80',
        type: 'fill_blank',
        question: 'Complete: "Jam kerja diwiwiti jam ___." (Work starts at __ o’clock)',
        options: ['pitu', 'sewidak', 'telu', 'siji'],
        correct_answer: 'pitu'
      },
      {
        id: '81',
        type: 'multiple_choice',
        question: 'How do you say "meeting" in Javanese?',
        options: ['Rapat', 'Sekolah', 'Tugas', 'Lelungan'],
        correct_answer: 'Rapat'
      },
      {
        id: '82',
        type: 'fill_blank',
        question: 'Complete: "Kita duwe ___ jam rolas." (We have a meeting at twelve)',
        options: ['gawean', 'kerjo', 'rapat', 'kuliah'],
        correct_answer: 'rapat'
      },
      {
        id: '83',
        type: 'multiple_choice',
        question: 'What is "salary" in Javanese?',
        options: ['Bayaran', 'Gaji', 'Upah', 'Panghasilan'],
        correct_answer: 'Gaji'
      },
      {
        id: '84',
        type: 'fill_blank',
        question: 'Complete: "Aku nampa ___ saben wulan." (I receive a salary every month)',
        options: ['gawe', 'gaji', 'kerja', 'jabatan'],
        correct_answer: 'gaji'
      }
    ]
  },
  {
    id: '9',
    language_id: '1',
    title: 'Use Present Verbs',
    description: 'Learn Javanese words for use present verbs',
    level: 'Advanced',
    order: 9,
    xp_reward: 25,
    is_completed: false,
    questions: [
      {
        id: '85',
        type: 'multiple_choice',
        question: 'How do you say "I am eating" in Javanese?',
        options: ['Aku mangan', 'Aku arep mangan', 'Aku wis mangan', 'Aku dimangan'],
        correct_answer: 'Aku mangan'
      },
      {
        id: '86',
        type: 'fill_blank',
        question: 'Complete: "Dheweke ___ layang saiki." (He is writing a letter now)',
        options: ['maca', 'nulis', 'ngirim', 'mlaku'],
        correct_answer: 'nulis'
      },
      {
        id: '87',
        type: 'multiple_choice',
        question: 'What does "mlaku" mean in Javanese?',
        options: ['To sleep', 'To eat', 'To walk', 'To write'],
        correct_answer: 'To walk'
      },
      {
        id: '88',
        type: 'fill_blank',
        question: 'Complete: "Aku ___ buku." (I am reading a book)',
        options: ['nulis', 'mangan', 'maca', 'ngombe'],
        correct_answer: 'maca'
      },
      {
        id: '89',
        type: 'multiple_choice',
        question: 'How do you say "She is sleeping" in Javanese?',
        options: ['Dheweke turu', 'Dheweke mlaku', 'Dheweke mangan', 'Dheweke maca'],
        correct_answer: 'Dheweke turu'
      },
      {
        id: '90',
        type: 'fill_blank',
        question: 'Complete: "Kita ___ bal-balan saiki." (We are playing soccer now)',
        options: ['turu', 'mangan', 'dolan', 'main'],
        correct_answer: 'main'
      },
      {
        id: '91',
        type: 'multiple_choice',
        question: 'What is "ngombe" in English?',
        options: ['To sleep', 'To drink', 'To work', 'To cook'],
        correct_answer: 'To drink'
      },
      {
        id: '92',
        type: 'fill_blank',
        question: 'Complete: "Aku ___ kopi." (I’m drinking coffee)',
        options: ['mangan', 'ngombe', 'turu', 'nulis'],
        correct_answer: 'ngombe'
      },
      {
        id: '93',
        type: 'multiple_choice',
        question: 'How do you say "They are working now" in Javanese?',
        options: ['Wong-wonge dolan saiki', 'Wong-wonge turu saiki', 'Wong-wonge kerja saiki', 'Wong-wonge mangan saiki'],
        correct_answer: 'Wong-wonge kerja saiki'
      },
      {
        id: '94',
        type: 'fill_blank',
        question: 'Complete: "Aku ___ sepeda saiki." (I am riding a bicycle now)',
        options: ['ngombe', 'numpak', 'mangan', 'nulis'],
        correct_answer: 'numpak'
      }
    ]
  },
  {
    id: '10',
    language_id: '1',
    title: 'Talk About Party',
    description: 'Learn Javanese words for talk about party',
    level: 'Advanced',
    order: 10,
    xp_reward: 25,
    is_completed: false,
    questions: [
      {
        id: '95',
        type: 'multiple_choice',
        question: 'How do you say "invitation" in Javanese?',
        options: ['Sugeng', 'Ulang tahun', 'Undangan', 'Tumpengan'],
        correct_answer: 'Undangan'
      },
      {
        id: '96',
        type: 'fill_blank',
        question: 'Complete: "Aku oleh ___ pesta ulang tahun." (I got a birthday party invitation)',
        options: ['tumpengan', 'undangan', 'bingkisan', 'gawean'],
        correct_answer: 'undangan'
      },
      {
        id: '97',
        type: 'multiple_choice',
        question: 'What does "ulang tahun" mean in Javanese?',
        options: ['Birthday', 'Gift', 'Celebration', 'Food'],
        correct_answer: 'Birthday'
      },
      {
        id: '98',
        type: 'fill_blank',
        question: 'Complete: "Dheweke nganakake ___ ulang tahun." (He is holding a birthday party)',
        options: ['gawe', 'gawean', 'pesta', 'oleh-oleh'],
        correct_answer: 'pesta'
      },
      {
        id: '99',
        type: 'multiple_choice',
        question: 'How do you say "cake" in Javanese?',
        options: ['Tumpeng', 'Roti', 'Kue', 'Jajan pasar'],
        correct_answer: 'Kue'
      },
      {
        id: '100',
        type: 'fill_blank',
        question: 'Complete: "Ana ___ gedhe ing meja." (There is a big cake on the table)',
        options: ['tumpeng', 'kue', 'sego', 'ayam'],
        correct_answer: 'kue'
      },
      {
        id: '101',
        type: 'multiple_choice',
        question: 'How do you say "gift" in Javanese?',
        options: ['Bingkisan', 'Sandangan', 'Piringan', 'Tanduran'],
        correct_answer: 'Bingkisan'
      },
      {
        id: '102',
        type: 'fill_blank',
        question: 'Complete: "Aku nggawa ___ kanggo ulang tahune." (I brought a gift for the birthday)',
        options: ['tumpeng', 'bingkisan', 'pesta', 'rokok'],
        correct_answer: 'bingkisan'
      },
      {
        id: '103',
        type: 'multiple_choice',
        question: 'What is the Javanese term for a traditional ceremonial meal often served at parties?',
        options: ['Tumpeng', 'Klepon', 'Bakso', 'Kembang'],
        correct_answer: 'Tumpeng'
      },
      {
        id: '104',
        type: 'fill_blank',
        question: 'Complete: "Pestane diakhiri karo mangan ___ bareng-bareng." (The party ended with eating tumpeng together)',
        options: ['tumpeng', 'sego', 'ayam', 'jajan'],
        correct_answer: 'tumpeng'
      }
    ]
  },
  {
    id: '10',
    language_id: '1',
    title: 'Talk About Party',
    description: 'Learn Javanese words for talk about party',
    level: 'Advanced',
    order: 10,
    xp_reward: 25,
    is_completed: false,
    questions: [
      {
        id: '95',
        type: 'multiple_choice',
        question: 'How do you say "invitation" in Javanese?',
        options: ['Sugeng', 'Ulang tahun', 'Undangan', 'Tumpengan'],
        correct_answer: 'Undangan'
      },
      {
        id: '96',
        type: 'fill_blank',
        question: 'Complete: "Aku oleh ___ pesta ulang tahun." (I got a birthday party invitation)',
        options: ['tumpengan', 'undangan', 'bingkisan', 'gawean'],
        correct_answer: 'undangan'
      },
      {
        id: '97',
        type: 'multiple_choice',
        question: 'What does "ulang tahun" mean in Javanese?',
        options: ['Birthday', 'Gift', 'Celebration', 'Food'],
        correct_answer: 'Birthday'
      },
      {
        id: '98',
        type: 'fill_blank',
        question: 'Complete: "Dheweke nganakake ___ ulang tahun." (He is holding a birthday party)',
        options: ['gawe', 'gawean', 'pesta', 'oleh-oleh'],
        correct_answer: 'pesta'
      },
      {
        id: '99',
        type: 'multiple_choice',
        question: 'How do you say "cake" in Javanese?',
        options: ['Tumpeng', 'Roti', 'Kue', 'Jajan pasar'],
        correct_answer: 'Kue'
      },
      {
        id: '100',
        type: 'fill_blank',
        question: 'Complete: "Ana ___ gedhe ing meja." (There is a big cake on the table)',
        options: ['tumpeng', 'kue', 'sego', 'ayam'],
        correct_answer: 'kue'
      },
      {
        id: '101',
        type: 'multiple_choice',
        question: 'How do you say "gift" in Javanese?',
        options: ['Bingkisan', 'Sandangan', 'Piringan', 'Tanduran'],
        correct_answer: 'Bingkisan'
      },
      {
        id: '102',
        type: 'fill_blank',
        question: 'Complete: "Aku nggawa ___ kanggo ulang tahune." (I brought a gift for the birthday)',
        options: ['tumpeng', 'bingkisan', 'pesta', 'rokok'],
        correct_answer: 'bingkisan'
      },
      {
        id: '103',
        type: 'multiple_choice',
        question: 'What is the Javanese term for a traditional ceremonial meal often served at parties?',
        options: ['Tumpeng', 'Klepon', 'Bakso', 'Kembang'],
        correct_answer: 'Tumpeng'
      },
      {
        id: '104',
        type: 'fill_blank',
        question: 'Complete: "Pestane diakhiri karo mangan ___ bareng-bareng." (The party ended with eating tumpeng together)',
        options: ['tumpeng', 'sego', 'ayam', 'jajan'],
        correct_answer: 'tumpeng'
      }
    ]
  },
  {
    id: '11',
    language_id: '1',
    title: 'Talking About Food Prices',
    description: 'Learn Javanese words for talking about food prices',
    level: 'Advanced',
    order: 11,
    xp_reward: 25,
    is_completed: false,
    questions: [
      {
        id: '105',
        type: 'multiple_choice',
        question: 'How do you say "How much is this?" in Javanese?',
        options: ['Pinten regane iki?', 'Iki apa?', 'Wes mangan durung?', 'Rega murah iki?'],
        correct_answer: 'Pinten regane iki?'
      },
      {
        id: '106',
        type: 'fill_blank',
        question: 'Complete: "___ regane sepiring bakso?" (How much is a plate of meatballs?)',
        options: ['Piye', 'Pinten', 'Kepiye', 'Apa'],
        correct_answer: 'Pinten'
      },
      {
        id: '107',
        type: 'multiple_choice',
        question: 'What does "larang" mean in Javanese?',
        options: ['Cheap', 'Expensive', 'Delicious', 'Hot'],
        correct_answer: 'Expensive'
      },
      {
        id: '108',
        type: 'fill_blank',
        question: 'Complete: "Manganan iki ___ banget, aku ora tuku." (This food is too expensive, I won’t buy it)',
        options: ['larang', 'murah', 'manis', 'panas'],
        correct_answer: 'larang'
      },
      {
        id: '109',
        type: 'multiple_choice',
        question: 'How do you say "cheap" in Javanese?',
        options: ['Akeh', 'Murah', 'Luwe', 'Larang'],
        correct_answer: 'Murah'
      },
      {
        id: '110',
        type: 'fill_blank',
        question: 'Complete: "Wedang jahe ing warung kuwi cukup ___." (The ginger tea at that stall is quite cheap)',
        options: ['murah', 'larang', 'anyep', 'asem'],
        correct_answer: 'murah'
      },
      {
        id: '111',
        type: 'multiple_choice',
        question: 'What is "discount" in Javanese?',
        options: ['Potongan', 'Regane', 'Tumbas', 'Pasar'],
        correct_answer: 'Potongan'
      },
      {
        id: '112',
        type: 'fill_blank',
        question: 'Complete: "Yen tuku loro, oleh ___ rega." (If you buy two, you get a discount)',
        options: ['potongan', 'larangan', 'tulisan', 'panas'],
        correct_answer: 'potongan'
      },
      {
        id: '113',
        type: 'multiple_choice',
        question: 'How do you say "total price" in Javanese?',
        options: ['Rega kabeh', 'Jumlah rega', 'Rega total', 'Kabeh regane'],
        correct_answer: 'Rega total'
      },
      {
        id: '114',
        type: 'fill_blank',
        question: 'Complete: "___ regane kabeh pira?" (How much is the total?)',
        options: ['Jumlah', 'Total', 'Rega', 'Sakabehe'],
        correct_answer: 'Total'
      }
    ]
  },
  {
    id: '12',
    language_id: '1',
    title: 'Commenting on Food and Drinks',
    description: 'Learn Javanese words for commenting food and drinks',
    level: 'Advanced',
    order: 12,
    xp_reward: 25,
    is_completed: false,
    questions: [
      {
        id: '115',
        type: 'multiple_choice',
        question: 'How do you say "delicious" in Javanese?',
        options: ['Asem', 'Panas', 'Enak', 'Anyep'],
        correct_answer: 'Enak'
      },
      {
        id: '116',
        type: 'fill_blank',
        question: 'Complete: "Bakso iki ___ banget!" (This meatball is very delicious!)',
        options: ['asem', 'enak', 'legit', 'tawar'],
        correct_answer: 'enak'
      },
      {
        id: '117',
        type: 'multiple_choice',
        question: 'What is the Javanese word for "too salty"?',
        options: ['Kepaitan', 'Kasinian', 'Keselen', 'Kasinian banget'],
        correct_answer: 'Kasinian banget'
      },
      {
        id: '118',
        type: 'fill_blank',
        question: 'Complete: "Sayur iki ___ banget, kudu dikurangi uyahé."',
        options: ['kasinian', 'manis', 'asor', 'londo'],
        correct_answer: 'kasinian'
      },
      {
        id: '119',
        type: 'multiple_choice',
        question: 'What does "anyep" mean in Javanese?',
        options: ['Warm', 'Spicy', 'Cold (not warm)', 'Crispy'],
        correct_answer: 'Cold (not warm)'
      },
      {
        id: '120',
        type: 'fill_blank',
        question: 'Complete: "Wedange wis ___, ora enak maneh."',
        options: ['anyep', 'panas', 'asat', 'asem'],
        correct_answer: 'anyep'
      },
      {
        id: '121',
        type: 'multiple_choice',
        question: 'How do you say "sweet" in Javanese?',
        options: ['Asin', 'Manis', 'Legit', 'Tawar'],
        correct_answer: 'Manis'
      },
      {
        id: '122',
        type: 'fill_blank',
        question: 'Complete: "Es teh iki ___ banget!"',
        options: ['legit', 'tawar', 'panas', 'anyep'],
        correct_answer: 'legit'
      },
      {
        id: '123',
        type: 'multiple_choice',
        question: 'What is "as bitter as medicine" in Javanese?',
        options: ['Kaya kopi', 'Kaya jamu', 'Kaya uyah', 'Kaya asem'],
        correct_answer: 'Kaya jamu'
      },
      {
        id: '124',
        type: 'fill_blank',
        question: 'Complete: "Wedang iki pait banget, kaya ___."',
        options: ['kopi', 'jamu', 'teh', 'tape'],
        correct_answer: 'jamu'
      },
      {
        id: '125',
        type: 'multiple_choice',
        question: 'What does "tawar" mean in Javanese when referring to taste?',
        options: ['Spicy', 'Tasteless / bland', 'Sour', 'Burnt'],
        correct_answer: 'Tasteless / bland'
      },
      {
        id: '126',
        type: 'fill_blank',
        question: 'Complete: "Sego putih tanpa sambel kuwi ___ rasane."',
        options: ['enak', 'tawar', 'legit', 'panas'],
        correct_answer: 'tawar'
      },
      {
        id: '127',
        type: 'multiple_choice',
        question: 'How do you say "spicy" in Javanese?',
        options: ['Asem', 'Pedhes', 'Lemah', 'Tawar'],
        correct_answer: 'Pedhes'
      },
      {
        id: '128',
        type: 'fill_blank',
        question: 'Complete: "Sambel terasi kuwi ___ banget, ati-ati!"',
        options: ['manis', 'legit', 'pedhes', 'pahit'],
        correct_answer: 'pedhes'
      },
      {
        id: '129',
        type: 'multiple_choice',
        question: 'What does "legit" mean in Javanese food context?',
        options: ['Soft', 'Deliciously sweet', 'Bitter', 'Fried'],
        correct_answer: 'Deliciously sweet'
      }
    ]
  }  
]

export const sundaneseBasicLessons: Lesson[] = [
  {
    id: '1',
    language_id: '2',
    title: 'Basic Greetings',
    description: 'Learn essential Sundanese greetings',
    level: 'Beginner',
    order: 1,
    xp_reward: 10,
    is_completed: false,
    questions: [
      {
        id: '1',
        type: 'multiple_choice',
        question: 'How do you say "Good morning" in Sundanese?',
        options: ['Wilujeng enjing', 'Wilujeng sonten', 'Wilujeng wengi', 'Wilujeng siang'],
        correct_answer: 'Wilujeng enjing'
      },
      {
        id: '2',
        type: 'multiple_choice',
        question: 'What does "Kumaha damang?" mean?',
        options: ['How are you?', 'Where are you going?', 'What is your name?', 'Are you hungry?'],
        correct_answer: 'How are you?'
      },
      {
        id: '3',
        type: 'drag_drop',
        question: 'Match the Sundanese greeting with its meaning',
        options: ['Wilujeng sumping', 'Wilujeng enjing'],
        correct_answer: 'Wilujeng sumping'
      }
    ]
  },
  {
    id: '2',
    language_id: '2',
    title: 'Order At a Cafe or Stall',
    description: 'Learn Sundanese words for order at a cafe',
    level: 'Beginner',
    order: 2,
    xp_reward: 15,
    is_completed: false,
    questions: [
      {
        id: '4',
        type: 'multiple_choice',
        question: 'How do you say "I want to order coffee" in Sundanese?',
        options: [
          'Abdi badé nginum kopi',
          'Abdi badé mesen kopi',
          'Abdi badé tuang kopi',
          'Abdi badé nyiapkeun kopi'
        ],
        correct_answer: 'Abdi badé mesen kopi'
      },
      {
        id: '5',
        type: 'multiple_choice',
        question: 'What does "Sakedik deui" mean?',
        options: ['A little more', 'Too much', 'Very hot', 'Not ready'],
        correct_answer: 'A little more'
      },
      {
        id: '6',
        type: 'drag_drop',
        question: 'Match the Sundanese phrase with its meaning',
        options: ['Hapunten, acan siap', 'Sorry, not ready yet'],
        correct_answer: 'Sorry, not ready yet'
      },
      {
        id: '7',
        type: 'multiple_choice',
        question: 'What does "Kumaha upami menu dinten ieu?" mean?',
        options: [
          'How much is today’s menu?',
          'What is today’s menu?',
          'Do you have today’s menu?',
          'Where is the menu?'
        ],
        correct_answer: 'What is today’s menu?'
      },
      {
        id: '8',
        type: 'multiple_choice',
        question: 'How do you say "Delicious" in Sundanese?',
        options: ['Raos', 'Lemes', 'Gancang', 'Sae'],
        correct_answer: 'Raos'
      },
      {
        id: '9',
        type: 'multiple_choice',
        question: 'What is the meaning of "Abdi hoyong tuang bala-bala"?',
        options: [
          'I want to eat fried tofu',
          'I want to eat bala-bala',
          'I want to drink tea',
          'I want to sit down'
        ],
        correct_answer: 'I want to eat bala-bala'
      },
      {
        id: '10',
        type: 'drag_drop',
        question: 'Match the phrase "Hampura, atos béak" with its meaning',
        options: ['Hampura, atos béak', 'Sorry, it’s sold out'],
        correct_answer: 'Sorry, it’s sold out'
      },
      {
        id: '11',
        type: 'multiple_choice',
        question: 'How do you say "Please wait a moment" in Sundanese?',
        options: [
          'Cobi antosan heula',
          'Mangga tuang heula',
          'Hayu geura nyugemakeun',
          'Tong hilap mesen'
        ],
        correct_answer: 'Cobi antosan heula'
      },
      {
        id: '12',
        type: 'multiple_choice',
        question: 'What does "Sabaraha hargana?" mean?',
        options: ['Is this ready?', 'How many portions?', 'How much is it?', 'Do you want more?'],
        correct_answer: 'How much is it?'
      },
      {
        id: '13',
        type: 'drag_drop',
        question: 'Match the phrase "Mangga, ieu menuna" with its meaning',
        options: ['Mangga, ieu menuna', 'Here is the menu'],
        correct_answer: 'Here is the menu'
      }
    ]
  },
  {
    id: '3',
    language_id: '2',
    title: 'Family Members',
    description: 'Learn Sundanese words for family',
    level: 'Beginner',
    order: 3,
    xp_reward: 15,
    is_completed: false,
    questions: [
      {
        id: '14',
        type: 'multiple_choice',
        question: 'How do you say "Father" in Sundanese?',
        options: ['Bapa', 'Indung', 'Akang', 'Lalaki'],
        correct_answer: 'Bapa'
      },
      {
        id: '15',
        type: 'multiple_choice',
        question: 'What does "Indung" mean?',
        options: ['Sister', 'Aunt', 'Mother', 'Grandmother'],
        correct_answer: 'Mother'
      },
      {
        id: '16',
        type: 'drag_drop',
        question: 'Match the Sundanese word with its English meaning',
        options: ['Akang', 'Older brother'],
        correct_answer: 'Older brother'
      },
      {
        id: '17',
        type: 'multiple_choice',
        question: 'How do you say "Younger sibling" in Sundanese?',
        options: ['Incun', 'Adina', 'Teteh', 'Réréncangan'],
        correct_answer: 'Adina'
      },
      {
        id: '18',
        type: 'multiple_choice',
        question: 'What is the meaning of "Nini"?',
        options: ['Uncle', 'Grandmother', 'Niece', 'Cousin'],
        correct_answer: 'Grandmother'
      },
      {
        id: '19',
        type: 'multiple_choice',
        question: 'What does "Aki" mean in Sundanese?',
        options: ['Father-in-law', 'Grandfather', 'Uncle', 'Brother-in-law'],
        correct_answer: 'Grandfather'
      },
      {
        id: '20',
        type: 'drag_drop',
        question: 'Match the phrase "Teteh" with its meaning',
        options: ['Teteh', 'Older sister'],
        correct_answer: 'Older sister'
      },
      {
        id: '21',
        type: 'multiple_choice',
        question: 'How do you say "Uncle" in Sundanese?',
        options: ['Mamang', 'Aki', 'Raka', 'Om'],
        correct_answer: 'Mamang'
      },
      {
        id: '22',
        type: 'multiple_choice',
        question: 'What does "Lalaki" mean in family context?',
        options: ['Boy', 'Husband', 'Brother', 'Male'],
        correct_answer: 'Husband'
      },
      {
        id: '23',
        type: 'drag_drop',
        question: 'Match "Pamajikan" with its meaning',
        options: ['Pamajikan', 'Wife'],
        correct_answer: 'Wife'
      }
    ]
  },
  {
    id: '4',
    language_id: '2',
    title: 'Get to Know and Greet Other People',
    description: 'Learn Sundanese words for how to greet other people',
    level: 'Intermediate',
    order: 4,
    xp_reward: 20,
    is_completed: false,
    questions: [
      {
        id: '24',
        type: 'multiple_choice',
        question: 'How do you say "Nice to meet you" in Sundanese?',
        options: ['Kumaha damang?', 'Punten, abdi', 'Sae pisan pendak sareng anjeun', 'Wilujeng tepang'],
        correct_answer: 'Sae pisan pendak sareng anjeun'
      },
      {
        id: '25',
        type: 'multiple_choice',
        question: 'What does "Nami abdi Nabil" mean?',
        options: ['My age is Nabil', 'My name is Nabil', 'I am from Nabil', 'I live with Nabil'],
        correct_answer: 'My name is Nabil'
      },
      {
        id: '26',
        type: 'drag_drop',
        question: 'Match "Ti mana asal anjeun?" with its meaning',
        options: ['Ti mana asal anjeun?', 'Where are you from?'],
        correct_answer: 'Where are you from?'
      },
      {
        id: '27',
        type: 'multiple_choice',
        question: 'How do you say "Where do you live?" in Sundanese?',
        options: ['Cicing di mana?', 'Asal ti mana?', 'Kamana anjeun badé angkat?', 'Saha nami anjeun?'],
        correct_answer: 'Cicing di mana?'
      },
      {
        id: '28',
        type: 'multiple_choice',
        question: 'What does "Sabaraha yuswa anjeun?" mean?',
        options: ['How much is it?', 'Where are you going?', 'How old are you?', 'What is your name?'],
        correct_answer: 'How old are you?'
      },
      {
        id: '29',
        type: 'drag_drop',
        question: 'Match the Sundanese greeting with its meaning',
        options: ['Wilujeng tepang', 'Nice to meet you'],
        correct_answer: 'Nice to meet you'
      },
      {
        id: '30',
        type: 'multiple_choice',
        question: 'How do you say "Who is that?" in Sundanese?',
        options: ['Saha éta?', 'Naon éta?', 'Di mana éta?', 'Kumaha éta?'],
        correct_answer: 'Saha éta?'
      },
      {
        id: '31',
        type: 'multiple_choice',
        question: 'What is the meaning of "Sim kuring ti Bandung"?',
        options: ['I live in Bandung', 'I was born in Bandung', 'I’m from Bandung', 'Bandung is big'],
        correct_answer: 'I’m from Bandung'
      },
      {
        id: '32',
        type: 'multiple_choice',
        question: 'How do you say "Do you speak Sundanese?" in Sundanese?',
        options: ['Nyanggakeun anjeun ngartos Sunda?', 'Dupi anjeun tiasa nyarios Sunda?', 'Kumaha nyarios Sunda?', 'Dupi anjeun ti Sunda?'],
        correct_answer: 'Dupi anjeun tiasa nyarios Sunda?'
      },
      {
        id: '33',
        type: 'drag_drop',
        question: 'Match "Kersa silih kenal?" with its meaning',
        options: ['Kersa silih kenal?', 'Would you like to get to know each other?'],
        correct_answer: 'Would you like to get to know each other?'
      }
    ]
  },
  {
    id: '4',
    language_id: '2',
    title: 'Introduce the Family',
    description: 'Learn Sundanese words for introduce the family',
    level: 'Intermediate',
    order: 4,
    xp_reward: 20,
    is_completed: false,
    questions: [
      {
        id: '34',
        type: 'multiple_choice',
        question: 'How do you say "This is my father" in Sundanese?',
        options: [
          'Ieu bapa abdi',
          'Ieu lanceuk abdi',
          'Eta indung abdi',
          'Abdi bapa anjeun'
        ],
        correct_answer: 'Ieu bapa abdi'
      },
      {
        id: '35',
        type: 'multiple_choice',
        question: 'What does "Ieu saderek abdi" mean?',
        options: [
          'This is my house',
          'This is my friend',
          'This is my sibling',
          'This is my neighbor'
        ],
        correct_answer: 'This is my sibling'
      },
      {
        id: '36',
        type: 'drag_drop',
        question: 'Match "Eta pamajikan abdi" with its meaning',
        options: ['Eta pamajikan abdi', 'That is my wife'],
        correct_answer: 'That is my wife'
      },
      {
        id: '37',
        type: 'multiple_choice',
        question: 'How do you say "My older brother is a teacher" in Sundanese?',
        options: [
          'Raka abdi guru',
          'Akang abdi guru',
          'Incung abdi nu dagang',
          'Abdi gaduh adina guru'
        ],
        correct_answer: 'Akang abdi guru'
      },
      {
        id: '38',
        type: 'multiple_choice',
        question: 'What is the meaning of "Indung abdi tos tilar dunya"?',
        options: [
          'My mother is very old',
          'My mother is in Bandung',
          'My mother has passed away',
          'My mother is a doctor'
        ],
        correct_answer: 'My mother has passed away'
      },
      {
        id: '39',
        type: 'drag_drop',
        question: 'Match the Sundanese phrase with its meaning',
        options: ['Incung abdi resep maca buku', 'My grandchild likes reading books'],
        correct_answer: 'My grandchild likes reading books'
      },
      {
        id: '40',
        type: 'multiple_choice',
        question: 'How do you say "My aunt lives in Garut" in Sundanese?',
        options: [
          'Mamang abdi cicing di Garut',
          'Bibi abdi cicing di Garut',
          'Teteh abdi ti Garut',
          'Indung abdi ti Garut'
        ],
        correct_answer: 'Bibi abdi cicing di Garut'
      },
      {
        id: '41',
        type: 'multiple_choice',
        question: 'What does "Abdi gaduh dua anak" mean?',
        options: [
          'I have two friends',
          'I have two children',
          'I have two siblings',
          'I have two parents'
        ],
        correct_answer: 'I have two children'
      },
      {
        id: '42',
        type: 'drag_drop',
        question: 'Match "Lalaki abdi damel di bank" with its meaning',
        options: ['Lalaki abdi damel di bank', 'My husband works at a bank'],
        correct_answer: 'My husband works at a bank'
      },
      {
        id: '43',
        type: 'multiple_choice',
        question: 'How do you say "That is my younger sister" in Sundanese?',
        options: [
          'Eta adina abdi',
          'Eta teteh abdi',
          'Eta lanceuk abdi',
          'Eta nini abdi'
        ],
        correct_answer: 'Eta adina abdi'
      }
    ]
  }  
]

export const batakBasicLessons: Lesson[] = [
  {
    id: '1',
    language_id: '3',
    title: 'Basic Greetings',
    description: 'Learn essential Batak greetings',
    level: 'Beginner',
    order: 1,
    xp_reward: 10,
    is_completed: false,
    questions: [
      
    ]
  }
]

export const minangBasicLessons: Lesson[] = [
  {
    id: '1',
    language_id: '4',
    title: 'Basic Greetings',
    description: 'Learn essential Minang greetings',
    level: 'Beginner',
    order: 1,
    xp_reward: 10,
    is_completed: false,
    questions: [
      
    ]
  }
]
export const badges: Badge[] = [
  {
    id: '1',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '👶',
    condition: 'complete_lesson_1',
    rarity: 'common'
  },
  {
    id: '2',
    name: 'Streak Master',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    condition: 'streak_7_days',
    rarity: 'rare'
  },
  {
    id: '3',
    name: 'Language Explorer',
    description: 'Try lessons in 3 different languages',
    icon: '🗺️',
    condition: 'try_3_languages',
    rarity: 'epic'
  },
  {
    id: '4',
    name: 'XP Champion',
    description: 'Earn 1000 XP points',
    icon: '👑',
    condition: 'earn_1000_xp',
    rarity: 'legendary'
  }
]

export const gameWords = {
  javanese: [
    { word: 'SEGO', translation: 'Rice', difficulty: 'easy' },
    { word: 'BANYU', translation: 'Water', difficulty: 'easy' },
    { word: 'OMAH', translation: 'House', difficulty: 'easy' },
    { word: 'SEKOLAH', translation: 'School', difficulty: 'medium' },
    { word: 'KELUARGA', translation: 'Family', difficulty: 'medium' },
    { word: 'PERSAHABATAN', translation: 'Friendship', difficulty: 'hard' }
  ],
  sundanese: [
    { word: 'BÉAS', translation: 'Rice', difficulty: 'easy' },
    { word: 'CAI', translation: 'Water', difficulty: 'easy' },
    { word: 'IMAH', translation: 'House', difficulty: 'easy' }
  ]
}