"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
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
        id: 37,
        name: "Robert Pattinson",
        profilePict:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVRrqdITOLOTku1sAQEF4tSQrrSInZGG9vXlrux_7wwx-tZZvl",
        createdAt: "2022-04-30T14:48:01.270Z",
        updatedAt: "2022-04-30T14:48:01.270Z",
      },
      {
        id: 39,
        name: "Paul Dano",
        profilePict:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWQDCM05AcqJqBumFGEk5M2-LG-sGZSb4bDnmkkbsmkq06UtVR",
        createdAt: "2022-04-30T14:48:56.102Z",
        updatedAt: "2022-04-30T14:48:56.102Z",
      },
      {
        id: 40,
        name: "Colin Farrell",
        profilePict:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKrrkRPdjnx6jRDjqQkx29YNigAnoTxoXGo_4jXN7PuMebSQ1p",
        createdAt: "2022-04-30T14:49:15.831Z",
        updatedAt: "2022-04-30T14:49:15.831Z",
      },
      {
        id: 46,
        name: "Tom Holland",
        profilePict:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKRizGW6Md-BUD5MchQ_UWgYZVKwNQxoPzQte9r0fwSQzBV6h",
        createdAt: "2022-05-08T07:53:31.307Z",
        updatedAt: "2022-05-08T07:53:31.307Z",
      },
      {
        id: 47,
        name: "Andrew Garfield",
        profilePict:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSUPaPypoCpBBcuY7IDfIa-EbKiDA49Q2gBc4nPLNkvfaT1u8sF",
        createdAt: "2022-05-08T07:54:03.411Z",
        updatedAt: "2022-05-08T07:54:03.411Z",
      },
      {
        id: 48,
        name: "Tobey Maguire",
        profilePict:
          "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRew54cLJZmzs9yaK_nhxsH8iigg_mBKOsxt1LPRuHRwTnafgLlOB1Ipj-eFcvV",
        createdAt: "2022-05-08T07:54:25.840Z",
        updatedAt: "2022-05-08T07:54:25.840Z",
      },
      {
        id: 49,
        name: "Zendaya",
        profilePict:
          "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQUgugP7EqFklamjMe8w47dHET6WEOnuIaib8IktYcCajhxyXKbtxV9Sb53UFyn",
        createdAt: "2022-05-08T07:55:34.647Z",
        updatedAt: "2022-05-08T07:55:34.647Z",
      },
      {
        id: 50,
        name: "Mark Wahlberg",
        profilePict:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfHHuIClzQ63LOJd9EYYFAKrWaaACddQ0EWToXiIeeyvFmNZ03",
        createdAt: "2022-05-08T09:37:13.855Z",
        updatedAt: "2022-05-08T09:37:13.855Z",
      },
      {
        id: 51,
        name: "Oscar Isaac",
        profilePict:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNOzRGW1KgfkefLAR8TIk5KkXO5wmFOesHQhA49mrGodPT8JwK",
        createdAt: "2022-05-08T09:40:47.975Z",
        updatedAt: "2022-05-08T09:40:47.975Z",
      },
      {
        id: 52,
        name: "Idris Elba",
        profilePict:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6FITvbL-lCFAGWc2ZTtJZG5ZWETg7TSC2E3Bvy7hPmsxCdE1",
        createdAt: "2022-05-08T09:56:19.770Z",
        updatedAt: "2022-05-08T09:56:19.770Z",
      },
      {
        id: 53,
        name: "Jordan Fisher",
        profilePict:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcREGaO1QNRxzvnUg560LHLss0w5wobydDXM9bH2WH5IqDbr4RhP",
        createdAt: "2022-05-08T10:07:48.279Z",
        updatedAt: "2022-05-08T10:07:48.279Z",
      },
      {
        id: 54,
        name: "Alexander Dreymon",
        profilePict:
          "https://upload.wikimedia.org/wikipedia/commons/5/5d/Stuttgart_-Comic_Con_Germany_2019-_d90_by-RaBoe_143_%28cropped%29.jpg",
        createdAt: "2022-05-08T10:20:57.965Z",
        updatedAt: "2022-05-08T10:20:57.965Z",
      },
      {
        id: 55,
        name: "Neve Campbel",
        profilePict:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPyG0NL8tZIHi3daBCsXb2an_ijE0GWrrC2LJkYrrAoL4AgdN",
        createdAt: "2022-05-08T10:25:09.823Z",
        updatedAt: "2022-05-08T10:25:09.823Z",
      },
      {
        id: 56,
        name: "Narilya Gulmongkolpech",
        profilePict:
          "https://media.matamata.com/thumbs/2021/11/11/57794-pesona-narilya-gulmongkolpech-instagramatyadarilya/o-img-57794-pesona-narilya-gulmongkolpech-instagramatyadarilya.jpg",
        createdAt: "2022-05-08T10:30:03.214Z",
        updatedAt: "2022-05-08T10:30:03.214Z",
      },
      {
        id: 57,
        name: "Anson Mount",
        profilePict:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQL6_6FYdIHrwAuXGHTfi00aNgH-LLC_IYTYh9aUheFyl8J92y2",
        createdAt: "2022-05-08T10:31:39.609Z",
        updatedAt: "2022-05-08T10:31:39.609Z",
      },
      {
        id: 58,
        name: "Mone Kamishiraishi",
        profilePict:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRILHM3Q55EFKH2BQfUwWtMR-NTEUvx_ywJ5swip6vR3jCUsH3R",
        createdAt: "2022-05-08T10:35:36.337Z",
        updatedAt: "2022-05-08T10:35:36.337Z",
      },
      {
        id: 59,
        name: "Junko Takeuchi",
        profilePict:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3IVQBXqbA82PcA2L0rbLwEq3qzw9WVioao21b4P_vOq9FawQS",
        createdAt: "2022-05-08T10:39:30.076Z",
        updatedAt: "2022-05-08T10:39:30.076Z",
      },
      {
        id: 60,
        name: "Nana Mizuki",
        profilePict:
          "https://japanesemusicid.com/wp-content/uploads/2015/01/Nana-Mizuki-Eden.jpg",
        createdAt: "2022-05-08T10:40:14.314Z",
        updatedAt: "2022-05-08T10:40:14.314Z",
      },
      {
        id: 61,
        name: "Michel Brown",
        profilePict: "https://flxt.tmsimg.com/assets/583235_v9_ba.jpg",
        createdAt: "2022-05-08T10:41:49.763Z",
        updatedAt: "2022-05-08T10:41:49.763Z",
      },
    ];
    data.forEach((el) => {
      delete el.id;
    });
    await queryInterface.bulkInsert("Casts", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Casts", null, {});
  },
};
