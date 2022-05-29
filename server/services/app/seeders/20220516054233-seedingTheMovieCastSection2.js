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
        id: 12,
        movieId: 27,
        castId: 16,
        createdAt: "2022-04-30T14:39:07.121Z",
        updatedAt: "2022-04-30T14:39:07.121Z",
      },
      {
        id: 13,
        movieId: 27,
        castId: 17,
        createdAt: "2022-04-30T14:39:07.121Z",
        updatedAt: "2022-04-30T14:39:07.121Z",
      },
      {
        id: 14,
        movieId: 27,
        castId: 18,
        createdAt: "2022-04-30T14:39:07.121Z",
        updatedAt: "2022-04-30T14:39:07.121Z",
      },
      {
        id: 15,
        movieId: 27,
        castId: 19,
        createdAt: "2022-04-30T14:39:07.121Z",
        updatedAt: "2022-04-30T14:39:07.121Z",
      },
      {
        id: 16,
        movieId: 27,
        castId: 20,
        createdAt: "2022-04-30T14:39:07.121Z",
        updatedAt: "2022-04-30T14:39:07.121Z",
      },
      {
        id: 25,
        movieId: 28,
        castId: 16,
        createdAt: "2022-04-30T14:41:54.166Z",
        updatedAt: "2022-04-30T14:41:54.166Z",
      },
      {
        id: 51,
        movieId: 30,
        castId: 10,
        createdAt: "2022-05-04T15:58:06.135Z",
        updatedAt: "2022-05-04T15:58:06.135Z",
      },
      {
        id: 52,
        movieId: 30,
        castId: 11,
        createdAt: "2022-05-04T15:58:06.135Z",
        updatedAt: "2022-05-04T15:58:06.135Z",
      },
      {
        id: 53,
        movieId: 31,
        castId: 21,
        createdAt: "2022-05-04T15:58:40.876Z",
        updatedAt: "2022-05-04T15:58:40.876Z",
      },
      {
        id: 54,
        movieId: 31,
        castId: 22,
        createdAt: "2022-05-04T15:58:40.876Z",
        updatedAt: "2022-05-04T15:58:40.876Z",
      },
      {
        id: 55,
        movieId: 32,
        castId: 28,
        createdAt: "2022-05-04T15:59:11.288Z",
        updatedAt: "2022-05-04T15:59:11.288Z",
      },
      {
        id: 56,
        movieId: 32,
        castId: 29,
        createdAt: "2022-05-04T15:59:11.288Z",
        updatedAt: "2022-05-04T15:59:11.288Z",
      },
      {
        id: 57,
        movieId: 32,
        castId: 30,
        createdAt: "2022-05-04T15:59:11.288Z",
        updatedAt: "2022-05-04T15:59:11.288Z",
      },
      {
        id: 58,
        movieId: 33,
        castId: 35,
        createdAt: "2022-05-04T15:59:47.045Z",
        updatedAt: "2022-05-04T15:59:47.045Z",
      },
      {
        id: 59,
        movieId: 34,
        castId: 31,
        createdAt: "2022-05-04T16:00:13.032Z",
        updatedAt: "2022-05-04T16:00:13.032Z",
      },
      {
        id: 60,
        movieId: 34,
        castId: 32,
        createdAt: "2022-05-04T16:00:13.032Z",
        updatedAt: "2022-05-04T16:00:13.032Z",
      },
      {
        id: 61,
        movieId: 34,
        castId: 33,
        createdAt: "2022-05-04T16:00:13.032Z",
        updatedAt: "2022-05-04T16:00:13.032Z",
      },
      {
        id: 62,
        movieId: 34,
        castId: 34,
        createdAt: "2022-05-04T16:00:13.032Z",
        updatedAt: "2022-05-04T16:00:13.032Z",
      },
      {
        id: 63,
        movieId: 29,
        castId: 23,
        createdAt: "2022-05-04T16:00:44.203Z",
        updatedAt: "2022-05-04T16:00:44.203Z",
      },
      {
        id: 64,
        movieId: 29,
        castId: 24,
        createdAt: "2022-05-04T16:00:44.203Z",
        updatedAt: "2022-05-04T16:00:44.203Z",
      },
      {
        id: 65,
        movieId: 29,
        castId: 25,
        createdAt: "2022-05-04T16:00:44.203Z",
        updatedAt: "2022-05-04T16:00:44.203Z",
      },
      {
        id: 66,
        movieId: 29,
        castId: 26,
        createdAt: "2022-05-04T16:00:44.203Z",
        updatedAt: "2022-05-04T16:00:44.203Z",
      },
      {
        id: 67,
        movieId: 29,
        castId: 27,
        createdAt: "2022-05-04T16:00:44.203Z",
        updatedAt: "2022-05-04T16:00:44.203Z",
      },
      {
        id: 68,
        movieId: 35,
        castId: 6,
        createdAt: "2022-05-04T16:01:30.664Z",
        updatedAt: "2022-05-04T16:01:30.664Z",
      },
      {
        id: 69,
        movieId: 35,
        castId: 7,
        createdAt: "2022-05-04T16:01:30.664Z",
        updatedAt: "2022-05-04T16:01:30.664Z",
      },
      {
        id: 70,
        movieId: 35,
        castId: 8,
        createdAt: "2022-05-04T16:01:30.664Z",
        updatedAt: "2022-05-04T16:01:30.664Z",
      },
      {
        id: 71,
        movieId: 36,
        castId: 36,
        createdAt: "2022-05-04T16:01:54.573Z",
        updatedAt: "2022-05-04T16:01:54.573Z",
      },
      {
        id: 72,
        movieId: 36,
        castId: 37,
        createdAt: "2022-05-04T16:01:54.573Z",
        updatedAt: "2022-05-04T16:01:54.573Z",
      },
      {
        id: 73,
        movieId: 36,
        castId: 38,
        createdAt: "2022-05-04T16:01:54.573Z",
        updatedAt: "2022-05-04T16:01:54.573Z",
      },
      {
        id: 74,
        movieId: 37,
        castId: 1,
        createdAt: "2022-05-04T16:02:25.720Z",
        updatedAt: "2022-05-04T16:02:25.720Z",
      },
      {
        id: 75,
        movieId: 37,
        castId: 2,
        createdAt: "2022-05-04T16:02:25.720Z",
        updatedAt: "2022-05-04T16:02:25.720Z",
      },
      {
        id: 80,
        movieId: 38,
        castId: 39,
        createdAt: "2022-05-08T08:12:20.729Z",
        updatedAt: "2022-05-08T08:12:20.729Z",
      },
      {
        id: 81,
        movieId: 38,
        castId: 40,
        createdAt: "2022-05-08T08:12:20.729Z",
        updatedAt: "2022-05-08T08:12:20.729Z",
      },
      {
        id: 82,
        movieId: 38,
        castId: 41,
        createdAt: "2022-05-08T08:12:20.729Z",
        updatedAt: "2022-05-08T08:12:20.729Z",
      },
      {
        id: 83,
        movieId: 38,
        castId: 42,
        createdAt: "2022-05-08T08:12:20.729Z",
        updatedAt: "2022-05-08T08:12:20.729Z",
      },
      {
        id: 85,
        movieId: 39,
        castId: 39,
        createdAt: "2022-05-08T09:37:30.584Z",
        updatedAt: "2022-05-08T09:37:30.584Z",
      },
      {
        id: 86,
        movieId: 39,
        castId: 43,
        createdAt: "2022-05-08T09:37:30.584Z",
        updatedAt: "2022-05-08T09:37:30.584Z",
      },
      {
        id: 88,
        movieId: 40,
        castId: 44,
        createdAt: "2022-05-08T09:44:39.177Z",
        updatedAt: "2022-05-08T09:44:39.177Z",
      },
      {
        id: 90,
        movieId: 41,
        castId: 45,
        createdAt: "2022-05-08T10:05:15.852Z",
        updatedAt: "2022-05-08T10:05:15.852Z",
      },
      {
        id: 91,
        movieId: 45,
        castId: 46,
        createdAt: "2022-05-08T10:08:11.062Z",
        updatedAt: "2022-05-08T10:08:11.062Z",
      },
      {
        id: 93,
        movieId: 47,
        castId: 47,
        createdAt: "2022-05-08T10:21:10.699Z",
        updatedAt: "2022-05-08T10:21:10.699Z",
      },
      {
        id: 94,
        movieId: 48,
        castId: 48,
        createdAt: "2022-05-08T10:25:31.725Z",
        updatedAt: "2022-05-08T10:25:31.725Z",
      },
      {
        id: 95,
        movieId: 49,
        castId: 49,
        createdAt: "2022-05-08T10:30:19.852Z",
        updatedAt: "2022-05-08T10:30:19.852Z",
      },
      {
        id: 96,
        movieId: 42,
        castId: 50,
        createdAt: "2022-05-08T10:32:16.630Z",
        updatedAt: "2022-05-08T10:32:16.630Z",
      },
      {
        id: 97,
        movieId: 44,
        castId: 51,
        createdAt: "2022-05-08T10:36:07.494Z",
        updatedAt: "2022-05-08T10:36:07.494Z",
      },
      {
        id: 98,
        movieId: 50,
        castId: 3,
        createdAt: "2022-05-08T10:36:33.649Z",
        updatedAt: "2022-05-08T10:36:33.649Z",
      },
      {
        id: 99,
        movieId: 50,
        castId: 4,
        createdAt: "2022-05-08T10:36:33.649Z",
        updatedAt: "2022-05-08T10:36:33.649Z",
      },
      {
        id: 100,
        movieId: 50,
        castId: 5,
        createdAt: "2022-05-08T10:36:33.649Z",
        updatedAt: "2022-05-08T10:36:33.649Z",
      },
      {
        id: 101,
        movieId: 46,
        castId: 52,
        createdAt: "2022-05-08T10:40:44.680Z",
        updatedAt: "2022-05-08T10:40:44.680Z",
      },
      {
        id: 102,
        movieId: 46,
        castId: 53,
        createdAt: "2022-05-08T10:40:44.680Z",
        updatedAt: "2022-05-08T10:40:44.680Z",
      },
      {
        id: 103,
        movieId: 43,
        castId: 54,
        createdAt: "2022-05-08T10:42:11.623Z",
        updatedAt: "2022-05-08T10:42:11.623Z",
      },
    ];
    data.forEach((el) => {
      delete el.id;
    });
    await queryInterface.bulkInsert("MovieCasts", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MovieCasts", null, {});
  },
};
