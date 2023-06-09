import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        "_id": uuid(),
        "name": "Drift 2M 2x2 (Magnetic)",
        "price": 499,
        "shapeType": "cube",
        "skill": "Intermediate",
        "discountPercentage": 30,
        "rating": 4,
        "ratingCount": 1770,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1lugyj9KGU0dMol4DGJ9iDWsNfkTDfmQ1"
    },
    {
        "_id": uuid(),
        "name": "Drift 5x5",
        "price": 449,
        "shapeType": "cube",
        "skill": "Intermediate",
        "discountPercentage": 30,
        "rating": 4,
        "ratingCount": 2520,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1wmKB_5APdAl3yredeYRS7s9VFTAy5gLO"
    },
    {
        "_id": uuid(),
        "name": "Drift 6M 6x6 (Magnetic)",
        "price": 1399,
        "shapeType": "cube",
        "skill": "Beginner",
        "discountPercentage": 70,
        "rating": 5,
        "ratingCount": 1730,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1TVaHDGKQ9KlHgiGjXtYamDgczSII7-eH"
    },
    {
        "_id": uuid(),
        "name": "Drift 7M 7x7 (Magnetic)",
        "price": 1649,
        "shapeType": "cube",
        "skill": "Beginner",
        "discountPercentage": 20,
        "rating": 3,
        "ratingCount": 2080,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1DWPYIDYTKv9teQ_Mr2jRl1dxOSA7i_Cn"
    },
    {
        "_id": uuid(),
        "name": "Drift Axis Carbon Fiber Cube",
        "price": 369,
        "shapeType": "mod",
        "skill": "Beginner",
        "discountPercentage": 30,
        "rating": 3,
        "ratingCount": 1000,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1g6JH6YEq4_vufXcYgX0ct3HYZiZ4njJK"
    },
    {
        "_id": uuid(),
        "name": "Drift Carbon Fiber 3x3",
        "price": 299,
        "shapeType": "cube",
        "skill": "Beginner",
        "discountPercentage": 30,
        "rating": 4,
        "ratingCount": 1420,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1xDWSPwBnvNKk3TseZuRCNz6NWqAl-CpV"
    },
    {
        "_id": uuid(),
        "name": "Drift Gear 3x3",
        "price": 399,
        "shapeType": "mod",
        "skill": "Intermediate",
        "discountPercentage": 30,
        "rating": 5,
        "ratingCount": 850,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1HuGKXfB8zA2fpMoMSulvFlBdTUtk-5_E"
    },
    {
        "_id": uuid(),
        "name": "Drift Ghost Cube (Carbon Fiber)",
        "price": 1999,
        "shapeType": "mod",
        "skill": "Advanced",
        "discountPercentage": 30,
        "rating": 3,
        "ratingCount": 700,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1gVayjF3CaGcle8o2NG1gA_x3PC_f1HjT"
    },
    {
        "_id": uuid(),
        "name": "Drift Ghost Cube (Carbon Fiber) W",
        "price": 1999,
        "shapeType": "mod",
        "skill": "Advanced",
        "discountPercentage": 50,
        "rating": 5,
        "ratingCount": 690,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1O4VQcdEQ5CWCUr0qripP1HIZAsiipI7w"
    },
    {
        "_id": uuid(),
        "name": "Drift Infinity Cube",
        "price": 299,
        "shapeType": "special",
        "skill": "Beginner",
        "discountPercentage": 70,
        "rating": 5,
        "ratingCount": 2340,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1VzgnRLv11JEHcirgTn0gg389YTzuKRDp"
    },
    {
        "_id": uuid(),
        "name": "Drift Megaminx",
        "price": 499,
        "shapeType": "special",
        "skill": "Intermediate",
        "discountPercentage": 20,
        "rating": 4,
        "ratingCount": 2390,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1nHTM7g5bUtAzk3d1JMdhDMCvFQjU1y8S"
    },
    {
        "_id": uuid(),
        "name": "Drift Mirror Cube",
        "price": 319,
        "shapeType": "mod",
        "skill": "Intermediate",
        "discountPercentage": 30,
        "rating": 4,
        "ratingCount": 1140,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1YVyD-wPHd07tiDQ-ywkF5J8iu0q_BO9_"
    },
    {
        "_id": uuid(),
        "name": "Drift Mirror Cube (G)",
        "price": 349,
        "shapeType": "mod",
        "skill": "Intermediate",
        "discountPercentage": 30,
        "rating": 4,
        "ratingCount": 2360,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1Mj9XVxp7IVnNuXJ0uBh1oHjg1JXx7_uE"
    },
    {
        "_id": uuid(),
        "name": "Drift Penrose 3x3",
        "price": 329,
        "shapeType": "mod",
        "skill": "Beginner",
        "discountPercentage": 30,
        "rating": 4,
        "ratingCount": 1090,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1H-HduCOog_EQ7VXyRn1PWh9f_frYcRBu"
    },
    {
        "_id": uuid(),
        "name": "Drift Pyraminx Puzzle",
        "price": 349,
        "shapeType": "pyramid",
        "skill": "Intermediate",
        "discountPercentage": 50,
        "rating": 4,
        "ratingCount": 1640,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1i-bHIWLal4wUo4c2kjEa4CDKOKUgO9OM"
    },
    {
        "_id": uuid(),
        "name": "Drift Skewb",
        "price": 549,
        "shapeType": "mod",
        "skill": "Intermediate",
        "discountPercentage": 70,
        "rating": 3,
        "ratingCount": 810,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1BQGb4F2TZV1nK0qaVHg2EisnCZh4ClIj"
    },
    {
        "_id": uuid(),
        "name": "Drift Twisty 3x3",
        "price": 349,
        "shapeType": "mod",
        "skill": "Beginner",
        "discountPercentage": 50,
        "rating": 3,
        "ratingCount": 1550,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1sv_boph1UGk2IZFPILCwxMg41j-TVOlN"
    },
    {
        "_id": uuid(),
        "name": "Drift Windmill Carbon Fiber",
        "price": 449,
        "shapeType": "mod",
        "skill": "Intermediate",
        "discountPercentage": 60,
        "rating": 4,
        "ratingCount": 2170,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1jAq5TNyrMX8288g2vkuW1_ASvO8JKAQx"
    },
    {
        "_id": uuid(),
        "name": "GAN 356 M 3x3 (Magnetic)",
        "price": 2299,
        "shapeType": "cube",
        "skill": "Beginner",
        "discountPercentage": 50,
        "rating": 3,
        "ratingCount": 1520,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1jNj3FGWR8UaWCLe-j3ORGg5ijs-n99tR"
    },
    {
        "_id": uuid(),
        "name": "GAN Mirror M (Magnetic)",
        "price": 1999,
        "shapeType": "cube",
        "skill": "Intermediate",
        "discountPercentage": 20,
        "rating": 4,
        "ratingCount": 440,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1ZqYb906UatAT1EDlnKC4qiKDw86e4pD1"
    },
    {
        "_id": uuid(),
        "name": "LeFun Block Keychains",
        "price": 109,
        "shapeType": "special",
        "skill": "Beginner",
        "discountPercentage": 50,
        "rating": 3,
        "ratingCount": 2470,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1kjU5_G2hnlf7dWatodl8kKZeYkgmgRAI"
    },
    {
        "_id": uuid(),
        "name": "MFJS MeiLong 8x8 Stickerless",
        "price": 2799,
        "shapeType": "cube",
        "skill": "Advanced",
        "discountPercentage": 40,
        "rating": 4,
        "ratingCount": 1380,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1NiNh--Dwtpw3p2tABogk01KMKGlLF4Kx"
    },
    {
        "_id": uuid(),
        "name": "MFJS MeiLong 12x12",
        "price": 12499,
        "shapeType": "cube",
        "skill": "Advanced",
        "discountPercentage": 30,
        "rating": 3,
        "ratingCount": 2560,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1Jw0bMco_Speyjb5U8FvcxoD5A8d1TyKZ"
    },
    {
        "_id": uuid(),
        "name": "MoYu Puppet Cube",
        "price": 349,
        "shapeType": "special",
        "skill": "Advanced",
        "discountPercentage": 50,
        "rating": 5,
        "ratingCount": 2090,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1sncjSlXbAGOLmAZWgTSNEZKWfv8nQvRi"
    },
    {
        "_id": uuid(),
        "name": "MoYu WR M 2021 Lite 3x3 (Magnetic)",
        "price": 1999,
        "shapeType": "cube",
        "skill": "Beginner",
        "discountPercentage": 40,
        "rating": 4,
        "ratingCount": 1040,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1rplLHhjcyRfuk2dyOqznEFx4JFOrec3D"
    },
    {
        "_id": uuid(),
        "name": "QiYi 1x1x1 Cube",
        "price": 389,
        "shapeType": "cube",
        "skill": "Beginner",
        "discountPercentage": 60,
        "rating": 3,
        "ratingCount": 2610,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1w0GDEn3l9Otv0BcVn7Lmr0TWr9tL0rM6"
    },
    {
        "_id": uuid(),
        "name": "QiYi 2x2x3",
        "price": 349,
        "shapeType": "cube",
        "skill": "Intermediate",
        "discountPercentage": 60,
        "rating": 4,
        "ratingCount": 2860,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1ucn3MRaDOCHEbei_0kr-2PohNANJCCTi"
    },
    {
        "_id": uuid(),
        "name": "QiYi Coin Tetrahedron",
        "price": 449,
        "shapeType": "pyramid",
        "skill": "Intermediate",
        "discountPercentage": 50,
        "rating": 4,
        "ratingCount": 1680,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1x0ulpagKhId4QCl43xSTDCRB6oqYFz_K"
    },
    {
        "_id": uuid(),
        "name": "QiYi Column 3x3",
        "price": 369,
        "shapeType": "mod",
        "skill": "Intermediate",
        "discountPercentage": 20,
        "rating": 3,
        "ratingCount": 2200,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1rplLHhjcyRfuk2dyOqznEFx4JFOrec3D"
    },
    {
        "_id": uuid(),
        "name": "QiYi Fluffy 3x3",
        "price": 299,
        "shapeType": "cube",
        "skill": "Beginner",
        "discountPercentage": 50,
        "rating": 5,
        "ratingCount": 580,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1TIWU4vKmzylDfSlkMVPFXxvk4nP5mNdm"
    },
    {
        "_id": uuid(),
        "name": "QiYi Master Pyraminx 4x4",
        "price": 1299,
        "shapeType": "pyramid",
        "skill": "Advanced",
        "discountPercentage": 40,
        "rating": 3,
        "ratingCount": 2430,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=1kX4WYnMkoj1tw3h0rC29LPLo4ls_1F5n"
    },
    {
        "_id": uuid(),
        "name": "QiYi QiYuan v2 4x4",
        "price": 279,
        "shapeType": "cube",
        "skill": "Intermediate",
        "discountPercentage": 50,
        "rating": 5,
        "ratingCount": 580,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1KzXoB_-6pzsUYDvadF_3CRgH2-JZty83"
    },
    {
        "_id": uuid(),
        "name": "YuXin HuangLong 13x13",
        "price": 14999,
        "shapeType": "cube",
        "skill": "Advanced",
        "discountPercentage": 70,
        "rating": 5,
        "ratingCount": 610,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=17DdgVielJIgaUIX9lwsbZZeItOymgKNT"
    },
    {
        "_id": uuid(),
        "name": "YuXin Little Magic 9x9",
        "price": 2299,
        "shapeType": "cube",
        "skill": "Advanced",
        "discountPercentage": 60,
        "rating": 5,
        "ratingCount": 2210,
        "isRecommended": true,
        "imgLink": "https://drive.google.com/uc?export=view&id=10Eati-PhyddDZK6kmxwgWfZHPGzROBGt"
    },
    {
        "_id": uuid(),
        "name": "YuXin Little Magic 11x11 Stickerless",
        "price": 7699,
        "shapeType": "cube",
        "skill": "Advanced",
        "discountPercentage": 60,
        "rating": 3,
        "ratingCount": 2190,
        "isRecommended": false,
        "imgLink": "https://drive.google.com/uc?export=view&id=1Eh386JINPSuiOvMhEeZu7-lQQFUVTZgs"
    }
]