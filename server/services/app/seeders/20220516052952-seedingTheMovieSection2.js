'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [
      {
        id : 5,
        title : "The Silent Sea",
        slug : "the-silent-sea",
        synopsis : "During a perilous 24-hour mission on the moon, spa… research facility steeped in classified secrets.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/Af_Hj0MDBBQ",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/fFT0IgqtCOks4munDTxQwkvNJkd.jpg",
        rating : 8,
        authorId : 1,
        createdAt : "2022-04-30T14:39:07.115Z",
        updatedAt : "2022-04-30T14:39:07.115Z"
      },
      {
        id : 8,
        title : "Squid Game",
        slug : "squid-game",
        synopsis : "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/oqxAJKy0ii4",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        rating : 8,
        authorId : 1,
        createdAt : "2022-04-30T14:41:54.161Z",
        updatedAt : "2022-04-30T14:41:54.161Z"
      },
      {
        id : 7,
        title : "Money Heist",
        slug : "money-heist",
        synopsis : "To carry out the biggest heist in history, a myste…suicide wager will lead to everything or nothing.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/p_PJbmrX4uk",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-04-30T14:40:59.969Z",
        updatedAt : "2022-05-04T16:00:44.148Z"
      },
      {
        id : 10,
        title : "Bridgerton",
        slug : "bridgerton",
        synopsis : "Wealth, lust, and betrayal set in the backdrop of …rough the eyes of the powerful Bridgerton family.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/qYNCws-a6CQ",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-04-30T14:43:15.053Z",
        updatedAt : "2022-05-04T15:58:05.978Z"
      },
      {
        id : 9,
        title : "Cobra Kai",
        slug : "cobra-kai",
        synopsis : "This Karate Kid sequel series picks up 30 years af…he balance in his life without mentor Mr. Miyagi.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/_rB36UGoP4Y",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/6POBWybSBDBKjSs1VAQcnQC1qyt.jpg",
        rating : 7,
        authorId : 3,
        createdAt : "2022-04-30T14:42:31.463Z",
        updatedAt : "2022-05-04T15:58:40.803Z"
      },
      {
        id : 3,
        title : "Doctor Strange in the Multiverse of Madness",
        slug : "doctor-strange-in-the-multiverse-of-madness",
        synopsis : "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/aWzlQ2N6qqg",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
        rating : 10,
        authorId : 3,
        createdAt : "2022-04-30T14:36:24.795Z",
        updatedAt : "2022-05-04T15:59:11.187Z"
      },
      {
        id : 4,
        title : "Élite",
        slug : "élite",
        synopsis : "When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/QNwhAdrdwp0",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
        rating : 6,
        authorId : 3,
        createdAt : "2022-04-30T14:37:33.971Z",
        updatedAt : "2022-05-04T15:59:46.998Z"
      },
      {
        id : 11,
        title : "Fantastic Beasts: The Secrets of Dumbledore",
        slug : "fantastic-beasts:-the-secrets-of-dumbledore",
        synopsis : "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/Y9dr2zw-TXQ",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/8ZbybiGYe8XM4WGmGlhF0ec5R7u.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-04-30T14:44:07.634Z",
        updatedAt : "2022-05-04T16:00:12.939Z"
      },
      {
        id : 6,
        title : "Stranger Things",
        slug : "stranger-things",
        synopsis : "When a young boy vanishes, a small town uncovers a…supernatural forces, and one strange little girl.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/yQEondeGvKo",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-04-30T14:40:07.469Z",
        updatedAt : "2022-05-04T16:01:30.592Z"
      },
      {
        id : 12,
        title : "The Batman",
        slug : "the-batman",
        synopsis : "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/mqqft2x_Aa4",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        rating : 9,
        authorId : 3,
        createdAt : "2022-04-30T14:47:34.132Z",
        updatedAt : "2022-05-04T16:01:54.532Z"
      },
      {
        id : 1,
        title : "The Godfather",
        slug : "the-godfather",
        synopsis : "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/Ew9ngL1GZvs",
        imgUrl : "https:\/\/www.themoviedb.org\/t\/p\/original\/wWJbBo5yjw22AIjE8isBFoiBI3S.jpg",
        rating : 7,
        authorId : 3,
        createdAt : "2022-04-30T14:24:29.129Z",
        updatedAt : "2022-05-04T16:02:25.622Z"
      },
      {
        id : 16,
        title : "Spider-Man: No Way Home",
        slug : "spider-man:-no-way-home",
        synopsis : "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/JfVOs4VSpmA",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        rating : 9,
        authorId : 3,
        createdAt : "2022-05-08T07:52:38.290Z",
        updatedAt : "2022-05-08T08:12:20.685Z"
      },
      {
        id : 17,
        title : "Uncharted",
        slug : "uncharted",
        synopsis : "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/eHp3MbsCbMg",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-05-08T09:35:39.715Z",
        updatedAt : "2022-05-08T09:35:39.715Z"
      },
      {
        id : 18,
        title : "Moon Knight",
        slug : "moon-knight",
        synopsis : "When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life. As Steven\/Marc’s enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/x7Krla_UxRg",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/x6FsYvt33846IQnDSFxla9j0RX8.jpg",
        rating : 9,
        authorId : 3,
        createdAt : "2022-05-08T09:40:22.984Z",
        updatedAt : "2022-05-08T09:44:39.130Z"
      },
      {
        id : 19,
        title : "Sonic the Hedgehog 2",
        slug : "sonic-the-hedgehog-2",
        synopsis : "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/47r8FXYZWNU",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
        rating : 7,
        authorId : 3,
        createdAt : "2022-05-08T09:43:17.223Z",
        updatedAt : "2022-05-08T09:45:00.288Z"
      },
      {
        id : 20,
        title : "Star Trek: Strange New Worlds",
        slug : "star-trek:-strange-new-worlds",
        synopsis : "Follow Christopher Pike, Spock and Number One in the years before Captain Kirk boarded the U.S.S. Enterprise, as they explore new worlds around the galaxy.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/XL4iCAB6MFo",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/iwIdajr5Y4zq2ibvq75VnDAJBr.jpg",
        rating : 5,
        authorId : 3,
        createdAt : "2022-05-08T09:48:04.798Z",
        updatedAt : "2022-05-08T09:48:04.798Z"
      },
      {
        id : 21,
        title : "The Marked Heart",
        slug : "the-marked-heart",
        synopsis : "This new Colombian telenovela is about a man who has to watch his wife die and have her heart extracted to give to another woman. He’s out for revenge in the world of organ trafficking.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/Bx-uch8MyYI",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/M1q0HuyRnqxP8Si54srsPREFIH.jpg",
        rating : 5,
        authorId : 3,
        createdAt : "2022-05-08T09:54:29.481Z",
        updatedAt : "2022-05-08T09:54:29.481Z"
      },
      {
        id : 22,
        title : "Your Name",
        slug : "your-name",
        synopsis : "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/xU47nhruN-Q",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/q719jXXEzOoYaps6babgKnONONX.jpg",
        rating : 10,
        authorId : 3,
        createdAt : "2022-05-08T09:59:04.673Z",
        updatedAt : "2022-05-08T10:03:40.722Z"
      },
      {
        id : 23,
        title : "Turning Red",
        slug : "turning-red",
        synopsis : "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/XdKzUbAiswE",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-05-08T10:06:44.026Z",
        updatedAt : "2022-05-08T10:06:44.026Z"
      },
      {
        id : 24,
        title : "The Last: Naruto the Movie",
        slug : "the-last:-naruto-the-movie",
        synopsis : "Two years after the events of the Fourth Great Ninja War, the moon that Hagoromo Otsutsuki created long ago to seal away the Gedo Statue begins to descend towards the world, threatening to become a meteor that would destroy everything on impact.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/-mEX-QruiTc",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
        rating : 7,
        authorId : 3,
        createdAt : "2022-05-08T10:11:59.953Z",
        updatedAt : "2022-05-08T10:11:59.953Z"
      },
      {
        id : 25,
        title : "The Last Kingdom",
        slug : "the-last-kingdom",
        synopsis : "A show of heroic deeds and epic battles with a thematic depth that embraces politics, religion, warfare, courage, love, loyalty and our universal search for identity. Combining real historical figures and events with fictional characters, it is the story of how a people combined their strength under one of the most iconic kings of history in order to reclaim their land for themselves and build a place they call home.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/WxPApTGWwas",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-05-08T10:16:10.446Z",
        updatedAt : "2022-05-08T10:16:10.446Z"
      },
      {
        id : 26,
        title : "Scream",
        slug : "scream",
        synopsis : "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/beToTslH17s",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
        rating : 5,
        authorId : 3,
        createdAt : "2022-05-08T10:24:37.873Z",
        updatedAt : "2022-05-08T10:24:37.873Z"
      },
      {
        id : 27,
        title : "The Medium",
        slug : "the-medium",
        synopsis : "A horrifying story of a shaman’s inheritance in the Isan region of Thailand. But the goddess that appears to have taken possession of a family member turns out not be as benevolent as it first appears.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/XStLMJu0fI4",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/tWoSE8SH6XhgWKHIL3p0sj7lA3V.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-05-08T10:27:31.375Z",
        updatedAt : "2022-05-08T10:27:31.375Z"
      },
      {
        id : 2,
        title : "Hellbound",
        slug : "hellbound",
        synopsis : "During a perilous 24-hour mission on the moon, spa… research facility steeped in classified secrets.",
        trailerUrl : "https:\/\/www.youtube.com\/embed\/UWfgm20-LTM",
        imgUrl : "https:\/\/image.tmdb.org\/t\/p\/original\/5NYdSAnDVIXePrSG2dznHdiibMk.jpg",
        rating : 8,
        authorId : 3,
        createdAt : "2022-04-30T14:24:29.129Z",
        updatedAt : "2022-05-08T10:36:33.632Z"
      }
    ]
    data.forEach(el => {
      delete el.id
    })
    await queryInterface.bulkInsert('Movies', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Movies', null, {})
  }
};
