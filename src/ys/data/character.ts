/**
 * 预设：http://spongem.com/ajglz/ys/ys.html
 * 配装：https://ngabbs.com/read.php?tid=27859119
 */

export interface IBuildData {
    set: string[]
    main: {
        [slotKey: string]: string[]
    }
    weight: {
        [affixKey: string]: number
    }
}

interface ICharacterData {
    [key: string]: {
        element: string
        rarity: number
        presets: string[]
        build: IBuildData
        pop?: boolean
    }
}

export default <ICharacterData>{
    "TravelerAnemo": {
        "element": "anemo",
        "rarity": 5,
        "presets": ["攻充精双暴"],
        "build": {
            "set": ["ViridescentVenerer"],
            "main": {
                "sands": ["em", "atkp"],
                "goblet": ["em", "anemoDB"],
                "circlet": ["cr", "cd", "em"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.25,
                "defp": 0,
                "em": 1,
                "er": 1,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "TravelerGeo": {
        "element": "geo",
        "rarity": 5,
        "presets": ["攻充双暴"],
        "build": {
            "set": ["GladiatorsFinale", "ShimenawasReminiscence", "ArchaicPetra", "NoblesseOblige"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["geoDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "TravelerElectro": {
        "element": "electro",
        "rarity": 5,
        "presets": ["充", "攻充双暴"],
        "build": {
            "set": ["ShimenawasReminiscence", "GladiatorsFinale", "WanderersTroupe", "EmblemOfSeveredFate", "NoblesseOblige"],
            "main": {
                "sands": ["er"],
                "goblet": ["atkp", "em"],
                "circlet": ["cr", "cd", "em"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "TravelerDendro": {
        "element": "dendro",
        "rarity": 5,
        "presets": ["精双暴", "精充双暴", "攻精双暴", "攻精充双暴"],
        "build": {
            "set": ["EmblemOfSeveredFate", "DeepwoodMemories", "GildedDreams", "NoblesseOblige"],
            "main": {
                "sands": ["er", "em"],
                "goblet": ["dendroDB", "em"],
                "circlet": ["cr", "cd", "em"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "KamisatoAyaka": {
        "pop": true,
        "element": "cryo",
        "rarity": 5,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["GladiatorsFinale", "NoblesseOblige", "ShimenawasReminiscence", "EmblemOfSeveredFate", "BlizzardStrayer"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["cryoDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Jean": {
        "element": "anemo",
        "rarity": 5,
        "presets": ["攻充双暴", "攻双暴"],
        "build": {
            "set": ["ShimenawasReminiscence", "OceanHuedClam", "GladiatorsFinale", "ViridescentVenerer", "NoblesseOblige", "MaidenBeloved"],
            "main": {
                "sands": ["atkp", "er"],
                "goblet": ["anemoDB", "atkp"],
                "circlet": ["cr", "cd", "atkp", "hb"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Lisa": {
        "element": "electro",
        "rarity": 4,
        "presets": ["攻双暴"],
        "build": {
            "set": ["WanderersTroupe", "EmblemOfSeveredFate", "ThunderingFury"],
            "main": {
                "sands": ["atkp", "em", "er"],
                "goblet": ["electroDB", "atkp", "em"],
                "circlet": ["cr", "cd", "em"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Barbara": {
        "element": "hydro",
        "rarity": 4,
        "presets": ["生充"],
        "build": {
            "set": ["TenacityOfTheMillelith", "MaidenBeloved", "NoblesseOblige", "OceanHuedClam"],
            "main": {
                "sands": ["er", "hpp"],
                "goblet": ["hpp"],
                "circlet": ["hb", "hpp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0.25,
                "defp": 0,
                "em": 0.25,
                "er": 1,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "Kaeya": {
        "element": "cryo",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["NoblesseOblige", "BloodstainedChivalry", "EmblemOfSeveredFate", "PaleFlame", "GladiatorsFinale", "BlizzardStrayer"],
            "main": {
                "sands": ["atkp", "er"],
                "goblet": ["cryoDB", "physicalDB", "atkp"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Diluc": {
        "element": "pyro",
        "rarity": 5,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["GladiatorsFinale", "WanderersTroupe", "ShimenawasReminiscence", "CrimsonWitchOfFlames"],
            "main": {
                "sands": ["atkp", "em"],
                "goblet": ["pyroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Razor": {
        "element": "electro",
        "rarity": 4,
        "presets": ["攻双暴"],
        "build": {
            "set": ["ShimenawasReminiscence", "BloodstainedChivalry", "PaleFlame", "GladiatorsFinale"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["physicalDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Amber": {
        "element": "pyro",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["CrimsonWitchOfFlames", "NoblesseOblige", "WanderersTroupe"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["pyroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Venti": {
        "pop": true,
        "element": "anemo",
        "rarity": 5,
        "presets": ["攻充精双暴", "攻双暴"],
        "build": {
            "set": ["ViridescentVenerer"],
            "main": {
                "sands": ["atkp", "er", "em"],
                "goblet": ["anemoDB", "em"],
                "circlet": ["cr", "cd", "em"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Xiangling": {
        "pop": true,
        "element": "pyro",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴", "攻充精双暴"],
        "build": {
            "set": ["NoblesseOblige", "ShimenawasReminiscence", "GladiatorsFinale", "WanderersTroupe", "EmblemOfSeveredFate", "CrimsonWitchOfFlames"],
            "main": {
                "sands": ["em", "er", "atkp"],
                "goblet": ["pyroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Beidou": {
        "element": "electro",
        "rarity": 4,
        "presets": ["攻双暴"],
        "build": {
            "set": ["GladiatorsFinale", "ShimenawasReminiscence", "EmblemOfSeveredFate", "NoblesseOblige", "ThunderingFury"],
            "main": {
                "sands": ["atkp", "er"],
                "goblet": ["electroDB", "atkp"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Xingqiu": {
        "pop": true,
        "element": "hydro",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴", "攻充精双暴"],
        "build": {
            "set": ["GladiatorsFinale", "NoblesseOblige", "HeartOfDepth", "ShimenawasReminiscence", "EmblemOfSeveredFate"],
            "main": {
                "sands": ["atkp", "er"],
                "goblet": ["hydroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Xiao": {
        "pop": true,
        "element": "anemo",
        "rarity": 5,
        "presets": ["攻双暴"],
        "build": {
            "set": ["ViridescentVenerer", "GladiatorsFinale", "ShimenawasReminiscence"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["anemoDB", "atkp"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Ningguang": {
        "element": "geo",
        "rarity": 4,
        "presets": ["攻双暴"],
        "build": {
            "set": ["ArchaicPetra", "GladiatorsFinale", "NoblesseOblige", "ShimenawasReminiscence"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["geoDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Klee": {
        "pop": true,
        "element": "pyro",
        "rarity": 5,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["GladiatorsFinale", "WanderersTroupe", "RetracingBolide", "Lavawalker", "ShimenawasReminiscence", "CrimsonWitchOfFlames"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["pyroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Zhongli": {
        "pop": true,
        "element": "geo",
        "rarity": 5,
        "presets": ["攻双暴", "攻生充双暴", "攻生双暴"],
        "build": {
            "set": ["ArchaicPetra", "ShimenawasReminiscence", "GladiatorsFinale", "NoblesseOblige", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["hpp", "atkp", "er"],
                "goblet": ["geoDB", "hpp"],
                "circlet": ["cr", "cd", "hpp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0.5,
                "atkp": 0.5,
                "defp": 0,
                "em": 0,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Fischl": {
        "pop": true,
        "element": "electro",
        "rarity": 4,
        "presets": ["攻充双暴", "攻充精双暴", "攻双暴"],
        "build": {
            "set": ["PaleFlame", "ThunderingFury", "GladiatorsFinale", "BloodstainedChivalry", "ShimenawasReminiscence", "Thundersoother", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["electroDB", "physicalDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Bennett": {
        "pop": true,
        "element": "pyro",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴", "攻充精双暴"],
        "build": {
            "set": ["OceanHuedClam", "MaidenBeloved", "NoblesseOblige"],
            "main": {
                "sands": ["er", "hpp"],
                "goblet": ["hpp"],
                "circlet": ["hb", "hpp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0.25,
                "defp": 0,
                "em": 0.25,
                "er": 1,
                "cr": 0.25,
                "cd": 0.25
            }
        }
    },
    "Tartaglia": {
        "pop": true,
        "element": "hydro",
        "rarity": 5,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["ShimenawasReminiscence", "NoblesseOblige", "GladiatorsFinale", "WanderersTroupe", "HeartOfDepth"],
            "main": {
                "sands": ["atkp", "er", "em"],
                "goblet": ["hydroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Noelle": {
        "element": "geo",
        "rarity": 4,
        "presets": ["攻双暴", "攻防双暴", "攻防充双暴", "防双暴"],
        "build": {
            "set": ["RetracingBolide", "GladiatorsFinale", "HuskOfOpulentDreams"],
            "main": {
                "sands": ["defp"],
                "goblet": ["geoDB", "defp"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.25,
                "defp": 0.5,
                "em": 0,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Qiqi": {
        "element": "cryo",
        "rarity": 5,
        "presets": ["攻双暴"],
        "build": {
            "set": ["EmblemOfSeveredFate", "MaidenBeloved", "NoblesseOblige", "OceanHuedClam", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["er", "atkp"],
                "goblet": ["atkp"],
                "circlet": ["hb", "atkp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 1,
                "defp": 0,
                "em": 0,
                "er": 1,
                "cr": 0.25,
                "cd": 0.25
            }
        }
    },
    "Chongyun": {
        "element": "cryo",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["BlizzardStrayer", "EmblemOfSeveredFate", "Lavawalker", "NoblesseOblige"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["cryoDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Ganyu": {
        "pop": true,
        "element": "cryo",
        "rarity": 5,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["NoblesseOblige", "GladiatorsFinale", "ShimenawasReminiscence", "EmblemOfSeveredFate", "BlizzardStrayer", "WanderersTroupe"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["cryoDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Albedo": {
        "element": "geo",
        "rarity": 5,
        "presets": ["防双暴"],
        "build": {
            "set": ["ArchaicPetra", "HuskOfOpulentDreams", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["defp"],
                "goblet": ["geoDB"],
                "circlet": ["cr", "cd", "defp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.25,
                "defp": 0.5,
                "em": 0,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Diona": {
        "element": "cryo",
        "rarity": 4,
        "presets": ["生充"],
        "build": {
            "set": ["OceanHuedClam", "TenacityOfTheMillelith", "MaidenBeloved", "NoblesseOblige"],
            "main": {
                "sands": ["hpp", "er"],
                "goblet": ["hpp"],
                "circlet": ["hpp", "hb"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0,
                "defp": 0,
                "em": 0,
                "er": 1,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "Mona": {
        "element": "hydro",
        "rarity": 5,
        "presets": ["攻双暴", "攻精双暴", "攻充精双暴"],
        "build": {
            "set": ["HeartOfDepth", "WanderersTroupe", "EmblemOfSeveredFate", "NoblesseOblige", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["er"],
                "goblet": ["atkp"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Keqing": {
        "pop": true,
        "element": "electro",
        "rarity": 5,
        "presets": ["攻双暴"],
        "build": {
            "set": ["GladiatorsFinale", "NoblesseOblige", "BloodstainedChivalry", "PaleFlame", "Thundersoother", "ShimenawasReminiscence", "ThunderingFury"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["electroDB", "physicalDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Sucrose": {
        "pop": true,
        "element": "anemo",
        "rarity": 4,
        "presets": ["精"],
        "build": {
            "set": ["GladiatorsFinale", "NoblesseOblige", "ShimenawasReminiscence", "ViridescentVenerer"],
            "main": {
                "sands": ["em", "er", "atkp"],
                "goblet": ["em", "anemoDB"],
                "circlet": ["cr", "cd", "em"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.25,
                "defp": 0,
                "em": 1,
                "er": 0.5,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "Xinyan": {
        "element": "pyro",
        "rarity": 4,
        "presets": ["攻双暴", "攻防双暴"],
        "build": {
            "set": ["PaleFlame", "GladiatorsFinale", "ShimenawasReminiscence", "RetracingBolide", "HuskOfOpulentDreams", "TenacityOfTheMillelith", "BloodstainedChivalry"],
            "main": {
                "sands": ["defp", "atkp"],
                "goblet": ["defp", "physicalDB"],
                "circlet": ["cr", "cd", "defp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0.5,
                "em": 0,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Rosaria": {
        "element": "cryo",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["GladiatorsFinale", "ShimenawasReminiscence", "BlizzardStrayer", "BloodstainedChivalry", "EmblemOfSeveredFate", "PaleFlame", "NoblesseOblige"],
            "main": {
                "sands": ["atkp", "er"],
                "goblet": ["cryoDB", "physicalDB"],
                "circlet": ["cr"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "HuTao": {
        "pop": true,
        "element": "pyro",
        "rarity": 5,
        "presets": ["攻双暴", "攻生精双暴", "生精双暴", "生精爆伤"],
        "build": {
            "set": ["TenacityOfTheMillelith", "WanderersTroupe", "RetracingBolide", "ShimenawasReminiscence", "CrimsonWitchOfFlames"],
            "main": {
                "sands": ["hpp", "em"],
                "goblet": ["pyroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0.5,
                "atkp": 0.25,
                "defp": 0,
                "em": 0.5,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "KaedeharaKazuha": {
        "pop": true,
        "element": "anemo",
        "rarity": 5,
        "presets": ["攻双暴", "攻精双暴", "精充"],
        "build": {
            "set": ["ViridescentVenerer"],
            "main": {
                "sands": ["em", "atkp"],
                "goblet": ["anemoDB", "em", "atkp"],
                "circlet": ["cr", "cd", "em", "atkp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 1,
                "er": 0.5,
                "cr": 0.5,
                "cd": 0.5
            }
        }
    },
    "Yanfei": {
        "element": "pyro",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["RetracingBolide", "CrimsonWitchOfFlames", "WanderersTroupe"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["pyroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Yoimiya": {
        "pop": true,
        "element": "pyro",
        "rarity": 5,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["GladiatorsFinale", "CrimsonWitchOfFlames", "RetracingBolide", "Lavawalker", "ShimenawasReminiscence"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["pyroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Thoma": {
        "element": "pyro",
        "rarity": 4,
        "presets": ["生充"],
        "build": {
            "set": ["TenacityOfTheMillelith", "EmblemOfSeveredFate"],
            "main": {
                "sands": ["er", "hpp"],
                "goblet": ["hpp"],
                "circlet": ["hpp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0.25,
                "defp": 0,
                "em": 0.25,
                "er": 1,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "Eula": {
        "pop": true,
        "element": "cryo",
        "rarity": 5,
        "presets": ["攻充双暴", "攻击爆伤", "攻双暴"],
        "build": {
            "set": ["GladiatorsFinale", "BloodstainedChivalry", "ShimenawasReminiscence", "PaleFlame"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["physicalDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "RaidenShogun": {
        "pop": true,
        "element": "electro",
        "rarity": 5,
        "presets": ["攻充双暴", "攻双暴"],
        "build": {
            "set": ["EmblemOfSeveredFate"],
            "main": {
                "sands": ["er", "atkp"],
                "goblet": ["electroDB", "atkp"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Sayu": {
        "element": "anemo",
        "rarity": 4,
        "presets": ["攻充双暴", "攻双暴"],
        "build": {
            "set": ["ShimenawasReminiscence", "OceanHuedClam", "ViridescentVenerer", "MaidenBeloved"],
            "main": {
                "sands": ["em", "er", "atkp"],
                "goblet": ["em", "anemoDB"],
                "circlet": ["em", "hb", "atkp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 1,
                "defp": 0,
                "em": 0.5,
                "er": 1,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "SangonomiyaKokomi": {
        "pop": true,
        "element": "hydro",
        "rarity": 5,
        "presets": ["生充", "生攻充", "生攻精充"],
        "build": {
            "set": ["MaidenBeloved", "OceanHuedClam", "TenacityOfTheMillelith", "HeartOfDepth"],
            "main": {
                "sands": ["hpp", "er"],
                "goblet": ["hydroDB", "hpp"],
                "circlet": ["hb"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 0,
                "cd": 0
            }
        }
    },
    "Gorou": {
        "element": "geo",
        "rarity": 4,
        "presets": ["防充"],
        "build": {
            "set": ["HuskOfOpulentDreams", "EmblemOfSeveredFate", "MaidenBeloved", "OceanHuedClam", "ArchaicPetra", "NoblesseOblige"],
            "main": {
                "sands": ["er"],
                "goblet": ["defp"],
                "circlet": ["defp", "hb"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.25,
                "defp": 1,
                "em": 0.25,
                "er": 1,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "KujouSara": {
        "element": "electro",
        "rarity": 4,
        "presets": ["攻充双暴", "攻双暴"],
        "build": {
            "set": ["GladiatorsFinale", "ThunderingFury", "ShimenawasReminiscence", "EmblemOfSeveredFate", "NoblesseOblige"],
            "main": {
                "sands": ["er", "atkp"],
                "goblet": ["electroDB", "atkp"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "AratakiItto": {
        "pop": true,
        "element": "geo",
        "rarity": 5,
        "presets": ["攻双暴", "攻防双暴", "攻防充双暴", "防双暴"],
        "build": {
            "set": ["ArchaicPetra", "HuskOfOpulentDreams"],
            "main": {
                "sands": ["defp"],
                "goblet": ["geoDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0.5,
                "em": 0,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "YaeMiko": {
        "pop": true,
        "element": "electro",
        "rarity": 5,
        "presets": ["攻精双暴", "攻充精双暴"],
        "build": {
            "set": ["ShimenawasReminiscence", "GladiatorsFinale", "ThunderingFury", "Thundersoother", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["electroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "ShikanoinHeizou": {
        "element": "anemo",
        "rarity": 4,
        "presets": ["攻双暴"],
        "build": {
            "set": ["ViridescentVenerer", "GladiatorsFinale", "ShimenawasReminiscence", "EchoesOfAnOffering"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["anemoDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Yelan": {
        "pop": true,
        "element": "hydro",
        "rarity": 5,
        "presets": ["生双暴", "生充双暴"],
        "build": {
            "set": ["EmblemOfSeveredFate", "HeartOfDepth", "NoblesseOblige", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["hpp", "er"],
                "goblet": ["hydroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0,
                "defp": 0,
                "em": 0,
                "er": 1,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Aloy": {
        "element": "cryo",
        "rarity": 4,
        "presets": ["攻双暴", "攻精双暴"],
        "build": {
            "set": ["GladiatorsFinale", "ShimenawasReminiscence", "EmblemOfSeveredFate", "NoblesseOblige", "BlizzardStrayer"],
            "main": {
                "sands": ["atkp", "er", "em"],
                "goblet": ["cryoDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.25,
                "er": 0.25,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Shenhe": {
        "pop": true,
        "element": "cryo",
        "rarity": 5,
        "presets": ["攻充", "攻双暴"],
        "build": {
            "set": ["ShimenawasReminiscence", "GladiatorsFinale", "NoblesseOblige"],
            "main": {
                "sands": ["atkp", "er"],
                "goblet": ["atkp"],
                "circlet": ["atkp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 1,
                "defp": 0,
                "em": 0.25,
                "er": 0.5,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "YunJin": {
        "element": "geo",
        "rarity": 4,
        "presets": ["防充"],
        "build": {
            "set": ["EmblemOfSeveredFate", "NoblesseOblige", "HuskOfOpulentDreams"],
            "main": {
                "sands": ["defp", "er"],
                "goblet": ["defp"],
                "circlet": ["defp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.25,
                "defp": 1,
                "em": 0.25,
                "er": 1,
                "cr": 0.5,
                "cd": 0.25
            }
        }
    },
    "KukiShinobu": {
        "element": "electro",
        "rarity": 4,
        "presets": ["生", "生精"],
        "build": {
            "set": ["TenacityOfTheMillelith", "OceanHuedClam", "MaidenBeloved"],
            "main": {
                "sands": ["em", "hpp"],
                "goblet": ["em", "hpp"],
                "circlet": ["hb", "em"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0,
                "defp": 0,
                "em": 1,
                "er": 0,
                "cr": 0.5,
                "cd": 0
            }
        }
    },
    "KamisatoAyato": {
        "pop": true,
        "element": "hydro",
        "rarity": 5,
        "presets": ["攻双暴", "攻生双暴"],
        "build": {
            "set": ["EchoesOfAnOffering", "GladiatorsFinale", "HeartOfDepth"],
            "main": {
                "sands": ["atkp"],
                "goblet": ["hydroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0.25,
                "atkp": 0.5,
                "defp": 0,
                "em": 0,
                "er": 0,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Collei": {
        "element": "dendro",
        "rarity": 4,
        "presets": ["精双暴", "精充双暴", "攻精双暴", "攻精充双暴"],
        "build": {
            "set": ["DeepwoodMemories", "GildedDreams", "EmblemOfSeveredFate", "NoblesseOblige"],
            "main": {
                "sands": ["atkp", "er"],
                "goblet": ["dendroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0.5,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Dori": {
        "element": "electro",
        "rarity": 4,
        "presets": ["生充"],
        "build": {
            "set": ["MaidenBeloved", "OceanHuedClam", "NoblesseOblige", "EmblemOfSeveredFate"],
            "main": {
                "sands": ["hpp", "er"],
                "goblet": ["hpp"],
                "circlet": ["hb"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0,
                "defp": 0,
                "em": 0,
                "er": 1,
                "cr": 0,
                "cd": 0
            }
        }
    },
    "Tighnari": {
        "pop": true,
        "element": "dendro",
        "rarity": 5,
        "presets": ["精双暴", "攻精双暴"],
        "build": {
            "set": ["DeepwoodMemories", "GildedDreams", "WanderersTroupe"],
            "main": {
                "sands": ["em"],
                "goblet": ["dendroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.5,
                "defp": 0,
                "em": 0.5,
                "er": 0,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Nilou": {
        "pop": true,
        "element": "hydro",
        "rarity": 5,
        "presets": ["生精双暴", "生精充双暴"],
        "build": {
            "set": ["GildedDreams", "WanderersTroupe", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["hpp"],
                "goblet": ["hpp"],
                "circlet": ["hpp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0,
                "defp": 0,
                "em": 1,
                "er": 0,
                "cr": 0,
                "cd": 0
            }
        }
    },
    "Cyno": {
        "pop": true,
        "element": "electro",
        "rarity": 5,
        "presets": ["攻精双暴", "攻精充双暴"],
        "build": {
            "set": ["GildedDreams", "GladiatorsFinale", "ThunderingFury"],
            "main": {
                "sands": ["em", "atkp"],
                "goblet": ["electroDB"],
                "circlet": ["cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.25,
                "defp": 0,
                "em": 0.5,
                "er": 0,
                "cr": 1,
                "cd": 1
            }
        }
    },
    "Candace": {
        "element": "hydro",
        "rarity": 4,
        "presets": ["生充"],
        "build": {
            "set": ["EmblemOfSeveredFate", "NoblesseOblige", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["er", "hpp"],
                "goblet": ["hpp", "hydroDB"],
                "circlet": ["hpp", "cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0,
                "defp": 0,
                "em": 0,
                "er": 1,
                "cr": 0,
                "cd": 0
            }
        }
    },
    "Nahida": {
        "pop": true,
        "element": "dendro",
        "rarity": 5,
        "presets": ["精", "精双暴"],
        "build": {
            "set": ["WanderersTroupe", "DeepwoodMemories", "GildedDreams"],
            "main": {
                "sands": ["em"],
                "goblet": ["em", "dendroDB"],
                "circlet": ["em", "cr", "cd"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0.25,
                "defp": 0,
                "em": 1,
                "er": 0,
                "cr": 0.5,
                "cd": 0.5
            }
        }
    },
    "Layla": {
        "element": "cryo",
        "rarity": 4,
        "presets": ["生充"],
        "build": {
            "set": ["NoblesseOblige", "TenacityOfTheMillelith"],
            "main": {
                "sands": ["hpp"],
                "goblet": ["hpp"],
                "circlet": ["hpp"]
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 1,
                "atkp": 0,
                "defp": 0,
                "em": 0,
                "er": 1,
                "cr": 0,
                "cd": 0
            }
        }
    },
    "Wanderer": {
        "pop": true,
        "element": "anemo",
        "rarity": 5,
        "presets": [],
        "build": {
            "set": [],
            "main": {
                "sands": [],
                "goblet": [],
                "circlet": []
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0,
                "defp": 0,
                "em": 0,
                "er": 0,
                "cr": 0,
                "cd": 0
            }
        }
    },
    "Faruzan": {
        "element": "anemo",
        "rarity": 4,
        "presets": [],
        "build": {
            "set": [],
            "main": {
                "sands": [],
                "goblet": [],
                "circlet": []
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0,
                "defp": 0,
                "em": 0,
                "er": 0,
                "cr": 0,
                "cd": 0
            }
        }
    },
    /* TEMPLATE
    "": {
        "element": "",
        "rarity": 0,
        "presets": [],
        "build": {
            "set": [],
            "main": {

                "sands": [],
                "goblet": [],
                "circlet": []
            },
            "weight": {
                "hp": 0,
                "atk": 0,
                "def": 0,
                "hpp": 0,
                "atkp": 0,
                "defp": 0,
                "em": 0,
                "er": 0,
                "cr": 0,
                "cd": 0
            }
        }
    },
    */
}