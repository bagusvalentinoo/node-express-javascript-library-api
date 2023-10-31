const { City } = require('../../models/index')

exports.addCitiesForStartingSeeder = async () => {
  await City.bulkCreate([
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN SIMEULUE",
      "latitude": 2.61667,
      "longitude": 96.08333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH SINGKIL",
      "latitude": 2.41667,
      "longitude": 97.91667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH SELATAN",
      "latitude": 3.16667,
      "longitude": 97.41667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH TENGGARA",
      "latitude": 3.36667,
      "longitude": 97.7,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH TIMUR",
      "latitude": 4.63333,
      "longitude": 97.63333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH TENGAH",
      "latitude": 4.51,
      "longitude": 96.855,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH BARAT",
      "latitude": 4.45,
      "longitude": 96.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH BESAR",
      "latitude": 5.38333,
      "longitude": 95.51667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN PIDIE",
      "latitude": 5.08,
      "longitude": 96.11,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN BIREUEN",
      "latitude": 5.08333,
      "longitude": 96.58333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH UTARA",
      "latitude": 4.97,
      "longitude": 97.14,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH BARAT DAYA",
      "latitude": 3.83333,
      "longitude": 96.88333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN GAYO LUES",
      "latitude": 3.95,
      "longitude": 97.39,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH TAMIANG",
      "latitude": 4.25,
      "longitude": 97.96667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN NAGAN RAYA",
      "latitude": 4.16667,
      "longitude": 96.51667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN ACEH JAYA",
      "latitude": 4.86,
      "longitude": 95.64,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN BENER MERIAH",
      "latitude": 4.73015,
      "longitude": 96.86156,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KABUPATEN PIDIE JAYA",
      "latitude": 5.15,
      "longitude": 96.21667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KOTA BANDA ACEH",
      "latitude": 5.54167,
      "longitude": 95.33333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KOTA SABANG",
      "latitude": 5.82164,
      "longitude": 95.31086,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KOTA LANGSA",
      "latitude": 4.47,
      "longitude": 97.93,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KOTA LHOKSEUMAWE",
      "latitude": 5.13333,
      "longitude": 97.06667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e458c0c4-8c27-4703-85c3-5b1c44235f32",
      "name": "KOTA SUBULUSSALAM",
      "latitude": 2.75,
      "longitude": 97.93333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN NIAS",
      "latitude": 1.03333,
      "longitude": 97.76667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN MANDAILING NATAL",
      "latitude": 0.78378,
      "longitude": 99.25495,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN TAPANULI SELATAN",
      "latitude": 1.51667,
      "longitude": 99.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN TAPANULI TENGAH",
      "latitude": 1.9,
      "longitude": 98.66667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN TAPANULI UTARA",
      "latitude": 2.0028,
      "longitude": 99.0707,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN TOBA SAMOSIR",
      "latitude": 2.39793,
      "longitude": 99.21678,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN LABUHAN BATU",
      "latitude": 2.26667,
      "longitude": 100.1,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN ASAHAN",
      "latitude": 2.78333,
      "longitude": 99.55,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN SIMALUNGUN",
      "latitude": 2.9,
      "longitude": 99,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN DAIRI",
      "latitude": 2.86667,
      "longitude": 98.23333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN KARO",
      "latitude": 3.11667,
      "longitude": 98.3,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN DELI SERDANG",
      "latitude": 3.41667,
      "longitude": 98.66667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN LANGKAT",
      "latitude": 3.71667,
      "longitude": 98.21667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN NIAS SELATAN",
      "latitude": 0.77,
      "longitude": 97.75,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN HUMBANG HASUNDUTAN",
      "latitude": 2.26551,
      "longitude": 98.50376,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN PAKPAK BHARAT",
      "latitude": 2.56667,
      "longitude": 98.28333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN SAMOSIR",
      "latitude": 2.64025,
      "longitude": 98.71525,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN SERDANG BEDAGAI",
      "latitude": 3.36667,
      "longitude": 99.03333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN BATU BARA",
      "latitude": 3.16166,
      "longitude": 99.52652,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN PADANG LAWAS UTARA",
      "latitude": 1.46011,
      "longitude": 99.67346,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN PADANG LAWAS",
      "latitude": 1.44684,
      "longitude": 99.99207,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN LABUHAN BATU SELATAN",
      "latitude": 1.983,
      "longitude": 100.0976,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN LABUHAN BATU UTARA",
      "latitude": 2.33349,
      "longitude": 99.63776,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN NIAS UTARA",
      "latitude": 1.33037,
      "longitude": 97.31964,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KABUPATEN NIAS BARAT",
      "latitude": 1.05966,
      "longitude": 97.58606,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KOTA SIBOLGA",
      "latitude": 1.73333,
      "longitude": 98.8,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KOTA TANJUNG BALAI",
      "latitude": 2.95833,
      "longitude": 99.79167,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KOTA PEMATANG SIANTAR",
      "latitude": 2.96667,
      "longitude": 99.05,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KOTA TEBING TINGGI",
      "latitude": 3.325,
      "longitude": 99.14167,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KOTA MEDAN",
      "latitude": 3.65,
      "longitude": 98.66667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KOTA BINJAI",
      "latitude": 3.8,
      "longitude": 108.23333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KOTA PADANG SIDEMPUAN",
      "latitude": 1.37375,
      "longitude": 99.26843,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "baf81183-c9f3-49c1-85cf-6b7fc1e132e3",
      "name": "KOTA GUNUNGSITOLI",
      "latitude": 1.32731,
      "longitude": 97.55018,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN KEPULAUAN MENTAWAI",
      "latitude": 1.98917,
      "longitude": 99.51889,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN PESISIR SELATAN",
      "latitude": -1.58333,
      "longitude": 100.85,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN SOLOK",
      "latitude": -0.96667,
      "longitude": 100.81667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN SIJUNJUNG",
      "latitude": -1.1827,
      "longitude": 101.6056,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN TANAH DATAR",
      "latitude": -0.4555,
      "longitude": 100.5771,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN PADANG PARIAMAN",
      "latitude": -0.6,
      "longitude": 100.28333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN AGAM",
      "latitude": -0.25,
      "longitude": 100.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN LIMA PULUH KOTA",
      "latitude": -0.0168,
      "longitude": 100.5872,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN PASAMAN",
      "latitude": 0.42503,
      "longitude": 99.94606,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN SOLOK SELATAN",
      "latitude": -1.23333,
      "longitude": 101.417,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN DHARMASRAYA",
      "latitude": -1.05,
      "longitude": 101.367,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KABUPATEN PASAMAN BARAT",
      "latitude": 0.28152,
      "longitude": 99.51965,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KOTA PADANG",
      "latitude": -0.98333,
      "longitude": 100.45,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KOTA SOLOK",
      "latitude": -0.76667,
      "longitude": 100.61667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KOTA SAWAH LUNTO",
      "latitude": -0.6,
      "longitude": 100.75,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KOTA PADANG PANJANG",
      "latitude": -0.45,
      "longitude": 100.43333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KOTA BUKITTINGGI",
      "latitude": -0.275,
      "longitude": 100.375,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KOTA PAYAKUMBUH",
      "latitude": -0.23333,
      "longitude": 100.63333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c06a61e3-d932-4f05-9a3e-838b37c441a7",
      "name": "KOTA PARIAMAN",
      "latitude": -0.62682,
      "longitude": 100.12047,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN KUANTAN SINGINGI",
      "latitude": -0.47532,
      "longitude": 101.45857,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN INDRAGIRI HULU",
      "latitude": -0.55,
      "longitude": 102.31667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN INDRAGIRI HILIR",
      "latitude": -0.33333,
      "longitude": 103.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN PELALAWAN",
      "latitude": 0.20822,
      "longitude": 102.18607,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN SIAK",
      "latitude": 0.97453,
      "longitude": 102.01355,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN KAMPAR",
      "latitude": 0.2344,
      "longitude": 101.2131,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN ROKAN HULU",
      "latitude": 0.88333,
      "longitude": 100.48333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN BENGKALIS",
      "latitude": 0.9838,
      "longitude": 102.5096,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN ROKAN HILIR",
      "latitude": 2.16599,
      "longitude": 100.82514,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KABUPATEN KEPULAUAN MERANTI",
      "latitude": 0.97488,
      "longitude": 102.69539,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KOTA PEKANBARU",
      "latitude": 0.53333,
      "longitude": 101.46667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "b44f8cb1-d8eb-402d-82a2-33c0a1c23ec6",
      "name": "KOTA DUMAI",
      "latitude": 1.61592,
      "longitude": 101.4917,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN KERINCI",
      "latitude": -2.03333,
      "longitude": 101.53333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN MERANGIN",
      "latitude": -2.06933,
      "longitude": 102.13303,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN SAROLANGUN",
      "latitude": -2.3,
      "longitude": 102.65,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN BATANG HARI",
      "latitude": -1.75,
      "longitude": 103.11667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN MUARO JAMBI",
      "latitude": -1.55214,
      "longitude": 103.82163,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN TANJUNG JABUNG TIMUR",
      "latitude": -1.13198,
      "longitude": 103.61755,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN TANJUNG JABUNG BARAT",
      "latitude": -1.1544,
      "longitude": 103.24402,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN TEBO",
      "latitude": -1.45576,
      "longitude": 102.37473,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KABUPATEN BUNGO",
      "latitude": -1.50222,
      "longitude": 101.96,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KOTA JAMBI",
      "latitude": -1.61667,
      "longitude": 103.65,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e65abf0a-2e01-4a17-8c39-5473a18c9a9d",
      "name": "KOTA SUNGAI PENUH",
      "latitude": -2.10896,
      "longitude": 101.32175,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN OGAN KOMERING ULU",
      "latitude": -4.13333,
      "longitude": 104.03333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN OGAN KOMERING ILIR",
      "latitude": -3.36667,
      "longitude": 105.36667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN MUARA ENIM",
      "latitude": -4.2327,
      "longitude": 103.6141,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN LAHAT",
      "latitude": -3.7864,
      "longitude": 103.5428,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN MUSI RAWAS",
      "latitude": -3.08333,
      "longitude": 103.2,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN MUSI BANYU ASIN",
      "latitude": -2.41667,
      "longitude": 103.75,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN BANYU ASIN",
      "latitude": -2.88333,
      "longitude": 104.38306,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN OGAN KOMERING ULU SELATAN",
      "latitude": -4.65728,
      "longitude": 104.00659,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN OGAN KOMERING ULU TIMUR",
      "latitude": -3.85679,
      "longitude": 104.75209,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN OGAN ILIR",
      "latitude": -3.43186,
      "longitude": 104.62727,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN EMPAT LAWANG",
      "latitude": 3.22667,
      "longitude": 99.09256,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN PENUKAL ABAB LEMATANG ILIR",
      "latitude": -3.21342,
      "longitude": 104.08722,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KABUPATEN MUSI RAWAS UTARA",
      "latitude": -2.48533,
      "longitude": 103.29346,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KOTA PALEMBANG",
      "latitude": -3,
      "longitude": 104.71667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KOTA PRABUMULIH",
      "latitude": -3.46202,
      "longitude": 104.2229,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KOTA PAGAR ALAM",
      "latitude": -4.13055,
      "longitude": 103.26822,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "4b9463d8-9b07-46f8-9f79-7d20e3cfef5f",
      "name": "KOTA LUBUK LINGGAU",
      "latitude": -3.29308,
      "longitude": 102.85503,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN BENGKULU SELATAN",
      "latitude": -4.35,
      "longitude": 103.03333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN REJANG LEBONG",
      "latitude": -3.43333,
      "longitude": 102.71667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN BENGKULU UTARA",
      "latitude": -3.33333,
      "longitude": 102.05,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN KAUR",
      "latitude": -4.78179,
      "longitude": 103.36109,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN SELUMA",
      "latitude": -3.96644,
      "longitude": 102.47429,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN MUKOMUKO",
      "latitude": -3.07438,
      "longitude": 101.54766,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN LEBONG",
      "latitude": -3.24278,
      "longitude": 102.3349,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN KEPAHIANG",
      "latitude": -3.60194,
      "longitude": 102.56424,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KABUPATEN BENGKULU TENGAH",
      "latitude": -3.20679,
      "longitude": 102.12616,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "19c9684d-96dd-4d13-8e72-c5979f4a2a7d",
      "name": "KOTA BENGKULU",
      "latitude": -3.81667,
      "longitude": 102.31667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN LAMPUNG BARAT",
      "latitude": -5.14904,
      "longitude": 104.19309,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN TANGGAMUS",
      "latitude": -5.38508,
      "longitude": 104.62349,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN LAMPUNG SELATAN",
      "latitude": -5.4531,
      "longitude": 104.9877,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN LAMPUNG TIMUR",
      "latitude": -5.10273,
      "longitude": 105.68003,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN LAMPUNG TENGAH",
      "latitude": -4.86667,
      "longitude": 105.26667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN LAMPUNG UTARA",
      "latitude": -4.81667,
      "longitude": 104.8,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN WAY KANAN",
      "latitude": -4.44705,
      "longitude": 104.52753,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN TULANGBAWANG",
      "latitude": -4.20604,
      "longitude": 105.57999,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN PESAWARAN",
      "latitude": -5.4298,
      "longitude": 105.17899,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN PRINGSEWU",
      "latitude": -5.42211,
      "longitude": 104.93454,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN MESUJI",
      "latitude": -4.0439,
      "longitude": 105.4013,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN TULANG BAWANG BARAT",
      "latitude": -4.43975,
      "longitude": 105.0444,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KABUPATEN PESISIR BARAT",
      "latitude": -5.19323,
      "longitude": 103.93976,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KOTA BANDAR LAMPUNG",
      "latitude": -5.41667,
      "longitude": 105.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "e62e37c4-7a0a-453e-9b67-c987c11bd9ab",
      "name": "KOTA METRO",
      "latitude": -5.11856,
      "longitude": 105.29949,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a44ff0b3-cdb3-4b2a-9f9b-5e6b00aa7c2a",
      "name": "KABUPATEN BANGKA",
      "latitude": -1.91667,
      "longitude": 105.93333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a44ff0b3-cdb3-4b2a-9f9b-5e6b00aa7c2a",
      "name": "KABUPATEN BELITUNG",
      "latitude": -2.86667,
      "longitude": 107.7,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a44ff0b3-cdb3-4b2a-9f9b-5e6b00aa7c2a",
      "name": "KABUPATEN BANGKA BARAT",
      "latitude": -1.95839,
      "longitude": 105.53741,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a44ff0b3-cdb3-4b2a-9f9b-5e6b00aa7c2a",
      "name": "KABUPATEN BANGKA TENGAH",
      "latitude": -2.33989,
      "longitude": 106.1142,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a44ff0b3-cdb3-4b2a-9f9b-5e6b00aa7c2a",
      "name": "KABUPATEN BANGKA SELATAN",
      "latitude": -2.66803,
      "longitude": 106.01257,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a44ff0b3-cdb3-4b2a-9f9b-5e6b00aa7c2a",
      "name": "KABUPATEN BELITUNG TIMUR",
      "latitude": -2.9627,
      "longitude": 108.15216,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a44ff0b3-cdb3-4b2a-9f9b-5e6b00aa7c2a",
      "name": "KOTA PANGKAL PINANG",
      "latitude": -2.13333,
      "longitude": 106.13333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a28b1963-0860-466b-8d21-285a8bb2d214",
      "name": "KABUPATEN KARIMUN",
      "latitude": 0.80764,
      "longitude": 103.41911,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a28b1963-0860-466b-8d21-285a8bb2d214",
      "name": "KABUPATEN BINTAN",
      "latitude": 0.95,
      "longitude": 104.61944,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a28b1963-0860-466b-8d21-285a8bb2d214",
      "name": "KABUPATEN NATUNA",
      "latitude": 4.71417,
      "longitude": 107.97639,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a28b1963-0860-466b-8d21-285a8bb2d214",
      "name": "KABUPATEN LINGGA",
      "latitude": 0.2,
      "longitude": 104.61667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a28b1963-0860-466b-8d21-285a8bb2d214",
      "name": "KABUPATEN KEPULAUAN ANAMBAS",
      "latitude": 3,
      "longitude": 106,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a28b1963-0860-466b-8d21-285a8bb2d214",
      "name": "KOTA BATAM",
      "latitude": 1.05211,
      "longitude": 104.02851,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "a28b1963-0860-466b-8d21-285a8bb2d214",
      "name": "KOTA TANJUNG PINANG",
      "latitude": 0.91683,
      "longitude": 104.44329,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "9d7dd2f7-16cb-4593-8e76-0d99d245b8a2",
      "name": "KABUPATEN KEPULAUAN SERIBU",
      "latitude": -5.5985,
      "longitude": 106.55271,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "9d7dd2f7-16cb-4593-8e76-0d99d245b8a2",
      "name": "KOTA JAKARTA SELATAN",
      "latitude": -6.266,
      "longitude": 106.8135,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "9d7dd2f7-16cb-4593-8e76-0d99d245b8a2",
      "name": "KOTA JAKARTA TIMUR",
      "latitude": -6.2521,
      "longitude": 106.884,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "9d7dd2f7-16cb-4593-8e76-0d99d245b8a2",
      "name": "KOTA JAKARTA PUSAT",
      "latitude": -6.1777,
      "longitude": 106.8403,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "9d7dd2f7-16cb-4593-8e76-0d99d245b8a2",
      "name": "KOTA JAKARTA BARAT",
      "latitude": -6.1676,
      "longitude": 106.7673,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "9d7dd2f7-16cb-4593-8e76-0d99d245b8a2",
      "name": "KOTA JAKARTA UTARA",
      "latitude": -6.1339,
      "longitude": 106.8823,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN BOGOR",
      "latitude": -6.58333,
      "longitude": 106.71667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN SUKABUMI",
      "latitude": -7.06667,
      "longitude": 106.7,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN CIANJUR",
      "latitude": -6.7725,
      "longitude": 107.08306,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN BANDUNG",
      "latitude": -7.1,
      "longitude": 107.6,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN GARUT",
      "latitude": -7.38333,
      "longitude": 107.76667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN TASIKMALAYA",
      "latitude": -7.5,
      "longitude": 108.13333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN CIAMIS",
      "latitude": -7.28333,
      "longitude": 108.41667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN KUNINGAN",
      "latitude": -7,
      "longitude": 108.55,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN CIREBON",
      "latitude": -6.8,
      "longitude": 108.56667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN MAJALENGKA",
      "latitude": -6.81667,
      "longitude": 108.28333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN SUMEDANG",
      "latitude": -6.81667,
      "longitude": 107.98333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN INDRAMAYU",
      "latitude": -6.45,
      "longitude": 108.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN SUBANG",
      "latitude": -6.50833,
      "longitude": 107.7025,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN PURWAKARTA",
      "latitude": -6.58333,
      "longitude": 107.45,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN KARAWANG",
      "latitude": -6.26667,
      "longitude": 107.41667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN BEKASI",
      "latitude": -6.24667,
      "longitude": 107.10833,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN BANDUNG BARAT",
      "latitude": -6.83333,
      "longitude": 107.48333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KABUPATEN PANGANDARAN",
      "latitude": -7.6673,
      "longitude": 108.64037,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA BOGOR",
      "latitude": -6.59167,
      "longitude": 106.8,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA SUKABUMI",
      "latitude": -6.95,
      "longitude": 106.93333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA BANDUNG",
      "latitude": -6.9175,
      "longitude": 107.62444,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA CIREBON",
      "latitude": -6.75,
      "longitude": 108.55,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA BEKASI",
      "latitude": -6.28333,
      "longitude": 106.98333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA DEPOK",
      "latitude": -6.4,
      "longitude": 106.81667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA CIMAHI",
      "latitude": -6.89167,
      "longitude": 107.55,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA TASIKMALAYA",
      "latitude": -7.35,
      "longitude": 108.21667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f89340a4-0bb9-4b36-b7d5-cd42bf2a07a2",
      "name": "KOTA BANJAR",
      "latitude": -7.36996,
      "longitude": 108.53209,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN CILACAP",
      "latitude": -7.57417,
      "longitude": 108.98861,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN BANYUMAS",
      "latitude": -7.45,
      "longitude": 109.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN PURBALINGGA",
      "latitude": -7.28417,
      "longitude": 109.35028,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN BANJARNEGARA",
      "latitude": -7.35111,
      "longitude": 109.5875,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN KEBUMEN",
      "latitude": -7.63917,
      "longitude": 109.66056,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN PURWOREJO",
      "latitude": -7.7,
      "longitude": 109.96667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN WONOSOBO",
      "latitude": -7.36139,
      "longitude": 109.92667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN MAGELANG",
      "latitude": -7.4275,
      "longitude": 110.16194,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN BOYOLALI",
      "latitude": -7.5,
      "longitude": 110.7,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN KLATEN",
      "latitude": -7.68333,
      "longitude": 110.61667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN SUKOHARJO",
      "latitude": -7.68333,
      "longitude": 110.83333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN WONOGIRI",
      "latitude": -7.91667,
      "longitude": 111,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN KARANGANYAR",
      "latitude": -7.62806,
      "longitude": 111.0625,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN SRAGEN",
      "latitude": -7.41278,
      "longitude": 110.935,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN GROBOGAN",
      "latitude": -7.11667,
      "longitude": 110.91667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN BLORA",
      "latitude": -7.06667,
      "longitude": 111.38333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN REMBANG",
      "latitude": -6.78333,
      "longitude": 111.46667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN PATI",
      "latitude": -6.76667,
      "longitude": 111.1,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN KUDUS",
      "latitude": -6.8,
      "longitude": 110.86667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN JEPARA",
      "latitude": -6.58333,
      "longitude": 110.76667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN DEMAK",
      "latitude": -6.8993,
      "longitude": 110.6122,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN SEMARANG",
      "latitude": -7.20667,
      "longitude": 110.44139,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN TEMANGGUNG",
      "latitude": -7.25,
      "longitude": 110.11667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN KENDAL",
      "latitude": -7.0256,
      "longitude": 110.1685,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN BATANG",
      "latitude": -7.03333,
      "longitude": 109.88333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN PEKALONGAN",
      "latitude": -7.0319,
      "longitude": 109.624,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN PEMALANG",
      "latitude": -7.03333,
      "longitude": 109.4,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN TEGAL",
      "latitude": -7.03333,
      "longitude": 109.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KABUPATEN BREBES",
      "latitude": -7.05,
      "longitude": 108.9,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KOTA MAGELANG",
      "latitude": -7.5,
      "longitude": 110.225,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KOTA SURAKARTA",
      "latitude": -7.55,
      "longitude": 110.81667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KOTA SALATIGA",
      "latitude": -7.33278,
      "longitude": 110.48333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KOTA SEMARANG",
      "latitude": -7.03333,
      "longitude": 110.38333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KOTA PEKALONGAN",
      "latitude": -6.9,
      "longitude": 109.68333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c8690cb4-2c4d-4c65-90b2-3f50f7e1e04e",
      "name": "KOTA TEGAL",
      "latitude": -6.8686,
      "longitude": 109.1129,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "bea227a8-120e-45ea-86e2-0569ef0f972f",
      "name": "KABUPATEN KULON PROGO",
      "latitude": -7.645,
      "longitude": 110.02694,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "bea227a8-120e-45ea-86e2-0569ef0f972f",
      "name": "KABUPATEN BANTUL",
      "latitude": -7.9,
      "longitude": 110.36667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "bea227a8-120e-45ea-86e2-0569ef0f972f",
      "name": "KABUPATEN GUNUNG KIDUL",
      "latitude": -7.98333,
      "longitude": 110.61667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "bea227a8-120e-45ea-86e2-0569ef0f972f",
      "name": "KABUPATEN SLEMAN",
      "latitude": -7.68167,
      "longitude": 110.32333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "bea227a8-120e-45ea-86e2-0569ef0f972f",
      "name": "KOTA YOGYAKARTA",
      "latitude": -7.8,
      "longitude": 110.375,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN PACITAN",
      "latitude": -8.13333,
      "longitude": 111.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN PONOROGO",
      "latitude": -7.93333,
      "longitude": 111.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN TRENGGALEK",
      "latitude": -8.16667,
      "longitude": 111.61667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN TULUNGAGUNG",
      "latitude": -8.11667,
      "longitude": 111.91667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN BLITAR",
      "latitude": -8.13333,
      "longitude": 112.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN KEDIRI",
      "latitude": -7.83333,
      "longitude": 112.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN MALANG",
      "latitude": -8.16667,
      "longitude": 112.66667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN LUMAJANG",
      "latitude": -8.11667,
      "longitude": 113.15,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN JEMBER",
      "latitude": -8.25,
      "longitude": 113.65,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN BANYUWANGI",
      "latitude": -8.33333,
      "longitude": 114.2,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN BONDOWOSO",
      "latitude": -7.9404,
      "longitude": 113.9834,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN SITUBONDO",
      "latitude": -7.71667,
      "longitude": 114.05,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN PROBOLINGGO",
      "latitude": -7.86667,
      "longitude": 113.31667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN PASURUAN",
      "latitude": -7.73333,
      "longitude": 112.83333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN SIDOARJO",
      "latitude": -7.45,
      "longitude": 112.7,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN MOJOKERTO",
      "latitude": -7.55,
      "longitude": 112.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN JOMBANG",
      "latitude": -7.55,
      "longitude": 112.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN NGANJUK",
      "latitude": -7.6,
      "longitude": 111.93333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN MADIUN",
      "latitude": -7.61667,
      "longitude": 111.65,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN MAGETAN",
      "latitude": -7.64472,
      "longitude": 111.35917,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN NGAWI",
      "latitude": -7.47444,
      "longitude": 111.33444,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN BOJONEGORO",
      "latitude": -7.25,
      "longitude": 111.8,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN TUBAN",
      "latitude": -6.96667,
      "longitude": 111.9,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN LAMONGAN",
      "latitude": -7.13333,
      "longitude": 112.31667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN GRESIK",
      "latitude": -7.1933,
      "longitude": 112.553,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN BANGKALAN",
      "latitude": -7.05,
      "longitude": 112.93333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN SAMPANG",
      "latitude": -7.05,
      "longitude": 113.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN PAMEKASAN",
      "latitude": -7.06667,
      "longitude": 113.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KABUPATEN SUMENEP",
      "latitude": -7.11667,
      "longitude": 114.33333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA KEDIRI",
      "latitude": -7.83333,
      "longitude": 112.01667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA BLITAR",
      "latitude": -8.1,
      "longitude": 112.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA MALANG",
      "latitude": -7.975,
      "longitude": 112.63333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA PROBOLINGGO",
      "latitude": -7.78333,
      "longitude": 113.21667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA PASURUAN",
      "latitude": -7.65,
      "longitude": 112.9,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA MOJOKERTO",
      "latitude": -7.46667,
      "longitude": 112.43333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA MADIUN",
      "latitude": -7.63333,
      "longitude": 111.53333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA SURABAYA",
      "latitude": -7.26667,
      "longitude": 112.71667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "2b89295e-0d92-4b68-8d8a-1e4e1948b903",
      "name": "KOTA BATU",
      "latitude": -7.83272,
      "longitude": 112.53751,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
      "name": "KABUPATEN PANDEGLANG",
      "latitude": -6.63333,
      "longitude": 105.75,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
      "name": "KABUPATEN LEBAK",
      "latitude": -6.65,
      "longitude": 106.21667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
      "name": "KABUPATEN TANGERANG",
      "latitude": -6.2,
      "longitude": 106.46667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
      "name": "KABUPATEN SERANG",
      "latitude": -6.15,
      "longitude": 106,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
      "name": "KOTA TANGERANG",
      "latitude": -6.17944,
      "longitude": 106.62991,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
      "name": "KOTA CILEGON",
      "latitude": -6.01667,
      "longitude": 106.01667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
      "name": "KOTA SERANG",
      "latitude": -6.12563,
      "longitude": 106.14999,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8e20e917-2f75-4cf2-85a0-3e433d9338f3",
      "name": "KOTA TANGERANG SELATAN",
      "latitude": -6.29373,
      "longitude": 106.71244,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KABUPATEN JEMBRANA",
      "latitude": -8.3,
      "longitude": 114.66667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KABUPATEN TABANAN",
      "latitude": -8.43333,
      "longitude": 115.06667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KABUPATEN BADUNG",
      "latitude": -8.51667,
      "longitude": 115.2,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KABUPATEN GIANYAR",
      "latitude": -8.46667,
      "longitude": 115.28333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KABUPATEN KLUNGKUNG",
      "latitude": -8.55,
      "longitude": 115.4,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KABUPATEN BANGLI",
      "latitude": -8.28333,
      "longitude": 115.35,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KABUPATEN KARANG ASEM",
      "latitude": -8.3891,
      "longitude": 115.5393,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KABUPATEN BULELENG",
      "latitude": -8.25,
      "longitude": 114.96667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d7c747d1-35b2-45e3-9a8d-31277e889d74",
      "name": "KOTA DENPASAR",
      "latitude": -8.66667,
      "longitude": 115.21663,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KABUPATEN LOMBOK BARAT",
      "latitude": -8.69583,
      "longitude": 116.11667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KABUPATEN LOMBOK TENGAH",
      "latitude": -8.7,
      "longitude": 116.3,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KABUPATEN LOMBOK TIMUR",
      "latitude": -8.53333,
      "longitude": 116.53333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KABUPATEN SUMBAWA",
      "latitude": -8.7439,
      "longitude": 117.3324,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KABUPATEN DOMPU",
      "latitude": -8.5094,
      "longitude": 118.4816,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KABUPATEN BIMA",
      "latitude": -8.6,
      "longitude": 118.61667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KABUPATEN SUMBAWA BARAT",
      "latitude": -8.75159,
      "longitude": 116.92132,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KABUPATEN LOMBOK UTARA",
      "latitude": -8.35214,
      "longitude": 116.40152,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KOTA MATARAM",
      "latitude": -8.5833,
      "longitude": 116.1167,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "0bc17980-5dce-485d-b0a9-e15aa94eab49",
      "name": "KOTA BIMA",
      "latitude": -8.46728,
      "longitude": 118.75259,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN SUMBA BARAT",
      "latitude": -9.56667,
      "longitude": 119.45,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN SUMBA TIMUR",
      "latitude": -9.88333,
      "longitude": 120.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN KUPANG",
      "latitude": -9.91667,
      "longitude": 123.83333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN TIMOR TENGAH SELATAN",
      "latitude": -9.83333,
      "longitude": 124.4,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN TIMOR TENGAH UTARA",
      "latitude": -9.33136,
      "longitude": 124.51904,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN BELU",
      "latitude": -9.41258,
      "longitude": 124.95066,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN ALOR",
      "latitude": -8.3,
      "longitude": 124.56667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN LEMBATA",
      "latitude": -8.41396,
      "longitude": 123.55225,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN FLORES TIMUR",
      "latitude": -8.24224,
      "longitude": 122.96817,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN SIKKA",
      "latitude": -8.66667,
      "longitude": 122.36667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN ENDE",
      "latitude": -8.84056,
      "longitude": 121.66389,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN NGADA",
      "latitude": -8.66667,
      "longitude": 121,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN MANGGARAI",
      "latitude": -8.56667,
      "longitude": 120.41667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN ROTE NDAO",
      "latitude": -10.73617,
      "longitude": 123.12054,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN MANGGARAI BARAT",
      "latitude": -8.64484,
      "longitude": 119.88281,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN SUMBA TENGAH",
      "latitude": -9.62941,
      "longitude": 119.61914,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN SUMBA BARAT DAYA",
      "latitude": -9.56216,
      "longitude": 119.08905,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN NAGEKEO",
      "latitude": -8.8721,
      "longitude": 121.20963,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN MANGGARAI TIMUR",
      "latitude": -8.55533,
      "longitude": 120.59761,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN SABU RAIJUA",
      "latitude": -10.56286,
      "longitude": 121.78894,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KABUPATEN MALAKA",
      "latitude": -9.5632,
      "longitude": 124.89481,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d5734f6b-1019-4b7f-9f35-c839dd2f282c",
      "name": "KOTA KUPANG",
      "latitude": -10.21667,
      "longitude": 123.6,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN SAMBAS",
      "latitude": 1.41667,
      "longitude": 109.33333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN BENGKAYANG",
      "latitude": 1.06911,
      "longitude": 109.66393,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN LANDAK",
      "latitude": 0.42373,
      "longitude": 109.75917,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN MEMPAWAH",
      "latitude": 0.25,
      "longitude": 109.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN SANGGAU",
      "latitude": 0.25472,
      "longitude": 110.45,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN KETAPANG",
      "latitude": -1.58333,
      "longitude": 110.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN SINTANG",
      "latitude": -0.08333,
      "longitude": 112.08333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN KAPUAS HULU",
      "latitude": 0.81667,
      "longitude": 112.76667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN SEKADAU",
      "latitude": 0.03485,
      "longitude": 110.95066,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN MELAWI",
      "latitude": -0.33617,
      "longitude": 111.698,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN KAYONG UTARA",
      "latitude": -1.43711,
      "longitude": 110.79781,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KABUPATEN KUBU RAYA",
      "latitude": 0.01637,
      "longitude": 109.33731,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KOTA PONTIANAK",
      "latitude": -0.08333,
      "longitude": 109.36667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "3e7f3283-c586-47e1-8b63-625f58b8be49",
      "name": "KOTA SINGKAWANG",
      "latitude": 0.90734,
      "longitude": 109.00103,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN KOTAWARINGIN BARAT",
      "latitude": -2.4,
      "longitude": 111.73333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN KOTAWARINGIN TIMUR",
      "latitude": -2.08333,
      "longitude": 112.75,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN KAPUAS",
      "latitude": -2.01667,
      "longitude": 114.38333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN BARITO SELATAN",
      "latitude": -1.86667,
      "longitude": 114.73333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN BARITO UTARA",
      "latitude": -0.98333,
      "longitude": 115.1,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN SUKAMARA",
      "latitude": -2.62675,
      "longitude": 111.23681,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN LAMANDAU",
      "latitude": -1.83828,
      "longitude": 111.2869,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN SERUYAN",
      "latitude": -2.33333,
      "longitude": 112.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN KATINGAN",
      "latitude": -2.06667,
      "longitude": 113.4,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN PULANG PISAU",
      "latitude": -3.11858,
      "longitude": 113.8623,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN GUNUNG MAS",
      "latitude": -0.95,
      "longitude": 113.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN BARITO TIMUR",
      "latitude": -1.93333,
      "longitude": 115.1,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KABUPATEN MURUNG RAYA",
      "latitude": -0.01667,
      "longitude": 114.26667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "1a7a84e9-86e7-4a8f-9c7e-12e84731bb13",
      "name": "KOTA PALANGKA RAYA",
      "latitude": -1.76979,
      "longitude": 113.73126,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN TANAH LAUT",
      "latitude": -3.88333,
      "longitude": 114.86667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN KOTA BARU",
      "latitude": -3,
      "longitude": 116,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN BANJAR",
      "latitude": -3.31667,
      "longitude": 115.08333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN BARITO KUALA",
      "latitude": -3.08333,
      "longitude": 114.61667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN TAPIN",
      "latitude": -2.91667,
      "longitude": 115.03333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN HULU SUNGAI SELATAN",
      "latitude": -2.75,
      "longitude": 115.2,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN HULU SUNGAI TENGAH",
      "latitude": -2.61667,
      "longitude": 115.41667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN HULU SUNGAI UTARA",
      "latitude": -2.45,
      "longitude": 115.13333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN TABALONG",
      "latitude": -1.88333,
      "longitude": 115.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN TANAH BUMBU",
      "latitude": -3.45413,
      "longitude": 115.70372,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KABUPATEN BALANGAN",
      "latitude": -2.32314,
      "longitude": 115.62922,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KOTA BANJARMASIN",
      "latitude": -3.32444,
      "longitude": 114.59102,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f055b1d8-27e4-4de3-86d0-cf61c0b8e22a",
      "name": "KOTA BANJAR BARU",
      "latitude": -3.41667,
      "longitude": 114.83333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KABUPATEN PASER",
      "latitude": -1.43517,
      "longitude": 116.23535,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KABUPATEN KUTAI BARAT",
      "latitude": -0.59417,
      "longitude": 115.51575,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KABUPATEN KUTAI KARTANEGARA",
      "latitude": -0.44019,
      "longitude": 116.98139,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KABUPATEN KUTAI TIMUR",
      "latitude": 1.03769,
      "longitude": 117.83112,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KABUPATEN BERAU",
      "latitude": 2,
      "longitude": 117.3,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KABUPATEN PENAJAM PASER UTARA",
      "latitude": -1.25,
      "longitude": 116.83333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KABUPATEN MAHAKAM HULU",
      "latitude": 0.37822,
      "longitude": 115.38048,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KOTA BALIKPAPAN",
      "latitude": -1.16667,
      "longitude": 116.88333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KOTA SAMARINDA",
      "latitude": -0.43333,
      "longitude": 117.18333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "24d74fe7-b534-48f8-8f94-b1445b8386be",
      "name": "KOTA BONTANG",
      "latitude": 0.12526,
      "longitude": 117.49603,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d645034f-e1a9-4576-8e36-78020f10f865",
      "name": "KABUPATEN MALINAU",
      "latitude": 2.45,
      "longitude": 115.68333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d645034f-e1a9-4576-8e36-78020f10f865",
      "name": "KABUPATEN BULUNGAN",
      "latitude": 3,
      "longitude": 117.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d645034f-e1a9-4576-8e36-78020f10f865",
      "name": "KABUPATEN TANA TIDUNG",
      "latitude": 3.55,
      "longitude": 117.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d645034f-e1a9-4576-8e36-78020f10f865",
      "name": "KABUPATEN NUNUKAN",
      "latitude": 4.13333,
      "longitude": 116.7,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d645034f-e1a9-4576-8e36-78020f10f865",
      "name": "KOTA TARAKAN",
      "latitude": 3.36667,
      "longitude": 117.6,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN BOLAANG MONGONDOW",
      "latitude": 0.75,
      "longitude": 124.08333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN MINAHASA",
      "latitude": 1.2537,
      "longitude": 124.83,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN KEPULAUAN SANGIHE",
      "latitude": 3.5,
      "longitude": 125.55,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN KEPULAUAN TALAUD",
      "latitude": 4.31178,
      "longitude": 126.78085,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN MINAHASA SELATAN",
      "latitude": 1.21291,
      "longitude": 124.59708,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN MINAHASA UTARA",
      "latitude": 1.4025,
      "longitude": 124.96,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN BOLAANG MONGONDOW UTARA",
      "latitude": 0.78527,
      "longitude": 123.41766,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN SIAU TAGULANDANG BIARO",
      "latitude": 2.11728,
      "longitude": 125.37512,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN MINAHASA TENGGARA",
      "latitude": 1.05633,
      "longitude": 124.7925,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN BOLAANG MONGONDOW SELATAN",
      "latitude": 0.40912,
      "longitude": 123.75961,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KABUPATEN BOLAANG MONGONDOW TIMUR",
      "latitude": 0.72073,
      "longitude": 124.50256,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KOTA MANADO",
      "latitude": 1.51667,
      "longitude": 124.88333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KOTA BITUNG",
      "latitude": 1.48333,
      "longitude": 125.15,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KOTA TOMOHON",
      "latitude": 1.31307,
      "longitude": 124.83404,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "8f26882b-71c4-4b88-8c75-0a9c736384a4",
      "name": "KOTA KOTAMOBAGU",
      "latitude": 0.68915,
      "longitude": 124.32678,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN BANGGAI KEPULAUAN",
      "latitude": -1.6424,
      "longitude": 123.54881,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN BANGGAI",
      "latitude": -1.2835,
      "longitude": 122.8892,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN MOROWALI",
      "latitude": -1.89342,
      "longitude": 121.25473,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN POSO",
      "latitude": -1.65,
      "longitude": 120.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN DONGGALA",
      "latitude": -0.58333,
      "longitude": 119.85,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN TOLI-TOLI",
      "latitude": 1.30862,
      "longitude": 120.88643,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN BUOL",
      "latitude": 0.75,
      "longitude": 120.75,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN PARIGI MOUTONG",
      "latitude": 0.3368,
      "longitude": 120.17841,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN TOJO UNA-UNA",
      "latitude": -1.2036,
      "longitude": 121.48201,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN SIGI",
      "latitude": -1.385,
      "longitude": 119.96694,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN BANGGAI LAUT",
      "latitude": -1.61841,
      "longitude": 123.49388,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KABUPATEN MOROWALI UTARA",
      "latitude": -1.7207,
      "longitude": 121.24649,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "06a6c6e0-4d78-4053-8ab4-96d8e80a9922",
      "name": "KOTA PALU",
      "latitude": -0.86972,
      "longitude": 119.9,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN KEPULAUAN SELAYAR",
      "latitude": -6.81667,
      "longitude": 120.8,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN BULUKUMBA",
      "latitude": -5.41667,
      "longitude": 120.23333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN BANTAENG",
      "latitude": -5.48333,
      "longitude": 119.98333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN JENEPONTO",
      "latitude": -5.63333,
      "longitude": 119.73333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN TAKALAR",
      "latitude": -5.41667,
      "longitude": 119.51667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN GOWA",
      "latitude": -5.31667,
      "longitude": 119.75,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN SINJAI",
      "latitude": -5.21667,
      "longitude": 120.15,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN MAROS",
      "latitude": -5.05,
      "longitude": 119.71667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN PANGKAJENE DAN KEPULAUAN",
      "latitude": -4.7827,
      "longitude": 119.5506,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN BARRU",
      "latitude": -4.43333,
      "longitude": 119.68333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN BONE",
      "latitude": -4.7,
      "longitude": 120.13333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN SOPPENG",
      "latitude": -4.3842,
      "longitude": 119.89,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN WAJO",
      "latitude": -4,
      "longitude": 120.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN SIDENRENG RAPPANG",
      "latitude": -3.85,
      "longitude": 119.96667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN PINRANG",
      "latitude": -3.61667,
      "longitude": 119.6,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN ENREKANG",
      "latitude": -3.5,
      "longitude": 119.86667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN LUWU",
      "latitude": -2.5577,
      "longitude": 121.3242,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN TANA TORAJA",
      "latitude": -3.0024,
      "longitude": 119.79655,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN LUWU UTARA",
      "latitude": -2.6,
      "longitude": 120.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN LUWU TIMUR",
      "latitude": -2.50957,
      "longitude": 120.3978,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KABUPATEN TORAJA UTARA",
      "latitude": -2.92738,
      "longitude": 119.79218,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KOTA MAKASSAR",
      "latitude": -5.15,
      "longitude": 119.45,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KOTA PARE-PARE",
      "latitude": -4.03333,
      "longitude": 119.65,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "90d4b297-516b-465a-9a3b-1f6d46cbef97",
      "name": "KOTA PALOPO",
      "latitude": -2.97841,
      "longitude": 120.11078,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN BUTON",
      "latitude": -5.31667,
      "longitude": 122.58333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN MUNA",
      "latitude": -4.96667,
      "longitude": 122.66667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN KONAWE",
      "latitude": -3.91717,
      "longitude": 122.08823,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN KOLAKA",
      "latitude": -4.08333,
      "longitude": 121.66667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN KONAWE SELATAN",
      "latitude": -4.19191,
      "longitude": 122.44854,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN BOMBANA",
      "latitude": -4.6257,
      "longitude": 121.81641,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN WAKATOBI",
      "latitude": -5.31934,
      "longitude": 123.5948,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN KOLAKA UTARA",
      "latitude": -3.10452,
      "longitude": 121.12427,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN BUTON UTARA",
      "latitude": -5.01457,
      "longitude": 122.93015,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN KONAWE UTARA",
      "latitude": -3.41552,
      "longitude": 121.99081,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN KOLAKA TIMUR",
      "latitude": -4.01807,
      "longitude": 121.86172,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN KONAWE KEPULAUAN",
      "latitude": -4.11656,
      "longitude": 123.10181,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN MUNA BARAT",
      "latitude": -4.83333,
      "longitude": 122.48333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN BUTON TENGAH",
      "latitude": -5.31667,
      "longitude": 122.33333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KABUPATEN BUTON SELATAN",
      "latitude": -5.56667,
      "longitude": 122.7,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KOTA KENDARI",
      "latitude": -3.98333,
      "longitude": 122.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "f871e1c4-6701-4a1c-af43-7b5255b36379",
      "name": "KOTA BAUBAU",
      "latitude": -5.477,
      "longitude": 122.6166,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "6d3a017c-eaa3-49fb-819c-61bba64c5ce3",
      "name": "KABUPATEN BOALEMO",
      "latitude": 0.62689,
      "longitude": 122.3568,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "6d3a017c-eaa3-49fb-819c-61bba64c5ce3",
      "name": "KABUPATEN GORONTALO",
      "latitude": 0.5728,
      "longitude": 122.2337,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "6d3a017c-eaa3-49fb-819c-61bba64c5ce3",
      "name": "KABUPATEN POHUWATO",
      "latitude": 0.7098,
      "longitude": 121.59582,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "6d3a017c-eaa3-49fb-819c-61bba64c5ce3",
      "name": "KABUPATEN BONE BOLANGO",
      "latitude": 0.50296,
      "longitude": 123.27501,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "6d3a017c-eaa3-49fb-819c-61bba64c5ce3",
      "name": "KABUPATEN GORONTALO UTARA",
      "latitude": 0.77,
      "longitude": 122.31667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "6d3a017c-eaa3-49fb-819c-61bba64c5ce3",
      "name": "KOTA GORONTALO",
      "latitude": 0.53333,
      "longitude": 123.1,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "25d017b3-44c0-4bfc-8f55-177fb5c6e0a6",
      "name": "KABUPATEN MAJENE",
      "latitude": -3.15,
      "longitude": 118.86667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "25d017b3-44c0-4bfc-8f55-177fb5c6e0a6",
      "name": "KABUPATEN POLEWALI MANDAR",
      "latitude": -3.3,
      "longitude": 119.16667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "25d017b3-44c0-4bfc-8f55-177fb5c6e0a6",
      "name": "KABUPATEN MAMASA",
      "latitude": -2.96492,
      "longitude": 119.30631,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "25d017b3-44c0-4bfc-8f55-177fb5c6e0a6",
      "name": "KABUPATEN MAMUJU",
      "latitude": -2.5,
      "longitude": 119.41667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "25d017b3-44c0-4bfc-8f55-177fb5c6e0a6",
      "name": "KABUPATEN MAMUJU UTARA",
      "latitude": -1.51639,
      "longitude": 119.42139,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "25d017b3-44c0-4bfc-8f55-177fb5c6e0a6",
      "name": "KABUPATEN MAMUJU TENGAH",
      "latitude": -2.8212,
      "longitude": 119.2662,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN MALUKU TENGGARA BARAT",
      "latitude": -7.61186,
      "longitude": 131.38,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN MALUKU TENGGARA",
      "latitude": -5.75,
      "longitude": 132.73334,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN MALUKU TENGAH",
      "latitude": -3.29167,
      "longitude": 128.9675,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN BURU",
      "latitude": -3.32767,
      "longitude": 126.68413,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN KEPULAUAN ARU",
      "latitude": -6.17059,
      "longitude": 134.46991,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN SERAM BAGIAN BARAT",
      "latitude": -3.1027,
      "longitude": 128.42996,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN SERAM BAGIAN TIMUR",
      "latitude": -3.39851,
      "longitude": 130.39166,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN MALUKU BARAT DAYA",
      "latitude": -7.8296,
      "longitude": 126.17386,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KABUPATEN BURU SELATAN",
      "latitude": -3.52187,
      "longitude": 126.59271,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KOTA AMBON",
      "latitude": -3.7,
      "longitude": 128.18333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "aae59c31-7e09-4b46-84c3-501c3d3ce1bd",
      "name": "KOTA TUAL",
      "latitude": -5.64301,
      "longitude": 132.74934,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KABUPATEN HALMAHERA BARAT",
      "latitude": 1.41709,
      "longitude": 127.55264,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KABUPATEN HALMAHERA TENGAH",
      "latitude": 0.48056,
      "longitude": 128.25,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KABUPATEN KEPULAUAN SULA",
      "latitude": -1.8646,
      "longitude": 125.69046,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KABUPATEN HALMAHERA SELATAN",
      "latitude": -0.3955,
      "longitude": 127.90833,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KABUPATEN HALMAHERA UTARA",
      "latitude": 1.73194,
      "longitude": 128.00778,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KABUPATEN HALMAHERA TIMUR",
      "latitude": 1.33517,
      "longitude": 128.48627,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KABUPATEN PULAU MOROTAI",
      "latitude": 2.19924,
      "longitude": 128.40546,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KABUPATEN PULAU TALIABU",
      "latitude": -1.84578,
      "longitude": 124.78992,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KOTA TERNATE",
      "latitude": 0.89618,
      "longitude": 127.31016,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "197f18cf-40f1-43bb-82a5-32a54e19133e",
      "name": "KOTA TIDORE KEPULAUAN",
      "latitude": 0.60962,
      "longitude": 127.56981,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN FAK-FAK",
      "latitude": -2.92641,
      "longitude": 132.29608,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN KAIMANA",
      "latitude": -3.66093,
      "longitude": 133.77451,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN TELUK WONDAMA",
      "latitude": -2.7,
      "longitude": 134.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN TELUK BINTUNI",
      "latitude": -1.88037,
      "longitude": 133.33105,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN MANOKWARI",
      "latitude": -0.9,
      "longitude": 133.75,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN SORONG SELATAN",
      "latitude": -1.50495,
      "longitude": 132.28638,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN SORONG",
      "latitude": -1.16667,
      "longitude": 131.5,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN RAJA AMPAT",
      "latitude": -0.5,
      "longitude": 130,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN TAMBRAUW",
      "latitude": -0.60515,
      "longitude": 132.48962,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN MAYBRAT",
      "latitude": -1.2155,
      "longitude": 132.35092,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN MANOKWARI SELATAN",
      "latitude": -1.0798,
      "longitude": 133.96729,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KABUPATEN PEGUNUNGAN ARFAK",
      "latitude": -0.93523,
      "longitude": 133.89587,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "c1b525c1-7d6a-45bd-8ebd-11e9df6e3f65",
      "name": "KOTA SORONG",
      "latitude": -0.86507,
      "longitude": 131.25153,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN MERAUKE",
      "latitude": -7.66667,
      "longitude": 139.66667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN JAYAWIJAYA",
      "latitude": -4.08333,
      "longitude": 139.08333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN JAYAPURA",
      "latitude": -3,
      "longitude": 139.95,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN NABIRE",
      "latitude": -3.54016,
      "longitude": 135.55511,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN KEPULAUAN YAPEN",
      "latitude": -1.78773,
      "longitude": 136.27716,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN BIAK NUMFOR",
      "latitude": -1.03333,
      "longitude": 136,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN PANIAI",
      "latitude": -3.9,
      "longitude": 136.60001,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN PUNCAK JAYA",
      "latitude": -3.67241,
      "longitude": 137.43896,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN MIMIKA",
      "latitude": -4.54357,
      "longitude": 136.56555,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN BOVEN DIGOEL",
      "latitude": -5.70519,
      "longitude": 140.36349,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN MAPPI",
      "latitude": -6.49971,
      "longitude": 139.34441,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN ASMAT",
      "latitude": -5.3795,
      "longitude": 138.46344,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN YAHUKIMO",
      "latitude": -4.60403,
      "longitude": 139.58405,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN PEGUNUNGAN BINTANG",
      "latitude": -4.52167,
      "longitude": 140.29541,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN TOLIKARA",
      "latitude": -3.42661,
      "longitude": 137.41699,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN SARMI",
      "latitude": -2.41667,
      "longitude": 139.08333,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN KEEROM",
      "latitude": -3.3,
      "longitude": 140.61667,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN WAROPEN",
      "latitude": -2.286,
      "longitude": 137.01837,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN SUPIORI",
      "latitude": -0.73881,
      "longitude": 135.61111,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN MAMBERAMO RAYA",
      "latitude": -2.23561,
      "longitude": 137.78229,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN NDUGA",
      "latitude": -4.45093,
      "longitude": 138.10089,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN LANNY JAYA",
      "latitude": -3.91244,
      "longitude": 138.28766,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN MAMBERAMO TENGAH",
      "latitude": -2.46064,
      "longitude": 138.45245,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN YALIMO",
      "latitude": -3.86037,
      "longitude": 138.47305,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN PUNCAK",
      "latitude": -4.14204,
      "longitude": 137.09702,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN DOGIYAI",
      "latitude": -4.03186,
      "longitude": 135.43945,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN INTAN JAYA",
      "latitude": -3.41016,
      "longitude": 136.70837,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KABUPATEN DEIYAI",
      "latitude": -3.94737,
      "longitude": 135.95032,
      "created_at": new Date(),
      "updated_at": new Date()
    },
    {
      "province_id": "d6f5e244-42bf-4e1d-8f15-2fb22275be0f",
      "name": "KOTA JAYAPURA",
      "latitude": -2.64647,
      "longitude": 140.77779,
      "created_at": new Date(),
      "updated_at": new Date()
    }
  ])
}