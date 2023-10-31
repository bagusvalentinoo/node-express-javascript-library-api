const { Province } = require('../../models/index')

exports.addProvincesForStartingSeeder = async () => {
  await Province.bulkCreate([
      {
        "id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
        "name": "ACEH",
        "latitude": 4.36855,
        "longitude": 97.0253,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
        "name": "SUMATERA UTARA",
        "latitude": 2.19235,
        "longitude": 99.38122,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
        "name": "SUMATERA BARAT",
        "latitude": -1.34225,
        "longitude": 100.0761,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
        "name": "RIAU",
        "latitude": 0.50041,
        "longitude": 101.54758,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
        "name": "JAMBI",
        "latitude": -1.61157,
        "longitude": 102.7797,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
        "name": "SUMATERA SELATAN",
        "latitude": -3.12668,
        "longitude": 104.09306,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
        "name": "BENGKULU",
        "latitude": -3.51868,
        "longitude": 102.53598,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
        "name": "LAMPUNG",
        "latitude": -4.8555,
        "longitude": 105.0273,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "a44ff0b3-cdb3-4b2a-9f9b-5e6b00aa7c2a",
        "name": "KEPULAUAN BANGKA BELITUNG",
        "latitude": -2.75775,
        "longitude": 107.58394,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "a28b1963-0860-466b-8d21-285a8bb2d214",
        "name": "KEPULAUAN RIAU",
        "latitude": -0.15478,
        "longitude": 104.58037,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "9d7dd2f7-16cb-4593-8e76-0d99d245b8a2",
        "name": "DKI JAKARTA",
        "latitude": 6.1745,
        "longitude": 106.8227,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
        "name": "JAWA BARAT",
        "latitude": -6.88917,
        "longitude": 107.64047,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
        "name": "JAWA TENGAH",
        "latitude": -7.30324,
        "longitude": 110.00441,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "bea227a8-120e-45ea-86e2-0569ef0f972f",
        "name": "DI YOGYAKARTA",
        "latitude": 7.7956,
        "longitude": 110.3695,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
        "name": "JAWA TIMUR",
        "latitude": -6.96851,
        "longitude": 113.98005,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
        "name": "BANTEN",
        "latitude": -6.44538,
        "longitude": 106.13756,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
        "name": "BALI",
        "latitude": -8.23566,
        "longitude": 115.12239,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
        "name": "NUSA TENGGARA BARAT",
        "latitude": -8.12179,
        "longitude": 117.63696,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
        "name": "NUSA TENGGARA TIMUR",
        "latitude": -8.56568,
        "longitude": 120.69786,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
        "name": "KALIMANTAN BARAT",
        "latitude": -0.13224,
        "longitude": 111.09689,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
        "name": "KALIMANTAN TENGAH",
        "latitude": -1.49958,
        "longitude": 113.29033,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
        "name": "KALIMANTAN SELATAN",
        "latitude": -2.94348,
        "longitude": 115.37565,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
        "name": "KALIMANTAN TIMUR",
        "latitude": 0.78844,
        "longitude": 116.242,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "d645034f-e1a9-4576-8e36-78020f10f865",
        "name": "KALIMANTAN UTARA",
        "latitude": 2.72594,
        "longitude": 116.911,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
        "name": "SULAWESI UTARA",
        "latitude": 0.65557,
        "longitude": 124.09015,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
        "name": "SULAWESI TENGAH",
        "latitude": -1.69378,
        "longitude": 120.80886,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
        "name": "SULAWESI SELATAN",
        "latitude": -3.64467,
        "longitude": 119.94719,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
        "name": "SULAWESI TENGGARA",
        "latitude": -3.54912,
        "longitude": 121.72796,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "6d3a017c-eaa3-49fb-819c-61bba64c5ce3",
        "name": "GORONTALO",
        "latitude": 0.71862,
        "longitude": 122.45559,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "25d017b3-44c0-4bfc-8f55-177fb5c6e0a6",
        "name": "SULAWESI BARAT",
        "latitude": -2.49745,
        "longitude": 119.3919,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
        "name": "MALUKU",
        "latitude": -3.11884,
        "longitude": 129.42078,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
        "name": "MALUKU UTARA",
        "latitude": 0.63012,
        "longitude": 127.97202,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
        "name": "PAPUA BARAT",
        "latitude": -1.38424,
        "longitude": 132.90253,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
        "name": "PAPUA",
        "latitude": -3.98857,
        "longitude": 138.34853,
        "created_at": new Date(),
        "updated_at": new Date()
      }
    ])
}