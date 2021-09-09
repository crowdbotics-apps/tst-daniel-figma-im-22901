import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_279_698}>
        <Text style={styles.Text_279_698}>Screens</Text>
      </View>
      <View style={styles.View_279_761}>
        <Text style={styles.Text_279_761}>profile</Text>
      </View>
      <View style={styles.View_303_999}>
        <Text style={styles.Text_303_999}>Personal user profile</Text>
      </View>
      <View style={styles.View_303_1004}>
        <Text style={styles.Text_303_1004}>Feed post- 1:1 image</Text>
      </View>
      <View style={styles.View_303_1002}>
        <Text style={styles.Text_303_1002}>Following a user profile</Text>
      </View>
      <View style={styles.View_303_1005}>
        <Text style={styles.Text_303_1005}>Feed post- 4:5 image</Text>
      </View>
      <View style={styles.View_303_1003}>
        <Text style={styles.Text_303_1003}>Non-following user profile</Text>
      </View>
      <View style={styles.View_303_1006}>
        <Text style={styles.Text_303_1006}>Feed Sponsored post with CTA</Text>
      </View>
      <View style={styles.View_303_1008}>
        <Text style={styles.Text_303_1008}>Personal profile grid</Text>
      </View>
      <View style={styles.View_279_769}>
        <Text style={styles.Text_279_769}>Feed/posts</Text>
      </View>
      <View style={styles.View_303_33}>
        <Text style={styles.Text_303_33}>Grid</Text>
      </View>
      <View style={styles.View_278_391}>
        <View style={styles.View_278_392}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
            }}
            style={styles.ImageBackground_278_393}
          />
          <View style={styles.View_278_944}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/898b/ec5a/efd4cee444808e926a7d4d3a21e47ab7"
              }}
              style={styles.ImageBackground_278_945}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9ba/0f79/30d8c73e9014233ca98a2f85e22df576"
              }}
              style={styles.ImageBackground_278_946}
            />
          </View>
          <View style={styles.View_278_398}>
            <Text style={styles.Text_278_398}>Ruffles</Text>
          </View>
        </View>
        <View style={styles.View_278_399}>
          <View style={styles.View_278_400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3831/252e/a5977f756b377007a3ea9456f5725b3c"
              }}
              style={styles.ImageBackground_278_401}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf8/9399/384e18d8f3e74f94d58c79544e7ea61f"
              }}
              style={styles.ImageBackground_278_403}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d4b/fa1d/8886c2e007b51f472490a4594c3b0c52"
              }}
              style={styles.ImageBackground_278_405}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c31d/c1bf/ad4bc25bae2038c5aa7601805a6a381f"
              }}
              style={styles.ImageBackground_278_407}
            />
            <View style={styles.View_278_409}>
              <Text style={styles.Text_278_409}>100 Likes</Text>
            </View>
            <View style={styles.View_278_410}>
              <Text style={styles.Text_278_410}>userna</Text>
            </View>
            <View style={styles.View_278_411}>
              <View style={styles.View_278_412}>
                <Text style={styles.Text_278_412}>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt... more{" "}
                </Text>
              </View>
              <View style={styles.View_278_413}>
                <View style={styles.View_278_414}>
                  <Text style={styles.Text_278_414}>Add comment...</Text>
                </View>
                <View style={styles.View_278_415}>
                  <Text style={styles.Text_278_415}>😍</Text>
                </View>
                <View style={styles.View_278_416}>
                  <Text style={styles.Text_278_416}>😭</Text>
                </View>
                <View style={styles.View_278_417}>
                  <Text style={styles.Text_278_417}>10 minutes ago</Text>
                </View>
                <View style={styles.View_278_418}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dfd/8a72/1f7f67ec588656b6ead848df9eff5354"
                    }}
                    style={styles.ImageBackground_278_419}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50ba/71be/e39de56454a702814c851622d2c507c0"
                    }}
                    style={styles.ImageBackground_278_420}
                  />
                </View>
                <View style={styles.View_278_421}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17e6/1632/7082d5d0d4b2cc9ab38901345228e2ac"
                    }}
                    style={styles.ImageBackground_278_422}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b39b/f79d/b46be8f9f64bfc037f8a7b5cc0c3ee7b"
                    }}
                    style={styles.ImageBackground_278_423}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e868/0874/20990ec1cf10525a8bc811c59b25eca7"
              }}
              style={styles.ImageBackground_278_426}
            />
          </View>
        </View>
        <View style={styles.View_278_431}>
          <View style={styles.View_278_942}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f08b/e0be/2088692f5783a30ea2760cb8779507ff"
              }}
              style={styles.ImageBackground_278_943}
            />
          </View>
          <View style={styles.View_278_433}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a98f/9521/52bad4cf80bd88424cc7e1fd30104076"
              }}
              style={styles.ImageBackground_278_434}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33f5/f53b/38e7ccb63f5d282872efb02079153078"
              }}
              style={styles.ImageBackground_278_435}
            />
          </View>
        </View>
        <View style={styles.View_279_780}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e2b/cceb/f891ac9e685d4a9c7e1e2198b61684de"
            }}
            style={styles.ImageBackground_279_781}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4119/f4d3/86797f1ea228640a30dab0332eea0cb0"
            }}
            style={styles.ImageBackground_279_782}
          />
          <View style={styles.View_279_784}>
            <View style={styles.View_279_785} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
              }}
              style={styles.ImageBackground_279_786}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b3/a150/d513ac51033382a17165d64a64320d86"
            }}
            style={styles.ImageBackground_279_789}
          />
        </View>
        <View style={styles.View_278_436}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
            }}
            style={styles.ImageBackground_278_437}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e9a/d69a/ebe65787e96dde22c553293435a24118"
            }}
            style={styles.ImageBackground_278_438}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
            }}
            style={styles.ImageBackground_278_440}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
            }}
            style={styles.ImageBackground_278_446}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
            }}
            style={styles.ImageBackground_278_450}
          />
          <View style={styles.View_278_452}>
            <View style={styles.View_278_454}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
                }}
                style={styles.ImageBackground_278_455}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
                }}
                style={styles.ImageBackground_278_456}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_457}>
          <View style={styles.View_278_458}>
            <View style={styles.View_278_459} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_278_460}
            />
            <View style={styles.View_278_461} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
            }}
            style={styles.ImageBackground_278_462}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_278_466}
          />
          <View style={styles.View_278_471}>
            <View style={styles.View_278_472}>
              <Text style={styles.Text_278_472}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_278_484}>
          <View style={styles.View_278_485} />
          <View style={styles.View_278_486}>
            <View style={styles.View_278_487}>
              <View style={styles.View_278_488}>
                <View style={styles.View_278_489}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5251/1056/d29bb0f107502bff1eaaac475a3d4a5c"
                    }}
                    style={styles.ImageBackground_278_490}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4757/b1e5/be04712272a7d5f00bf75b71a8a8ec13"
                    }}
                    style={styles.ImageBackground_278_495}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd2/167f/4cc94a021c874cf493abc7cf91459e78"
                  }}
                  style={styles.ImageBackground_278_496}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db05/bb2e/7ce47601b7ba2e44646b579f679c830b"
                  }}
                  style={styles.ImageBackground_278_497}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_278_498}
            />
            <View style={styles.View_278_499}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_278_500}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c5b/a199/b847e9cf8d46289592eb6d13dfaae474"
                }}
                style={styles.ImageBackground_278_501}
              />
            </View>
            <View style={styles.View_278_502}>
              <Text style={styles.Text_278_502}>Your Story</Text>
            </View>
          </View>
          <View style={styles.View_278_503}>
            <View style={styles.View_278_504}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_278_505}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91d/3e43/10e0df45e92789b5830af2e9aa0e67d2"
                }}
                style={styles.ImageBackground_278_506}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_278_507}
            />
            <View style={styles.View_278_508}>
              <Text style={styles.Text_278_508}>HypeSun_98</Text>
            </View>
          </View>
          <View style={styles.View_278_509}>
            <View style={styles.View_278_510}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_278_511}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d88c/5ed0/e5566df9c44e78658e50b9310b0b69cf"
                }}
                style={styles.ImageBackground_278_512}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_278_513}
            />
            <View style={styles.View_278_514}>
              <Text style={styles.Text_278_514}>KarolBary</Text>
            </View>
          </View>
          <View style={styles.View_278_515}>
            <View style={styles.View_278_516}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_278_517}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa8/74fc/29cbfbdab6a89278f46cab83a1f2670f"
                }}
                style={styles.ImageBackground_278_518}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_278_519}
            />
            <View style={styles.View_278_520}>
              <Text style={styles.Text_278_520}>Waggles</Text>
            </View>
          </View>
          <View style={styles.View_278_521}>
            <View style={styles.View_278_522}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_278_523}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a0d/517f/7e62a3549997e91c21d572306667b288"
                }}
                style={styles.ImageBackground_278_524}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_278_525}
            />
            <View style={styles.View_278_526}>
              <Text style={styles.Text_278_526}>Cherine_001</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
            }}
            style={styles.ImageBackground_278_527}
          />
        </View>
        <View style={styles.View_278_528} />
      </View>
      <View style={styles.View_303_34}>
        <View style={styles.View_303_35}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
            }}
            style={styles.ImageBackground_303_36}
          />
          <View style={styles.View_303_40}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/898b/ec5a/efd4cee444808e926a7d4d3a21e47ab7"
              }}
              style={styles.ImageBackground_303_41}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9ba/0f79/30d8c73e9014233ca98a2f85e22df576"
              }}
              style={styles.ImageBackground_303_42}
            />
          </View>
          <View style={styles.View_303_43}>
            <Text style={styles.Text_303_43}>Ruffles</Text>
          </View>
        </View>
        <View style={styles.View_303_180}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7228/0713/89213f04868a501b8d691440acbb5b80"
            }}
            style={styles.ImageBackground_303_181}
          />
        </View>
        <View style={styles.View_303_1619}>
          <View style={styles.View_303_1620}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3831/252e/a5977f756b377007a3ea9456f5725b3c"
              }}
              style={styles.ImageBackground_303_1621}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf8/9399/384e18d8f3e74f94d58c79544e7ea61f"
              }}
              style={styles.ImageBackground_303_1623}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d4b/fa1d/8886c2e007b51f472490a4594c3b0c52"
              }}
              style={styles.ImageBackground_303_1625}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c31d/c1bf/ad4bc25bae2038c5aa7601805a6a381f"
              }}
              style={styles.ImageBackground_303_1627}
            />
            <View style={styles.View_303_1629}>
              <Text style={styles.Text_303_1629}>100 Likes</Text>
            </View>
            <View style={styles.View_303_1630}>
              <View style={styles.View_303_1631}>
                <Text style={styles.Text_303_1631}>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt... more{" "}
                </Text>
              </View>
              <View style={styles.View_303_1632}>
                <View style={styles.View_303_1633}>
                  <Text style={styles.Text_303_1633}>Add comment...</Text>
                </View>
                <View style={styles.View_303_1634}>
                  <Text style={styles.Text_303_1634}>😍</Text>
                </View>
                <View style={styles.View_303_1635}>
                  <Text style={styles.Text_303_1635}>😭</Text>
                </View>
                <View style={styles.View_303_1636}>
                  <Text style={styles.Text_303_1636}>10 minutes ago</Text>
                </View>
                <View style={styles.View_303_1637}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dfd/8a72/1f7f67ec588656b6ead848df9eff5354"
                    }}
                    style={styles.ImageBackground_303_1638}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50ba/71be/e39de56454a702814c851622d2c507c0"
                    }}
                    style={styles.ImageBackground_303_1639}
                  />
                </View>
                <View style={styles.View_303_1640}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17e6/1632/7082d5d0d4b2cc9ab38901345228e2ac"
                    }}
                    style={styles.ImageBackground_303_1641}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b39b/f79d/b46be8f9f64bfc037f8a7b5cc0c3ee7b"
                    }}
                    style={styles.ImageBackground_303_1642}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_303_1645}>
              <Text style={styles.Text_303_1645}>userna</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e868/0874/20990ec1cf10525a8bc811c59b25eca7"
              }}
              style={styles.ImageBackground_303_1646}
            />
          </View>
        </View>
        <View style={styles.View_303_82}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e2b/cceb/f891ac9e685d4a9c7e1e2198b61684de"
            }}
            style={styles.ImageBackground_303_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4119/f4d3/86797f1ea228640a30dab0332eea0cb0"
            }}
            style={styles.ImageBackground_303_84}
          />
          <View style={styles.View_303_86}>
            <View style={styles.View_303_87} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
              }}
              style={styles.ImageBackground_303_88}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b3/a150/d513ac51033382a17165d64a64320d86"
            }}
            style={styles.ImageBackground_303_91}
          />
        </View>
        <View style={styles.View_303_94}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
            }}
            style={styles.ImageBackground_303_95}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e9a/d69a/ebe65787e96dde22c553293435a24118"
            }}
            style={styles.ImageBackground_303_96}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
            }}
            style={styles.ImageBackground_303_98}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
            }}
            style={styles.ImageBackground_303_104}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
            }}
            style={styles.ImageBackground_303_108}
          />
          <View style={styles.View_303_110}>
            <View style={styles.View_303_112}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
                }}
                style={styles.ImageBackground_303_113}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
                }}
                style={styles.ImageBackground_303_114}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_303_115}>
          <View style={styles.View_303_116}>
            <View style={styles.View_303_117} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_303_118}
            />
            <View style={styles.View_303_119} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
            }}
            style={styles.ImageBackground_303_120}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_303_124}
          />
          <View style={styles.View_303_129}>
            <View style={styles.View_303_130}>
              <Text style={styles.Text_303_130}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_303_131}>
          <View style={styles.View_303_132} />
          <View style={styles.View_303_133}>
            <View style={styles.View_303_134}>
              <View style={styles.View_303_135}>
                <View style={styles.View_303_136}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5251/1056/d29bb0f107502bff1eaaac475a3d4a5c"
                    }}
                    style={styles.ImageBackground_303_137}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4757/b1e5/be04712272a7d5f00bf75b71a8a8ec13"
                    }}
                    style={styles.ImageBackground_303_142}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd2/167f/4cc94a021c874cf493abc7cf91459e78"
                  }}
                  style={styles.ImageBackground_303_143}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db05/bb2e/7ce47601b7ba2e44646b579f679c830b"
                  }}
                  style={styles.ImageBackground_303_144}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_145}
            />
            <View style={styles.View_303_146}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_147}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c5b/a199/b847e9cf8d46289592eb6d13dfaae474"
                }}
                style={styles.ImageBackground_303_148}
              />
            </View>
            <View style={styles.View_303_149}>
              <Text style={styles.Text_303_149}>Your Story</Text>
            </View>
          </View>
          <View style={styles.View_303_150}>
            <View style={styles.View_303_151}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_152}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91d/3e43/10e0df45e92789b5830af2e9aa0e67d2"
                }}
                style={styles.ImageBackground_303_153}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_154}
            />
            <View style={styles.View_303_155}>
              <Text style={styles.Text_303_155}>HypeSun_98</Text>
            </View>
          </View>
          <View style={styles.View_303_156}>
            <View style={styles.View_303_157}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_158}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d88c/5ed0/e5566df9c44e78658e50b9310b0b69cf"
                }}
                style={styles.ImageBackground_303_159}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_160}
            />
            <View style={styles.View_303_161}>
              <Text style={styles.Text_303_161}>KarolBary</Text>
            </View>
          </View>
          <View style={styles.View_303_162}>
            <View style={styles.View_303_163}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_164}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa8/74fc/29cbfbdab6a89278f46cab83a1f2670f"
                }}
                style={styles.ImageBackground_303_165}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_166}
            />
            <View style={styles.View_303_167}>
              <Text style={styles.Text_303_167}>Waggles</Text>
            </View>
          </View>
          <View style={styles.View_303_168}>
            <View style={styles.View_303_169}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_170}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a0d/517f/7e62a3549997e91c21d572306667b288"
                }}
                style={styles.ImageBackground_303_171}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_172}
            />
            <View style={styles.View_303_173}>
              <Text style={styles.Text_303_173}>Cherine_001</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
            }}
            style={styles.ImageBackground_303_174}
          />
        </View>
        <View style={styles.View_303_175} />
      </View>
      <View style={styles.View_278_529}>
        <View style={styles.View_278_530}>
          <View style={styles.View_278_531}>
            <View style={styles.View_278_532}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f9/fb04/d1daf6b0a1620b2db60f5622b1720aa7"
                }}
                style={styles.ImageBackground_278_533}
              />
              <View style={styles.View_278_534}>
                <View style={styles.View_278_535} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_536}
                />
              </View>
            </View>
            <View style={styles.View_278_537}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/392a/536f/10b102cc70c747b12ed54a76bd0fb5b3"
                }}
                style={styles.ImageBackground_278_538}
              />
            </View>
            <View style={styles.View_278_539}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3b/6527/b0f5b093aacbdd8993b309c086540bbe"
                }}
                style={styles.ImageBackground_278_540}
              />
            </View>
          </View>
          <View style={styles.View_278_541}>
            <View style={styles.View_278_542}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a0/a780/eb9cc07d5a70ff90b743522e4b015216"
                }}
                style={styles.ImageBackground_278_543}
              />
            </View>
            <View style={styles.View_278_544}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe6/3262/ea715981a9a8b44dcc53495257afcc5c"
                }}
                style={styles.ImageBackground_278_545}
              />
            </View>
            <View style={styles.View_278_546}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edde/36ac/5dd9349d502ee2ca349afb0cc282c380"
                }}
                style={styles.ImageBackground_278_547}
              />
            </View>
          </View>
          <View style={styles.View_278_548}>
            <View style={styles.View_278_549}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fb/5bf5/02bef3093d69233f62d093c98583f97e"
                }}
                style={styles.ImageBackground_278_550}
              />
            </View>
            <View style={styles.View_278_551}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f859/05f2/6d375b063975e2da4ce2dd6d89fea784"
                }}
                style={styles.ImageBackground_278_552}
              />
              <View style={styles.View_278_553}>
                <View style={styles.View_278_554} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_555}
                />
              </View>
            </View>
            <View style={styles.View_278_556}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe3/bde0/77fe7e11fb4352a511259af12b6ec37f"
                }}
                style={styles.ImageBackground_278_557}
              />
            </View>
          </View>
          <View style={styles.View_278_558}>
            <View style={styles.View_278_559}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8468/7066/24fab43d1206360d5da10368e07a6574"
                }}
                style={styles.ImageBackground_278_560}
              />
              <View style={styles.View_278_561}>
                <View style={styles.View_278_562} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_563}
                />
              </View>
            </View>
            <View style={styles.View_278_564}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f75/4789/c7f894efe921f3140246312c9e8c4e05"
                }}
                style={styles.ImageBackground_278_565}
              />
            </View>
            <View style={styles.View_278_566}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e6/027c/f71daefac8525a6c022cb6cd27f7af89"
                }}
                style={styles.ImageBackground_278_567}
              />
            </View>
          </View>
          <View style={styles.View_278_568}>
            <View style={styles.View_278_569}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a2/c190/93140c329095d000b60dd11e3e9ea392"
                }}
                style={styles.ImageBackground_278_570}
              />
            </View>
            <View style={styles.View_278_571}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b31/d332/3fd349dc3bf09f19815f4996ccce5ab4"
                }}
                style={styles.ImageBackground_278_572}
              />
            </View>
            <View style={styles.View_278_573}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/fb78/9ff840f8389bfe3c5498a82a3ad5a3ef"
                }}
                style={styles.ImageBackground_278_574}
              />
              <View style={styles.View_278_575}>
                <View style={styles.View_278_576} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_577}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_278_578}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/413e/3aa06023371a2724121fd2ffcf3d6cd3"
            }}
            style={styles.ImageBackground_278_579}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4094/b947/465fc9dffd3578b469db874e48603d73"
            }}
            style={styles.ImageBackground_278_580}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
            }}
            style={styles.ImageBackground_278_582}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
            }}
            style={styles.ImageBackground_278_588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
            }}
            style={styles.ImageBackground_278_592}
          />
          <View style={styles.View_278_594}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/0f54/95b65a7db60497214c2bdf1e7289e8ca"
              }}
              style={styles.ImageBackground_278_595}
            />
            <View style={styles.View_278_596}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
                }}
                style={styles.ImageBackground_278_597}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
                }}
                style={styles.ImageBackground_278_598}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_599}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e45/220b/881c97ce927b849d0ce6d3fbc32680cb"
            }}
            style={styles.ImageBackground_278_600}
          />
          <View style={styles.View_278_603}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582f/cffd/e90cf50461a78b9ca0aeede46973e2b3"
              }}
              style={styles.ImageBackground_278_604}
            />
          </View>
        </View>
        <View style={styles.View_278_608}>
          <View style={styles.View_278_609}>
            <View style={styles.View_278_610} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_278_611}
            />
            <View style={styles.View_278_612} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
            }}
            style={styles.ImageBackground_278_613}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_278_617}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b350/590a/12424c812875b64bdc194585840c74dc"
            }}
            style={styles.ImageBackground_278_622}
          />
        </View>
        <View style={styles.View_278_623} />
        <View style={styles.View_278_624}>
          <View style={styles.View_278_625}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e3/c1aa/dde52f3ed4d35a98ef2e760067ac20e6"
              }}
              style={styles.ImageBackground_278_626}
            />
          </View>
          <View style={styles.View_278_634}>
            <View style={styles.View_278_635}>
              <Text style={styles.Text_278_635}>username</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607e/9471/a1fb9afcb528c5e35a52d30bac18af2b"
              }}
              style={styles.ImageBackground_278_636}
            />
          </View>
          <View style={styles.View_279_578}>
            <View style={styles.View_279_579} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
              }}
              style={styles.ImageBackground_279_580}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_278_638}>
        <View style={styles.View_278_639}>
          <View style={styles.View_278_640}>
            <View style={styles.View_278_641}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f9/fb04/d1daf6b0a1620b2db60f5622b1720aa7"
                }}
                style={styles.ImageBackground_278_642}
              />
              <View style={styles.View_278_643}>
                <View style={styles.View_278_644} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_645}
                />
              </View>
            </View>
            <View style={styles.View_278_646}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/392a/536f/10b102cc70c747b12ed54a76bd0fb5b3"
                }}
                style={styles.ImageBackground_278_647}
              />
            </View>
            <View style={styles.View_278_648}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3b/6527/b0f5b093aacbdd8993b309c086540bbe"
                }}
                style={styles.ImageBackground_278_649}
              />
            </View>
          </View>
          <View style={styles.View_278_650}>
            <View style={styles.View_278_651}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a0/a780/eb9cc07d5a70ff90b743522e4b015216"
                }}
                style={styles.ImageBackground_278_652}
              />
            </View>
            <View style={styles.View_278_653}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe6/3262/ea715981a9a8b44dcc53495257afcc5c"
                }}
                style={styles.ImageBackground_278_654}
              />
            </View>
            <View style={styles.View_278_655}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edde/36ac/5dd9349d502ee2ca349afb0cc282c380"
                }}
                style={styles.ImageBackground_278_656}
              />
            </View>
          </View>
          <View style={styles.View_278_657}>
            <View style={styles.View_278_658}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fb/5bf5/02bef3093d69233f62d093c98583f97e"
                }}
                style={styles.ImageBackground_278_659}
              />
            </View>
            <View style={styles.View_278_660}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f859/05f2/6d375b063975e2da4ce2dd6d89fea784"
                }}
                style={styles.ImageBackground_278_661}
              />
              <View style={styles.View_278_662}>
                <View style={styles.View_278_663} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_664}
                />
              </View>
            </View>
            <View style={styles.View_278_665}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe3/bde0/77fe7e11fb4352a511259af12b6ec37f"
                }}
                style={styles.ImageBackground_278_666}
              />
            </View>
          </View>
          <View style={styles.View_278_667}>
            <View style={styles.View_278_668}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8468/7066/24fab43d1206360d5da10368e07a6574"
                }}
                style={styles.ImageBackground_278_669}
              />
              <View style={styles.View_278_670}>
                <View style={styles.View_278_671} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_672}
                />
              </View>
            </View>
            <View style={styles.View_278_673}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e5/c7d5/9d66f1812f0c4fb89ec89aca2a2191d3"
                }}
                style={styles.ImageBackground_278_674}
              />
            </View>
            <View style={styles.View_278_675}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e6/027c/f71daefac8525a6c022cb6cd27f7af89"
                }}
                style={styles.ImageBackground_278_676}
              />
            </View>
          </View>
          <View style={styles.View_278_677}>
            <View style={styles.View_278_678}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a2/c190/93140c329095d000b60dd11e3e9ea392"
                }}
                style={styles.ImageBackground_278_679}
              />
            </View>
            <View style={styles.View_278_680}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b31/d332/3fd349dc3bf09f19815f4996ccce5ab4"
                }}
                style={styles.ImageBackground_278_681}
              />
            </View>
            <View style={styles.View_278_682}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/fb78/9ff840f8389bfe3c5498a82a3ad5a3ef"
                }}
                style={styles.ImageBackground_278_683}
              />
              <View style={styles.View_278_684}>
                <View style={styles.View_278_685} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_686}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_278_687}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e45/220b/881c97ce927b849d0ce6d3fbc32680cb"
            }}
            style={styles.ImageBackground_278_688}
          />
          <View style={styles.View_278_691}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582f/cffd/e90cf50461a78b9ca0aeede46973e2b3"
              }}
              style={styles.ImageBackground_278_692}
            />
          </View>
        </View>
        <View style={styles.View_278_696}>
          <View style={styles.View_278_697}>
            <View style={styles.View_278_699}>
              <Text style={styles.Text_278_699}>Story 1</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_700}
            />
            <View style={styles.View_278_701}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_702}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/3e36/f6870eb42a9bf0be3240c7d13e6a56a7"
                }}
                style={styles.ImageBackground_278_703}
              />
            </View>
          </View>
          <View style={styles.View_278_704}>
            <View style={styles.View_278_706}>
              <Text style={styles.Text_278_706}>Story 2</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_707}
            />
            <View style={styles.View_278_708}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_709}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4a/d9f3/d0eeec9a22ee7f2836cc5e429b927800"
                }}
                style={styles.ImageBackground_278_710}
              />
            </View>
          </View>
          <View style={styles.View_278_711}>
            <View style={styles.View_278_713}>
              <Text style={styles.Text_278_713}>Story 3</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_714}
            />
            <View style={styles.View_278_715}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_716}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d4/a961/f70db3c03fac5bd1a241b372ea0c047d"
                }}
                style={styles.ImageBackground_278_717}
              />
            </View>
          </View>
          <View style={styles.View_278_718}>
            <View style={styles.View_278_720}>
              <Text style={styles.Text_278_720}>Story 4</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_721}
            />
            <View style={styles.View_278_722}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_723}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c691/31ab/cdd131dd977eb065464885dc3aab53e9"
                }}
                style={styles.ImageBackground_278_1288}
              />
            </View>
          </View>
          <View style={styles.View_278_725}>
            <View style={styles.View_278_727}>
              <Text style={styles.Text_278_727}>Story 5</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_728}
            />
            <View style={styles.View_278_729}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_730}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/564b/fec2/70f9ae4d93767dbe5cd100cacda38cfa"
                }}
                style={styles.ImageBackground_278_1289}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_732}>
          <View style={styles.View_278_733}>
            <View style={styles.View_278_734}>
              <Text style={styles.Text_278_734}>Username</Text>
            </View>
            <View style={styles.View_278_735}>
              <Text style={styles.Text_278_735}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt #hashtag
              </Text>
            </View>
            <View style={styles.View_278_736}>
              <Text style={styles.Text_278_736}>Link goes here</Text>
            </View>
            <View style={styles.View_278_737}>
              <Text style={styles.Text_278_737}>
                Followed by username and username
              </Text>
            </View>
          </View>
          <View style={styles.View_278_738}>
            <View style={styles.View_278_739}>
              <View style={styles.View_278_740}>
                <Text style={styles.Text_278_740}>Button</Text>
              </View>
            </View>
            <View style={styles.View_278_741}>
              <View style={styles.View_278_742}>
                <Text style={styles.Text_278_742}>Follow</Text>
              </View>
            </View>
            <View style={styles.View_278_743}>
              <View style={styles.View_278_744}>
                <Text style={styles.Text_278_744}>Message</Text>
              </View>
            </View>
            <View style={styles.View_278_745}>
              <View style={styles.View_278_746}>
                <Text style={styles.Text_278_746}>Email</Text>
              </View>
            </View>
            <View style={styles.View_278_747}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6d/903f/8cd927efa55bd3623fc46448b823f03c"
                }}
                style={styles.ImageBackground_278_748}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_279_661}>
          <View style={styles.View_279_662}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f4/d3e8/6035d4c5950756e22d9c654f6a9f6a40"
              }}
              style={styles.ImageBackground_279_663}
            />
            <View style={styles.View_279_664}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f8e/deb0/a79f2111ee839d37bba8ed9e088afc3f"
                }}
                style={styles.ImageBackground_279_665}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fc/3b7b/98a2874679a82ef5f943b09c031dd682"
                }}
                style={styles.ImageBackground_279_666}
              />
            </View>
          </View>
          <View style={styles.View_279_667}>
            <Text style={styles.Text_279_667}>0,000</Text>
          </View>
          <View style={styles.View_279_668}>
            <Text style={styles.Text_279_668}>0,000</Text>
          </View>
          <View style={styles.View_279_669}>
            <Text style={styles.Text_279_669}>0,000</Text>
          </View>
          <View style={styles.View_279_670}>
            <Text style={styles.Text_279_670}>Posts</Text>
          </View>
          <View style={styles.View_279_671}>
            <Text style={styles.Text_279_671}>Followers</Text>
          </View>
          <View style={styles.View_279_672}>
            <Text style={styles.Text_279_672}>Following</Text>
          </View>
        </View>
        <View style={styles.View_278_762}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/413e/3aa06023371a2724121fd2ffcf3d6cd3"
            }}
            style={styles.ImageBackground_278_763}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f35/d549/905d7f57b0cb6371a16153a7f6493400"
            }}
            style={styles.ImageBackground_278_764}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
            }}
            style={styles.ImageBackground_278_766}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
            }}
            style={styles.ImageBackground_278_772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
            }}
            style={styles.ImageBackground_278_776}
          />
          <View style={styles.View_278_778}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/0f54/95b65a7db60497214c2bdf1e7289e8ca"
              }}
              style={styles.ImageBackground_278_779}
            />
            <View style={styles.View_278_780}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
                }}
                style={styles.ImageBackground_278_781}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
                }}
                style={styles.ImageBackground_278_782}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_1867}>
          <View style={styles.View_278_1868}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
              }}
              style={styles.ImageBackground_278_1869}
            />
          </View>
          <View style={styles.View_278_1877}>
            <Text style={styles.Text_278_1877}>username</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0546/e0e8/384daac273b4b58499f4355d157e5bad"
            }}
            style={styles.ImageBackground_278_1878}
          />
        </View>
        <View style={styles.View_278_783}>
          <View style={styles.View_278_784}>
            <View style={styles.View_278_785} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_278_786}
            />
            <View style={styles.View_278_787} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
            }}
            style={styles.ImageBackground_278_788}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_278_792}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b350/590a/12424c812875b64bdc194585840c74dc"
            }}
            style={styles.ImageBackground_278_797}
          />
        </View>
        <View style={styles.View_278_812} />
      </View>
      <View style={styles.View_278_1495}>
        <View style={styles.View_278_1496}>
          <View style={styles.View_278_1497}>
            <View style={styles.View_278_1498}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f9/fb04/d1daf6b0a1620b2db60f5622b1720aa7"
                }}
                style={styles.ImageBackground_278_1499}
              />
              <View style={styles.View_278_1500}>
                <View style={styles.View_278_1501} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_1502}
                />
              </View>
            </View>
            <View style={styles.View_278_1503}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/392a/536f/10b102cc70c747b12ed54a76bd0fb5b3"
                }}
                style={styles.ImageBackground_278_1504}
              />
            </View>
            <View style={styles.View_278_1505}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3b/6527/b0f5b093aacbdd8993b309c086540bbe"
                }}
                style={styles.ImageBackground_278_1506}
              />
            </View>
          </View>
          <View style={styles.View_278_1507}>
            <View style={styles.View_278_1508}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a0/a780/eb9cc07d5a70ff90b743522e4b015216"
                }}
                style={styles.ImageBackground_278_1509}
              />
            </View>
            <View style={styles.View_278_1510}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe6/3262/ea715981a9a8b44dcc53495257afcc5c"
                }}
                style={styles.ImageBackground_278_1511}
              />
            </View>
            <View style={styles.View_278_1512}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edde/36ac/5dd9349d502ee2ca349afb0cc282c380"
                }}
                style={styles.ImageBackground_278_1513}
              />
            </View>
          </View>
          <View style={styles.View_278_1514}>
            <View style={styles.View_278_1515}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fb/5bf5/02bef3093d69233f62d093c98583f97e"
                }}
                style={styles.ImageBackground_278_1516}
              />
            </View>
            <View style={styles.View_278_1517}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f859/05f2/6d375b063975e2da4ce2dd6d89fea784"
                }}
                style={styles.ImageBackground_278_1518}
              />
              <View style={styles.View_278_1519}>
                <View style={styles.View_278_1520} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_1521}
                />
              </View>
            </View>
            <View style={styles.View_278_1522}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe3/bde0/77fe7e11fb4352a511259af12b6ec37f"
                }}
                style={styles.ImageBackground_278_1523}
              />
            </View>
          </View>
          <View style={styles.View_278_1524}>
            <View style={styles.View_278_1525}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8468/7066/24fab43d1206360d5da10368e07a6574"
                }}
                style={styles.ImageBackground_278_1526}
              />
              <View style={styles.View_278_1527}>
                <View style={styles.View_278_1528} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_1529}
                />
              </View>
            </View>
            <View style={styles.View_278_1530}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f75/4789/c7f894efe921f3140246312c9e8c4e05"
                }}
                style={styles.ImageBackground_278_1531}
              />
            </View>
            <View style={styles.View_278_1532}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e6/027c/f71daefac8525a6c022cb6cd27f7af89"
                }}
                style={styles.ImageBackground_278_1533}
              />
            </View>
          </View>
          <View style={styles.View_278_1534}>
            <View style={styles.View_278_1535}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a2/c190/93140c329095d000b60dd11e3e9ea392"
                }}
                style={styles.ImageBackground_278_1536}
              />
            </View>
            <View style={styles.View_278_1537}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b31/d332/3fd349dc3bf09f19815f4996ccce5ab4"
                }}
                style={styles.ImageBackground_278_1538}
              />
            </View>
            <View style={styles.View_278_1539}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/fb78/9ff840f8389bfe3c5498a82a3ad5a3ef"
                }}
                style={styles.ImageBackground_278_1540}
              />
              <View style={styles.View_278_1541}>
                <View style={styles.View_278_1542} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_1543}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_278_1544}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e45/220b/881c97ce927b849d0ce6d3fbc32680cb"
            }}
            style={styles.ImageBackground_278_1545}
          />
          <View style={styles.View_278_1548}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582f/cffd/e90cf50461a78b9ca0aeede46973e2b3"
              }}
              style={styles.ImageBackground_278_1549}
            />
          </View>
        </View>
        <View style={styles.View_278_1553}>
          <View style={styles.View_278_1554}>
            <View style={styles.View_278_1555}>
              <Text style={styles.Text_278_1555}>Story 1</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1556}
            />
            <View style={styles.View_278_1557}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1558}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/3e36/f6870eb42a9bf0be3240c7d13e6a56a7"
                }}
                style={styles.ImageBackground_278_1559}
              />
            </View>
          </View>
          <View style={styles.View_278_1560}>
            <View style={styles.View_278_1561}>
              <Text style={styles.Text_278_1561}>Story 2</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1562}
            />
            <View style={styles.View_278_1563}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1564}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4a/d9f3/d0eeec9a22ee7f2836cc5e429b927800"
                }}
                style={styles.ImageBackground_278_1565}
              />
            </View>
          </View>
          <View style={styles.View_278_1566}>
            <View style={styles.View_278_1567}>
              <Text style={styles.Text_278_1567}>Story 3</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1568}
            />
            <View style={styles.View_278_1569}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1570}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d4/a961/f70db3c03fac5bd1a241b372ea0c047d"
                }}
                style={styles.ImageBackground_278_1571}
              />
            </View>
          </View>
          <View style={styles.View_278_1572}>
            <View style={styles.View_278_1573}>
              <Text style={styles.Text_278_1573}>Story 4</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1574}
            />
            <View style={styles.View_278_1575}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1576}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c691/31ab/cdd131dd977eb065464885dc3aab53e9"
                }}
                style={styles.ImageBackground_278_1577}
              />
            </View>
          </View>
          <View style={styles.View_278_1578}>
            <View style={styles.View_278_1579}>
              <Text style={styles.Text_278_1579}>New</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1580}
            />
            <View style={styles.View_278_1581}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1582}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/428b/7507/5ccd11b36b1059608e9bf455a4a268d6"
                }}
                style={styles.ImageBackground_278_1666}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_1584}>
          <View style={styles.View_278_1585}>
            <View style={styles.View_278_1586}>
              <Text style={styles.Text_278_1586}>Username</Text>
            </View>
            <View style={styles.View_278_1587}>
              <Text style={styles.Text_278_1587}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt #hashtag
              </Text>
            </View>
            <View style={styles.View_278_1588}>
              <Text style={styles.Text_278_1588}>Link goes here</Text>
            </View>
          </View>
          <View style={styles.View_278_1591}>
            <View style={styles.View_278_1592}>
              <Text style={styles.Text_278_1592}>Edit Profile</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_279_685}>
          <View style={styles.View_279_686}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f4/d3e8/6035d4c5950756e22d9c654f6a9f6a40"
              }}
              style={styles.ImageBackground_279_687}
            />
            <View style={styles.View_279_688}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f8e/deb0/a79f2111ee839d37bba8ed9e088afc3f"
                }}
                style={styles.ImageBackground_279_689}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fc/3b7b/98a2874679a82ef5f943b09c031dd682"
                }}
                style={styles.ImageBackground_279_690}
              />
            </View>
          </View>
          <View style={styles.View_279_691}>
            <Text style={styles.Text_279_691}>0,000</Text>
          </View>
          <View style={styles.View_279_692}>
            <Text style={styles.Text_279_692}>0,000</Text>
          </View>
          <View style={styles.View_279_693}>
            <Text style={styles.Text_279_693}>0,000</Text>
          </View>
          <View style={styles.View_279_694}>
            <Text style={styles.Text_279_694}>Posts</Text>
          </View>
          <View style={styles.View_279_695}>
            <Text style={styles.Text_279_695}>Followers</Text>
          </View>
          <View style={styles.View_279_696}>
            <Text style={styles.Text_279_696}>Following</Text>
          </View>
        </View>
        <View style={styles.View_279_563}>
          <View style={styles.View_279_564}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79e3/c1aa/dde52f3ed4d35a98ef2e760067ac20e6"
              }}
              style={styles.ImageBackground_279_565}
            />
          </View>
          <View style={styles.View_279_569}>
            <View style={styles.View_279_570} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
              }}
              style={styles.ImageBackground_279_571}
            />
          </View>
          <View style={styles.View_279_574}>
            <View style={styles.View_279_575}>
              <Text style={styles.Text_279_575}>username</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/607e/9471/a1fb9afcb528c5e35a52d30bac18af2b"
              }}
              style={styles.ImageBackground_279_576}
            />
          </View>
        </View>
        <View style={styles.View_278_1614}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/413e/3aa06023371a2724121fd2ffcf3d6cd3"
            }}
            style={styles.ImageBackground_278_1615}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4094/b947/465fc9dffd3578b469db874e48603d73"
            }}
            style={styles.ImageBackground_278_1616}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
            }}
            style={styles.ImageBackground_278_1618}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
            }}
            style={styles.ImageBackground_278_1624}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
            }}
            style={styles.ImageBackground_278_1628}
          />
          <View style={styles.View_278_1630}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/0f54/95b65a7db60497214c2bdf1e7289e8ca"
              }}
              style={styles.ImageBackground_278_1631}
            />
            <View style={styles.View_278_1632}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
                }}
                style={styles.ImageBackground_278_1633}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
                }}
                style={styles.ImageBackground_278_1634}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_1635}>
          <View style={styles.View_278_1636}>
            <View style={styles.View_278_1637} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_278_1638}
            />
            <View style={styles.View_278_1639} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
            }}
            style={styles.ImageBackground_278_1640}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_278_1644}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b350/590a/12424c812875b64bdc194585840c74dc"
            }}
            style={styles.ImageBackground_278_1649}
          />
        </View>
        <View style={styles.View_278_1664} />
      </View>
      <View style={styles.View_278_1321}>
        <View style={styles.View_278_1322}>
          <View style={styles.View_278_1323}>
            <View style={styles.View_278_1324}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58f9/fb04/d1daf6b0a1620b2db60f5622b1720aa7"
                }}
                style={styles.ImageBackground_278_1325}
              />
              <View style={styles.View_278_1326}>
                <View style={styles.View_278_1327} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_1328}
                />
              </View>
            </View>
            <View style={styles.View_278_1329}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/392a/536f/10b102cc70c747b12ed54a76bd0fb5b3"
                }}
                style={styles.ImageBackground_278_1330}
              />
            </View>
            <View style={styles.View_278_1331}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c3b/6527/b0f5b093aacbdd8993b309c086540bbe"
                }}
                style={styles.ImageBackground_278_1332}
              />
            </View>
          </View>
          <View style={styles.View_278_1333}>
            <View style={styles.View_278_1334}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a0/a780/eb9cc07d5a70ff90b743522e4b015216"
                }}
                style={styles.ImageBackground_278_1335}
              />
            </View>
            <View style={styles.View_278_1336}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe6/3262/ea715981a9a8b44dcc53495257afcc5c"
                }}
                style={styles.ImageBackground_278_1337}
              />
            </View>
            <View style={styles.View_278_1338}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edde/36ac/5dd9349d502ee2ca349afb0cc282c380"
                }}
                style={styles.ImageBackground_278_1339}
              />
            </View>
          </View>
          <View style={styles.View_278_1340}>
            <View style={styles.View_278_1341}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94fb/5bf5/02bef3093d69233f62d093c98583f97e"
                }}
                style={styles.ImageBackground_278_1342}
              />
            </View>
            <View style={styles.View_278_1343}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f859/05f2/6d375b063975e2da4ce2dd6d89fea784"
                }}
                style={styles.ImageBackground_278_1344}
              />
              <View style={styles.View_278_1345}>
                <View style={styles.View_278_1346} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_1347}
                />
              </View>
            </View>
            <View style={styles.View_278_1348}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fe3/bde0/77fe7e11fb4352a511259af12b6ec37f"
                }}
                style={styles.ImageBackground_278_1349}
              />
            </View>
          </View>
          <View style={styles.View_278_1350}>
            <View style={styles.View_278_1351}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8468/7066/24fab43d1206360d5da10368e07a6574"
                }}
                style={styles.ImageBackground_278_1352}
              />
              <View style={styles.View_278_1353}>
                <View style={styles.View_278_1354} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_1355}
                />
              </View>
            </View>
            <View style={styles.View_278_1356}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e5/c7d5/9d66f1812f0c4fb89ec89aca2a2191d3"
                }}
                style={styles.ImageBackground_278_1357}
              />
            </View>
            <View style={styles.View_278_1358}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e6/027c/f71daefac8525a6c022cb6cd27f7af89"
                }}
                style={styles.ImageBackground_278_1359}
              />
            </View>
          </View>
          <View style={styles.View_278_1360}>
            <View style={styles.View_278_1361}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a2/c190/93140c329095d000b60dd11e3e9ea392"
                }}
                style={styles.ImageBackground_278_1362}
              />
            </View>
            <View style={styles.View_278_1363}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b31/d332/3fd349dc3bf09f19815f4996ccce5ab4"
                }}
                style={styles.ImageBackground_278_1364}
              />
            </View>
            <View style={styles.View_278_1365}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/386c/fb78/9ff840f8389bfe3c5498a82a3ad5a3ef"
                }}
                style={styles.ImageBackground_278_1366}
              />
              <View style={styles.View_278_1367}>
                <View style={styles.View_278_1368} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6902/bc1d/af495b423937755d7a39ad93112434d2"
                  }}
                  style={styles.ImageBackground_278_1369}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_278_1379}>
          <View style={styles.View_278_1380}>
            <View style={styles.View_278_1381}>
              <Text style={styles.Text_278_1381}>Story 1</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1382}
            />
            <View style={styles.View_278_1383}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1384}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a3c/3e36/f6870eb42a9bf0be3240c7d13e6a56a7"
                }}
                style={styles.ImageBackground_278_1385}
              />
            </View>
          </View>
          <View style={styles.View_278_1386}>
            <View style={styles.View_278_1387}>
              <Text style={styles.Text_278_1387}>Story 2</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1388}
            />
            <View style={styles.View_278_1389}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1390}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4a/d9f3/d0eeec9a22ee7f2836cc5e429b927800"
                }}
                style={styles.ImageBackground_278_1391}
              />
            </View>
          </View>
          <View style={styles.View_278_1392}>
            <View style={styles.View_278_1393}>
              <Text style={styles.Text_278_1393}>Story 3</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1394}
            />
            <View style={styles.View_278_1395}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1396}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d4/a961/f70db3c03fac5bd1a241b372ea0c047d"
                }}
                style={styles.ImageBackground_278_1397}
              />
            </View>
          </View>
          <View style={styles.View_278_1398}>
            <View style={styles.View_278_1399}>
              <Text style={styles.Text_278_1399}>Story 4</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1400}
            />
            <View style={styles.View_278_1401}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1402}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c691/31ab/cdd131dd977eb065464885dc3aab53e9"
                }}
                style={styles.ImageBackground_278_1403}
              />
            </View>
          </View>
          <View style={styles.View_278_1404}>
            <View style={styles.View_278_1405}>
              <Text style={styles.Text_278_1405}>Story 5</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc4c/4362/10ee10e6d84f39cfba4a9f275ee793c2"
              }}
              style={styles.ImageBackground_278_1406}
            />
            <View style={styles.View_278_1407}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b67a/eb68/4fbaa341e3054027ebab247ecfecda3c"
                }}
                style={styles.ImageBackground_278_1408}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/564b/fec2/70f9ae4d93767dbe5cd100cacda38cfa"
                }}
                style={styles.ImageBackground_278_1409}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_1410}>
          <View style={styles.View_278_1411}>
            <View style={styles.View_278_1412}>
              <Text style={styles.Text_278_1412}>Username</Text>
            </View>
            <View style={styles.View_278_1413}>
              <Text style={styles.Text_278_1413}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt #hashtag
              </Text>
            </View>
            <View style={styles.View_278_1414}>
              <Text style={styles.Text_278_1414}>Link goes here</Text>
            </View>
            <View style={styles.View_278_1415}>
              <Text style={styles.Text_278_1415}>
                Followed by username and username
              </Text>
            </View>
          </View>
          <View style={styles.View_278_1416}>
            <View style={styles.View_278_1421}>
              <View style={styles.View_278_1422}>
                <Text style={styles.Text_278_1422}>Message</Text>
              </View>
            </View>
            <View style={styles.View_278_1491}>
              <View style={styles.View_278_1492}>
                <Text style={styles.Text_278_1492}>Following</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6d/903f/8cd927efa55bd3623fc46448b823f03c"
                }}
                style={styles.ImageBackground_278_1493}
              />
            </View>
            <View style={styles.View_278_1423}>
              <View style={styles.View_278_1424}>
                <Text style={styles.Text_278_1424}>Email</Text>
              </View>
            </View>
            <View style={styles.View_278_1425}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6d/903f/8cd927efa55bd3623fc46448b823f03c"
                }}
                style={styles.ImageBackground_278_1426}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_1819}>
          <View style={styles.View_278_1820}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2010/7d2a/bd8ce15feaf2ae5758ba6f73669d0ccc"
              }}
              style={styles.ImageBackground_278_1821}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1152/9052/39bd981d4686a6df7ae0be5bd5b907b0"
              }}
              style={styles.ImageBackground_278_1822}
            />
          </View>
          <View style={styles.View_278_1823}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9291/5109/a09c61a2738673fc0964a89609c3ed74"
              }}
              style={styles.ImageBackground_278_1824}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f3/c692/20b01dc94df60a4f98db1d04c3e03ad5"
              }}
              style={styles.ImageBackground_278_1825}
            />
          </View>
          <View style={styles.View_278_1831}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9291/5109/a09c61a2738673fc0964a89609c3ed74"
              }}
              style={styles.ImageBackground_278_1832}
            />
            <View style={styles.View_278_1833}>
              <View style={styles.View_278_1834} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4211/de12/8d604adb1f7060ebe294d666bb20745e"
                }}
                style={styles.ImageBackground_278_1835}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6188/f1df/63f9d6f2329b38e6c9cd1c43b320f2d4"
                }}
                style={styles.ImageBackground_278_1836}
              />
            </View>
          </View>
          <View style={styles.View_278_1837}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/582f/cffd/e90cf50461a78b9ca0aeede46973e2b3"
              }}
              style={styles.ImageBackground_278_1838}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9291/5109/a09c61a2738673fc0964a89609c3ed74"
              }}
              style={styles.ImageBackground_278_1842}
            />
          </View>
        </View>
        <View style={styles.View_279_673}>
          <View style={styles.View_279_674}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f4/d3e8/6035d4c5950756e22d9c654f6a9f6a40"
              }}
              style={styles.ImageBackground_279_675}
            />
            <View style={styles.View_279_676}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f8e/deb0/a79f2111ee839d37bba8ed9e088afc3f"
                }}
                style={styles.ImageBackground_279_677}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89fc/3b7b/98a2874679a82ef5f943b09c031dd682"
                }}
                style={styles.ImageBackground_279_678}
              />
            </View>
          </View>
          <View style={styles.View_279_679}>
            <Text style={styles.Text_279_679}>0,000</Text>
          </View>
          <View style={styles.View_279_680}>
            <Text style={styles.Text_279_680}>0,000</Text>
          </View>
          <View style={styles.View_279_681}>
            <Text style={styles.Text_279_681}>0,000</Text>
          </View>
          <View style={styles.View_279_682}>
            <Text style={styles.Text_279_682}>Posts</Text>
          </View>
          <View style={styles.View_279_683}>
            <Text style={styles.Text_279_683}>Followers</Text>
          </View>
          <View style={styles.View_279_684}>
            <Text style={styles.Text_279_684}>Following</Text>
          </View>
        </View>
        <View style={styles.View_278_1440}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05b9/413e/3aa06023371a2724121fd2ffcf3d6cd3"
            }}
            style={styles.ImageBackground_278_1441}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfd6/d82e/27a3170f6dc3f21770c73b6290ce0fee"
            }}
            style={styles.ImageBackground_278_1442}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
            }}
            style={styles.ImageBackground_278_1444}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
            }}
            style={styles.ImageBackground_278_1450}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
            }}
            style={styles.ImageBackground_278_1454}
          />
          <View style={styles.View_278_1456}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/408f/0f54/95b65a7db60497214c2bdf1e7289e8ca"
              }}
              style={styles.ImageBackground_278_1457}
            />
            <View style={styles.View_278_1458}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
                }}
                style={styles.ImageBackground_278_1459}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
                }}
                style={styles.ImageBackground_278_1460}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_1461}>
          <View style={styles.View_278_1462}>
            <View style={styles.View_278_1463} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_278_1464}
            />
            <View style={styles.View_278_1465} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
            }}
            style={styles.ImageBackground_278_1466}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_278_1470}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b350/590a/12424c812875b64bdc194585840c74dc"
            }}
            style={styles.ImageBackground_278_1475}
          />
          <View style={styles.View_278_1909}>
            <View style={styles.View_278_1910}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
                }}
                style={styles.ImageBackground_278_1911}
              />
            </View>
            <View style={styles.View_278_1915}>
              <Text style={styles.Text_278_1915}>username</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0546/e0e8/384daac273b4b58499f4355d157e5bad"
              }}
              style={styles.ImageBackground_278_1916}
            />
            <View style={styles.View_278_1918}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb70/af7a/e096e6a588fb6195c352d34525cc4d2e"
                }}
                style={styles.ImageBackground_278_1919}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5d/e42c/7085ce6f0afbf2ffc407a55fff482ba8"
                }}
                style={styles.ImageBackground_278_1922}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94c/ae31/3546677126368da2335b65446c9c4e6a"
                }}
                style={styles.ImageBackground_278_1923}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_278_1490} />
      </View>
      <View style={styles.View_303_183}>
        <View style={styles.View_303_225}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c41e/2971/29f145b20c579baa951c8cfd65d31a80"
            }}
            style={styles.ImageBackground_303_571}
          />
        </View>
        <View style={styles.View_303_350}>
          <View style={styles.View_303_358}>
            <Text style={styles.Text_303_358}>CTA copy here</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ca8/2bb2/211c51b686e14a72753088e28c124321"
            }}
            style={styles.ImageBackground_303_360}
          />
        </View>
        <View style={styles.View_303_193}>
          <View style={styles.View_303_194}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3831/252e/a5977f756b377007a3ea9456f5725b3c"
              }}
              style={styles.ImageBackground_303_195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbf8/9399/384e18d8f3e74f94d58c79544e7ea61f"
              }}
              style={styles.ImageBackground_303_197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d4b/fa1d/8886c2e007b51f472490a4594c3b0c52"
              }}
              style={styles.ImageBackground_303_199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c31d/c1bf/ad4bc25bae2038c5aa7601805a6a381f"
              }}
              style={styles.ImageBackground_303_201}
            />
            <View style={styles.View_303_203}>
              <Text style={styles.Text_303_203}>100 Likes</Text>
            </View>
            <View style={styles.View_303_205}>
              <View style={styles.View_303_206}>
                <Text style={styles.Text_303_206}>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt... more{" "}
                </Text>
              </View>
              <View style={styles.View_303_207}>
                <View style={styles.View_303_208}>
                  <Text style={styles.Text_303_208}>Add comment...</Text>
                </View>
                <View style={styles.View_303_209}>
                  <Text style={styles.Text_303_209}>😍</Text>
                </View>
                <View style={styles.View_303_210}>
                  <Text style={styles.Text_303_210}>😭</Text>
                </View>
                <View style={styles.View_303_211}>
                  <Text style={styles.Text_303_211}>10 minutes ago</Text>
                </View>
                <View style={styles.View_303_212}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dfd/8a72/1f7f67ec588656b6ead848df9eff5354"
                    }}
                    style={styles.ImageBackground_303_213}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50ba/71be/e39de56454a702814c851622d2c507c0"
                    }}
                    style={styles.ImageBackground_303_214}
                  />
                </View>
                <View style={styles.View_303_215}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17e6/1632/7082d5d0d4b2cc9ab38901345228e2ac"
                    }}
                    style={styles.ImageBackground_303_216}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b39b/f79d/b46be8f9f64bfc037f8a7b5cc0c3ee7b"
                    }}
                    style={styles.ImageBackground_303_217}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_303_204}>
              <Text style={styles.Text_303_204}>userna</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_303_231}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e2b/cceb/f891ac9e685d4a9c7e1e2198b61684de"
            }}
            style={styles.ImageBackground_303_232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4119/f4d3/86797f1ea228640a30dab0332eea0cb0"
            }}
            style={styles.ImageBackground_303_233}
          />
          <View style={styles.View_303_235}>
            <View style={styles.View_303_236} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339c/d14a/8f1a16b2e81c133c7bd2997aeaaf693d"
              }}
              style={styles.ImageBackground_303_237}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b3/a150/d513ac51033382a17165d64a64320d86"
            }}
            style={styles.ImageBackground_303_240}
          />
        </View>
        <View style={styles.View_303_328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed8a/ad17/03cf3fc166a5bc15641f26989f9dcdcf"
            }}
            style={styles.ImageBackground_303_329}
          />
          <View style={styles.View_303_333}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/898b/ec5a/efd4cee444808e926a7d4d3a21e47ab7"
              }}
              style={styles.ImageBackground_303_334}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b78/d1a4/fca341195ca0d2f9d9f3f335ea715914"
              }}
              style={styles.ImageBackground_303_339}
            />
          </View>
          <View style={styles.View_303_336}>
            <Text style={styles.Text_303_336}>Waggles</Text>
          </View>
          <View style={styles.View_303_337}>
            <Text style={styles.Text_303_337}>Sponsored</Text>
          </View>
        </View>
        <View style={styles.View_303_243}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
            }}
            style={styles.ImageBackground_303_244}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e9a/d69a/ebe65787e96dde22c553293435a24118"
            }}
            style={styles.ImageBackground_303_245}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7082/63eb/84b7e74d5bb2a42c41a21fa42d913bd6"
            }}
            style={styles.ImageBackground_303_247}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f0/bcb4/ecf8c6e91d673a9b86770ebdd3a0c2df"
            }}
            style={styles.ImageBackground_303_253}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb8e/5a4e/f72aac15ba6f77df079d2a86287bf8d9"
            }}
            style={styles.ImageBackground_303_257}
          />
          <View style={styles.View_303_259}>
            <View style={styles.View_303_261}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cfe/0013/295987d46ad9fe8458041d478a18c9a0"
                }}
                style={styles.ImageBackground_303_262}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/6845/2d27784e7d115377306e1204ce0242a6"
                }}
                style={styles.ImageBackground_303_263}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_303_264}>
          <View style={styles.View_303_265}>
            <View style={styles.View_303_266} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_303_267}
            />
            <View style={styles.View_303_268} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ae/1e0b/4731e12bfefcb531c8633d285348e403"
            }}
            style={styles.ImageBackground_303_269}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_303_273}
          />
          <View style={styles.View_303_278}>
            <View style={styles.View_303_279}>
              <Text style={styles.Text_303_279}>9:41</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_303_280}>
          <View style={styles.View_303_281} />
          <View style={styles.View_303_282}>
            <View style={styles.View_303_283}>
              <View style={styles.View_303_284}>
                <View style={styles.View_303_285}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5251/1056/d29bb0f107502bff1eaaac475a3d4a5c"
                    }}
                    style={styles.ImageBackground_303_286}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4757/b1e5/be04712272a7d5f00bf75b71a8a8ec13"
                    }}
                    style={styles.ImageBackground_303_291}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fd2/167f/4cc94a021c874cf493abc7cf91459e78"
                  }}
                  style={styles.ImageBackground_303_292}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db05/bb2e/7ce47601b7ba2e44646b579f679c830b"
                  }}
                  style={styles.ImageBackground_303_293}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_294}
            />
            <View style={styles.View_303_295}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_296}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c5b/a199/b847e9cf8d46289592eb6d13dfaae474"
                }}
                style={styles.ImageBackground_303_297}
              />
            </View>
            <View style={styles.View_303_298}>
              <Text style={styles.Text_303_298}>Your Story</Text>
            </View>
          </View>
          <View style={styles.View_303_299}>
            <View style={styles.View_303_300}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_301}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91d/3e43/10e0df45e92789b5830af2e9aa0e67d2"
                }}
                style={styles.ImageBackground_303_302}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_303}
            />
            <View style={styles.View_303_304}>
              <Text style={styles.Text_303_304}>HypeSun_98</Text>
            </View>
          </View>
          <View style={styles.View_303_305}>
            <View style={styles.View_303_306}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_307}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d88c/5ed0/e5566df9c44e78658e50b9310b0b69cf"
                }}
                style={styles.ImageBackground_303_308}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_309}
            />
            <View style={styles.View_303_310}>
              <Text style={styles.Text_303_310}>KarolBary</Text>
            </View>
          </View>
          <View style={styles.View_303_311}>
            <View style={styles.View_303_312}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_313}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa8/74fc/29cbfbdab6a89278f46cab83a1f2670f"
                }}
                style={styles.ImageBackground_303_314}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_315}
            />
            <View style={styles.View_303_316}>
              <Text style={styles.Text_303_316}>Waggles</Text>
            </View>
          </View>
          <View style={styles.View_303_317}>
            <View style={styles.View_303_318}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b5/1f87/d38b4ed421bec90d4d38998fc8b99b86"
                }}
                style={styles.ImageBackground_303_319}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a0d/517f/7e62a3549997e91c21d572306667b288"
                }}
                style={styles.ImageBackground_303_320}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768b/ee86/4eece834b1cbaec9d2587b215cc304bc"
              }}
              style={styles.ImageBackground_303_321}
            />
            <View style={styles.View_303_322}>
              <Text style={styles.Text_303_322}>Cherine_001</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07c0/fc3f/f98b87a4293b39066b80ad69301f3c5a"
            }}
            style={styles.ImageBackground_303_323}
          />
        </View>
        <View style={styles.View_303_324} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(235, 235, 235, 1)" },
  View_2: { height: hp("410.92896174863387%") },
  View_279_698: {
    width: wp("8.641975308641975%"),
    minWidth: wp("8.641975308641975%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.541757443718228%"),
    top: hp("3.415300546448088%"),
    justifyContent: "flex-start"
  },
  Text_279_698: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_761: {
    width: wp("6.535947712418301%"),
    minWidth: wp("6.535947712418301%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.664488017429194%"),
    top: hp("14.071038251366119%"),
    justifyContent: "flex-start"
  },
  Text_279_761: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "uppercase"
  },
  View_303_999: {
    width: wp("12.127814088598402%"),
    minWidth: wp("12.127814088598402%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.664488017429194%"),
    top: hp("18.71584699453552%"),
    justifyContent: "flex-start"
  },
  Text_303_999: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_303_1004: {
    width: wp("11.76470588235294%"),
    minWidth: wp("11.76470588235294%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.664488017429194%"),
    top: hp("149.45355191256832%"),
    justifyContent: "flex-start"
  },
  Text_303_1004: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_303_1002: {
    width: wp("14.088598402323893%"),
    minWidth: wp("14.088598402323893%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.38344226579521%"),
    top: hp("18.71584699453552%"),
    justifyContent: "flex-start"
  },
  Text_303_1002: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_303_1005: {
    width: wp("12.273057371096586%"),
    minWidth: wp("12.273057371096586%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.38344226579521%"),
    top: hp("149.45355191256832%"),
    justifyContent: "flex-start"
  },
  Text_303_1005: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_303_1003: {
    width: wp("15.758896151053015%"),
    minWidth: wp("15.758896151053015%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.3202614379085%"),
    top: hp("18.71584699453552%"),
    justifyContent: "flex-start"
  },
  Text_303_1003: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_303_1006: {
    width: wp("18.445896877269426%"),
    minWidth: wp("18.445896877269426%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.3202614379085%"),
    top: hp("149.45355191256832%"),
    justifyContent: "flex-start"
  },
  Text_303_1006: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_303_1008: {
    width: wp("12.05519244734931%"),
    minWidth: wp("12.05519244734931%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.519244734931009%"),
    top: hp("280.0546448087432%"),
    justifyContent: "flex-start"
  },
  Text_303_1008: {
    color: "rgba(119, 119, 119, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_279_769: {
    width: wp("9.803921568627452%"),
    minWidth: wp("9.803921568627452%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.664488017429194%"),
    top: hp("145.08196721311475%"),
    justifyContent: "flex-start"
  },
  Text_279_769: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "uppercase"
  },
  View_303_33: {
    width: wp("3.848946986201888%"),
    minWidth: wp("3.848946986201888%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.519244734931009%"),
    top: hp("275.6830601092896%"),
    justifyContent: "flex-start"
  },
  Text_303_33: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.4000000000000001,
    textTransform: "uppercase"
  },
  View_278_391: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.519244734931009%"),
    top: hp("155.60109289617486%"),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden"
  },
  View_278_392: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_393: {
    width: wp("1.016702977487291%"),
    minWidth: wp("1.016702977487291%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.18517100127088%"),
    top: hp("3.142076502732266%")
  },
  View_278_944: {
    width: wp("2.178649237472767%"),
    minWidth: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5809731299927385%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_945: {
    width: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_946: {
    width: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_398: {
    width: wp("2.904865649963689%"),
    minWidth: wp("2.904865649963689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4132171387073367%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_278_398: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_399: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82.92349726775959%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_400: {
    width: wp("25.70806100217865%"),
    minWidth: wp("25.70806100217865%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949891069%"),
    top: hp("1.229508196721298%")
  },
  ImageBackground_278_401: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_403: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.301379811183733%"),
    top: hp("0%")
  },
  ImageBackground_278_405: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7596223674655045%"),
    top: hp("0%")
  },
  ImageBackground_278_407: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.965141612200437%"),
    top: hp("0%")
  },
  View_278_409: {
    width: wp("4.212055192447349%"),
    minWidth: wp("4.212055192447349%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_278_409: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_410: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    justifyContent: "flex-start"
  },
  Text_278_410: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_411: {
    width: wp("25.417574437182278%"),
    minWidth: wp("25.417574437182278%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_278_412: {
    width: wp("25.12708787218591%"),
    minWidth: wp("25.12708787218591%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818552%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_412: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_413: {
    width: wp("25.417574437182278%"),
    minWidth: wp("25.417574437182278%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%")
  },
  View_278_414: {
    width: wp("7.4800290486565%"),
    minWidth: wp("7.4800290486565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3965141612200442%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_278_414: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_415: {
    width: wp("1.888162672476398%"),
    minWidth: wp("1.888162672476398%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.11619462599855%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "center"
  },
  Text_278_415: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_416: {
    width: wp("1.888162672476398%"),
    minWidth: wp("1.888162672476398%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.076978939724036%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "center"
  },
  Text_278_416: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_417: {
    width: wp("7.4800290486565%"),
    minWidth: wp("7.4800290486565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_278_417: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_418: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_419: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_420: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_278_421: {
    width: wp("0.7262164124909223%"),
    minWidth: wp("0.7262164124909223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.691358024691358%"),
    top: hp("1.092896174863398%")
  },
  ImageBackground_278_422: {
    width: wp("0.7262164124909223%"),
    minWidth: wp("0.7262164124909223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_423: {
    width: wp("0.4357298474945534%"),
    minWidth: wp("0.4357298474945534%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818197%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_278_426: {
    width: wp("3.7182280873594378%"),
    minWidth: wp("3.7182280873594378%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.893246187363832%"),
    top: hp("1.0928961748633697%")
  },
  View_278_431: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_942: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_943: {
    width: wp("29.099095828652644%"),
    height: hp("82.10951174543204%"),
    top: hp("-30.69027759989757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9329863017074587%"),
    resizeMode: "cover"
  },
  View_278_433: {
    width: wp("2.6870007262164126%"),
    minWidth: wp("2.6870007262164126%"),
    height: hp("3.369763118973195%"),
    minHeight: hp("3.369763118973195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.45679012345679%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_278_434: {
    width: wp("2.6870007262164126%"),
    minWidth: wp("2.6870007262164126%"),
    height: hp("3.369763118973195%"),
    minHeight: hp("3.369763118973195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_435: {
    width: wp("1.1898176515976762%"),
    minWidth: wp("1.1898176515976762%"),
    height: hp("1.291410519125683%"),
    minHeight: hp("1.291410519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7552225172476419%"),
    top: hp("1.0912118713712289%")
  },
  View_279_780: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748618%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_279_781: {
    width: wp("7.552650689905592%"),
    height: hp("4.098360655737705%"),
    top: hp("0.40983606557378494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0893246187363843%")
  },
  ImageBackground_279_782: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.278140885984023%"),
    top: hp("0.8196721311475699%")
  },
  View_279_784: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.08278867102397%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_785: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21786492374727473%"),
    top: hp("0.4098360655737565%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_279_786: {
    width: wp("0.8714596949891068%"),
    minWidth: wp("0.8714596949891068%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.435729847494553%"),
    top: hp("0.819672131147513%")
  },
  ImageBackground_279_789: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.473493100944083%")
  },
  View_278_436: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.22950819672133%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_437: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_438: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2512708787218596%")
  },
  ImageBackground_278_440: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.217138707334785%")
  },
  ImageBackground_278_446: {
    width: wp("1.3129942817106226%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.663761801016705%")
  },
  ImageBackground_278_450: {
    width: wp("1.5264840773594233%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.77051561365287%")
  },
  View_278_452: {
    width: wp("1.5250544662309369%"),
    minWidth: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.892519970951348%"),
    top: hp("1.3661202185792263%")
  },
  View_278_454: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_455: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_456: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_457: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_458: {
    width: wp("1.7667419943328169%"),
    minWidth: wp("1.7667419943328169%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.425077195953612%"),
    top: hp("2.3679472709613947%")
  },
  View_278_459: {
    width: wp("1.597676107480029%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_278_460: {
    width: wp("0.09644429754674132%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009051880549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6702977487291228%")
  },
  View_278_461: {
    width: wp("1.3071895424836601%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818907%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_462: {
    width: wp("1.11352938539149%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.367580392973025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.948438634713142%")
  },
  ImageBackground_278_466: {
    width: wp("1.2345679012345678%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134734940659257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.350762527233115%")
  },
  View_278_471: {
    width: wp("3.9215686274509802%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5250544662309373%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_472: {
    width: wp("3.9215686274509802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_278_484: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775967%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_278_485: {
    width: wp("27.233115468409586%"),
    height: hp("14.344262295081966%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_486: {
    width: wp("4.925595285586023%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5809731299927385%")
  },
  View_278_487: {
    width: wp("3.3969618742588907%"),
    minWidth: wp("3.3969618742588907%"),
    height: hp("1.2100916742627086%"),
    minHeight: hp("1.2100916742627086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825187954594455%"),
    top: hp("3.9975859428363947%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_488: {
    width: wp("3.3969618742588907%"),
    height: hp("1.2100918045460853%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_489: {
    width: wp("2.1778303380452297%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2191334754206942%")
  },
  ImageBackground_278_490: {
    width: wp("2.1778303380452297%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_495: {
    width: wp("0.16613283621373173%"),
    height: hp("0.21868559832129972%"),
    top: hp("0.3598072489754145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2035341837653757%")
  },
  ImageBackground_278_496: {
    width: wp("0.5618902939164128%"),
    height: hp("1.1173729036675124%"),
    top: hp("0.046960382513674404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6046929563745351%")
  },
  ImageBackground_278_497: {
    width: wp("0.5810398248632316%"),
    height: hp("1.1588858776405209%"),
    top: hp("0.026198423625345413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_498: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_499: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29049099746958884%"),
    top: hp("0.5464480874317132%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_500: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_501: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_502: {
    width: wp("4.331126382754346%"),
    minWidth: wp("4.331126382754346%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35790005021105564%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_278_502: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_503: {
    width: wp("5.520062526240242%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.713707618464053%")
  },
  View_278_504: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5484640555011264%")
  },
  ImageBackground_278_505: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_506: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_278_507: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2579732658037184%"),
    top: hp("0%")
  },
  View_278_508: {
    width: wp("5.520062526240242%"),
    minWidth: wp("5.520062526240242%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_278_508: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_509: {
    width: wp("4.925594177467717%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.36238198983297%")
  },
  View_278_510: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29049099746958973%")
  },
  ImageBackground_278_511: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_512: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_278_513: {
    width: wp("4.925594177467717%"),
    minWidth: wp("4.925594177467717%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_514: {
    width: wp("4.076352254497719%"),
    minWidth: wp("4.076352254497719%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40002738381955893%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_278_514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_515: {
    width: wp("4.925595285586023%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.680464778503996%")
  },
  View_278_516: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29049099746958973%")
  },
  ImageBackground_278_517: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_518: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_278_519: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_520: {
    width: wp("3.7366577569522454%"),
    minWidth: wp("3.7366577569522454%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6211036344152809%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_278_520: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_521: {
    width: wp("5.350213476775259%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.906547153004716%")
  },
  View_278_522: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45511526912559574%")
  },
  ImageBackground_278_523: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_524: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_278_525: {
    width: wp("4.925597501822633%"),
    minWidth: wp("4.925597501822633%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1646242716559989%"),
    top: hp("0%")
  },
  View_278_526: {
    width: wp("5.350213476775259%"),
    minWidth: wp("5.350213476775259%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_278_526: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_527: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("14.344262295081961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_528: {
    width: wp("9.731299927378359%"),
    minWidth: wp("9.731299927378359%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.714596949891067%"),
    top: hp("109.42622950819674%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_303_34: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.38344226579521%"),
    top: hp("155.7377049180328%"),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden"
  },
  View_303_35: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_303_36: {
    width: wp("1.016702977487291%"),
    minWidth: wp("1.016702977487291%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.185171001270874%"),
    top: hp("3.1420765027322375%")
  },
  View_303_40: {
    width: wp("2.178649237472767%"),
    minWidth: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.580973129992735%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_303_41: {
    width: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_42: {
    width: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_43: {
    width: wp("2.904865649963689%"),
    minWidth: wp("2.904865649963689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4132171387073313%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_303_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_180: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("64.03688524590164%"),
    minHeight: hp("64.03688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.69398907103826%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_303_181: {
    width: wp("29.149519644012116%"),
    height: hp("82.29927104678961%"),
    top: hp("-9.154906559511602%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6894615466991212%"),
    resizeMode: "cover"
  },
  View_303_1619: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95.73087431693989%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_1620: {
    width: wp("25.70806100217865%"),
    minWidth: wp("25.70806100217865%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.871459694989106%"),
    top: hp("1.229508196721298%")
  },
  ImageBackground_303_1621: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_1623: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.301379811183729%"),
    top: hp("0%")
  },
  ImageBackground_303_1625: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7596223674655036%"),
    top: hp("0%")
  },
  ImageBackground_303_1627: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.965141612200433%"),
    top: hp("0%")
  },
  View_303_1629: {
    width: wp("4.212055192447349%"),
    minWidth: wp("4.212055192447349%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_303_1629: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1630: {
    width: wp("25.417574437182278%"),
    minWidth: wp("25.417574437182278%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_303_1631: {
    width: wp("25.12708787218591%"),
    minWidth: wp("25.12708787218591%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249817842%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_303_1631: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1632: {
    width: wp("25.417574437182278%"),
    minWidth: wp("25.417574437182278%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%")
  },
  View_303_1633: {
    width: wp("7.4800290486565%"),
    minWidth: wp("7.4800290486565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.39651416122004%"),
    top: hp("0.2732240437157998%"),
    justifyContent: "flex-start"
  },
  Text_303_1633: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1634: {
    width: wp("1.888162672476398%"),
    minWidth: wp("1.888162672476398%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.116194625998553%"),
    top: hp("1.2295081967212695%"),
    justifyContent: "center"
  },
  Text_303_1634: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1635: {
    width: wp("1.888162672476398%"),
    minWidth: wp("1.888162672476398%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.076978939724036%"),
    top: hp("1.2295081967212695%"),
    justifyContent: "center"
  },
  Text_303_1635: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1636: {
    width: wp("7.4800290486565%"),
    minWidth: wp("7.4800290486565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683059656%"),
    justifyContent: "flex-start"
  },
  Text_303_1636: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_1637: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_1638: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_1639: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_303_1640: {
    width: wp("0.7262164124909223%"),
    minWidth: wp("0.7262164124909223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.691358024691354%"),
    top: hp("1.0928961748633697%")
  },
  ImageBackground_303_1641: {
    width: wp("0.7262164124909223%"),
    minWidth: wp("0.7262164124909223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_1642: {
    width: wp("0.4357298474945534%"),
    minWidth: wp("0.4357298474945534%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818552%"),
    top: hp("0.2732240437158566%")
  },
  View_303_1645: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    justifyContent: "flex-start"
  },
  Text_303_1645: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_303_1646: {
    width: wp("3.7182280873594378%"),
    minWidth: wp("3.7182280873594378%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.893246187363829%"),
    top: hp("1.092896174863398%")
  },
  View_303_82: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748647%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_303_83: {
    width: wp("7.552650689905592%"),
    height: hp("4.098360655737705%"),
    top: hp("0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0893246187363772%")
  },
  ImageBackground_303_84: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.278140885984016%"),
    top: hp("0.819672131147513%")
  },
  View_303_86: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.082788671023962%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_303_87: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21786492374727828%"),
    top: hp("0.40983606557378494%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_303_88: {
    width: wp("0.8714596949891068%"),
    minWidth: wp("0.8714596949891068%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.43572984749455657%"),
    top: hp("0.8196721311475699%")
  },
  ImageBackground_303_91: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.473493100944076%")
  },
  View_303_94: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.2295081967213%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_303_95: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_96: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2512708787218614%")
  },
  ImageBackground_303_98: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.217138707334783%")
  },
  ImageBackground_303_104: {
    width: wp("1.3129942817106226%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.663761801016697%")
  },
  ImageBackground_303_108: {
    width: wp("1.5264840773594233%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7705156136528615%")
  },
  View_303_110: {
    width: wp("1.5250544662309369%"),
    minWidth: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.89251997095134%"),
    top: hp("1.3661202185792831%")
  },
  View_303_112: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_303_113: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_114: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_115: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_116: {
    width: wp("1.7667419943328169%"),
    minWidth: wp("1.7667419943328169%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.425077195953612%"),
    top: hp("2.3679472709613947%")
  },
  View_303_117: {
    width: wp("1.597676107480029%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_303_118: {
    width: wp("0.09644429754674132%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009051880549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6702977487291193%")
  },
  View_303_119: {
    width: wp("1.3071895424836601%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818552%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_303_120: {
    width: wp("1.11352938539149%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.367580392973025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.948438634713142%")
  },
  ImageBackground_303_124: {
    width: wp("1.2345679012345678%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134734940658973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.35076252723311%")
  },
  View_303_129: {
    width: wp("3.9215686274509802%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5250544662309338%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_130: {
    width: wp("3.9215686274509802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "flex-start"
  },
  Text_303_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_303_131: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775967%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_303_132: {
    width: wp("27.233115468409586%"),
    height: hp("14.344262295081966%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_133: {
    width: wp("4.925595285586023%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.580973129992735%")
  },
  View_303_134: {
    width: wp("3.3969618742588907%"),
    minWidth: wp("3.3969618742588907%"),
    height: hp("1.2100916742627086%"),
    minHeight: hp("1.2100916742627086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825176873411408%"),
    top: hp("3.9975859428363947%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_135: {
    width: wp("3.3969618742588907%"),
    height: hp("1.2100918045460853%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_303_136: {
    width: wp("2.1778303380452297%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2191340294798465%")
  },
  ImageBackground_303_137: {
    width: wp("2.1778303380452297%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_142: {
    width: wp("0.16613283621373173%"),
    height: hp("0.21868559832129972%"),
    top: hp("0.3598072489754145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20353473782452625%")
  },
  ImageBackground_303_143: {
    width: wp("0.5618902939164128%"),
    height: hp("1.1173729036675124%"),
    top: hp("0.046960382513674404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6046935104336839%")
  },
  ImageBackground_303_144: {
    width: wp("0.5810398248632316%"),
    height: hp("1.1588858776405209%"),
    top: hp("0.026198423625345413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_145: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_146: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29049099746958973%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_303_147: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_148: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_149: {
    width: wp("4.331126382754346%"),
    minWidth: wp("4.331126382754346%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3579000502110503%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_150: {
    width: wp("5.520062526240242%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.713707618464049%")
  },
  View_303_151: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5484631551549981%")
  },
  ImageBackground_303_152: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_153: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_154: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2579721576854084%"),
    top: hp("0%")
  },
  View_303_155: {
    width: wp("5.520062526240242%"),
    minWidth: wp("5.520062526240242%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_156: {
    width: wp("4.925594177467717%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.362381989832969%")
  },
  View_303_157: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2904909974695826%")
  },
  ImageBackground_303_158: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_159: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_160: {
    width: wp("4.925594177467717%"),
    minWidth: wp("4.925594177467717%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_161: {
    width: wp("4.076352254497719%"),
    minWidth: wp("4.076352254497719%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4000262757012507%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_162: {
    width: wp("4.925595285586023%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.68046477850399%")
  },
  View_303_163: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29049099746959683%")
  },
  ImageBackground_303_164: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_165: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_166: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_167: {
    width: wp("3.7366577569522454%"),
    minWidth: wp("3.7366577569522454%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.621104742533582%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_167: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_168: {
    width: wp("5.350213476775259%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.906547153004716%")
  },
  View_303_169: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45511305288898285%")
  },
  ImageBackground_303_170: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_171: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_172: {
    width: wp("4.925597501822633%"),
    minWidth: wp("4.925597501822633%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1646264878926047%"),
    top: hp("0%")
  },
  View_303_173: {
    width: wp("5.350213476775259%"),
    minWidth: wp("5.350213476775259%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_173: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_303_174: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("14.344262295081961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_303_175: {
    width: wp("9.731299927378359%"),
    minWidth: wp("9.731299927378359%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.714596949891067%"),
    top: hp("109.42622950819671%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_278_529: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.519244734931009%"),
    top: hp("286.2021857923497%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_530: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.25683060109293%")
  },
  View_278_531: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.07047526041663%")
  },
  View_278_532: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_533: {
    width: wp("9.803215697267044%"),
    height: hp("27.481760744188655%"),
    top: hp("-5.28978024675547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2762649746675283%"),
    resizeMode: "cover"
  },
  View_278_534: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752158525809053%")
  },
  View_278_535: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_536: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.29847191982588583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18626914651132154%")
  },
  View_278_537: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_538: {
    width: wp("9.242314468195408%"),
    height: hp("24.0387129653347%"),
    top: hp("-7.1364772775785354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.23440663677761187%"),
    resizeMode: "cover"
  },
  View_278_539: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_540: {
    width: wp("10.012507109687046%"),
    height: hp("28.045166515913166%"),
    top: hp("-5.571475836748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3181230355278686%"),
    resizeMode: "cover"
  },
  View_278_541: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.04606920252729%")
  },
  View_278_542: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_543: {
    width: wp("14.79272558451911%"),
    height: hp("20.78347127945697%"),
    top: hp("-1.9406177958504145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.8714799846352737%"),
    resizeMode: "cover"
  },
  View_278_544: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_545: {
    width: wp("14.13136512019449%"),
    height: hp("17.60647883180712%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.5449853923412533%"),
    resizeMode: "cover"
  },
  View_278_546: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_547: {
    width: wp("13.545347835676516%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6994473548063596%"),
    resizeMode: "cover"
  },
  View_278_548: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.04877876323428%")
  },
  View_278_549: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_550: {
    width: wp("9.041394335511981%"),
    height: hp("25.35333268629397%"),
    top: hp("-7.574696358435801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_551: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_552: {
    width: wp("14.7006376290027%"),
    height: hp("18.310738652130294%"),
    top: hp("-1.4085113025103055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.5236423079657548%"),
    resizeMode: "cover"
  },
  View_278_553: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752158525809049%")
  },
  View_278_554: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_555: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298471919825829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1862691465113251%")
  },
  View_278_556: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_557: {
    width: wp("9.041394335511981%"),
    height: hp("25.35333268629397%"),
    top: hp("-4.069043769211078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_558: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.024406057889337%")
  },
  View_278_559: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_560: {
    width: wp("9.987391608299859%"),
    height: hp("28.029515834453978%"),
    top: hp("-11.127309330174171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.477184553291802%"),
    resizeMode: "cover"
  },
  View_278_561: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752158525809053%")
  },
  View_278_562: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_563: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298471919825829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18626914651132154%")
  },
  View_278_564: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_565: {
    width: wp("8.949306379995575%"),
    height: hp("25.400280561603484%"),
    top: hp("-2.6292477800546408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04185833788991644%"),
    resizeMode: "cover"
  },
  View_278_566: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_567: {
    width: wp("13.185366739288307%"),
    height: hp("32.74022920535562%"),
    top: hp("-0.7511993574966027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4482973274668645%"),
    resizeMode: "cover"
  },
  View_278_568: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_569: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_570: {
    width: wp("9.686012240363448%"),
    height: hp("27.168757537675038%"),
    top: hp("-3.756063492571741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3264948693235965%"),
    resizeMode: "cover"
  },
  View_278_571: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_572: {
    width: wp("9.200455853275917%"),
    height: hp("25.791537175413037%"),
    top: hp("-1.5650347933743092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.08371660652243662%"),
    resizeMode: "cover"
  },
  View_278_573: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(223, 223, 232, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_574: {
    width: wp("13.352800090847971%"),
    height: hp("37.43528772573002%"),
    top: hp("-9.139714475537971%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9711127741750651%"),
    resizeMode: "cover"
  },
  View_278_575: {
    width: wp("0.7716941417951729%"),
    minWidth: wp("0.7716941417951729%"),
    height: hp("1.3928673957866398%"),
    minHeight: hp("1.3928673957866398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752156309572442%"),
    top: hp("0.9233651916837289%")
  },
  View_278_576: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944022506964013%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_577: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944005570125057%"),
    top: hp("0.29847191982577215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18627025462962976%")
  },
  View_278_578: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.22950819672133%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_579: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_580: {
    width: wp("1.5943751615636488%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2512708787218596%")
  },
  ImageBackground_278_582: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.217138707334785%")
  },
  ImageBackground_278_588: {
    width: wp("1.3129942817106226%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.663761801016705%")
  },
  ImageBackground_278_592: {
    width: wp("1.5264840773594233%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.77051561365287%")
  },
  View_278_594: {
    width: wp("1.5250544662309369%"),
    minWidth: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.892519970951348%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_278_595: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_596: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_597: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_598: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_599: {
    width: wp("27.30573710965868%"),
    height: hp("5.737704918032787%"),
    top: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_278_600: {
    width: wp("13.65286855482934%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_603: {
    width: wp("13.65286855482934%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.652868554829338%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_604: {
    width: wp("1.3778867977809977%"),
    height: hp("2.7179259420092636%"),
    top: hp("1.502765592981575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.172848371119279%")
  },
  View_278_608: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_609: {
    width: wp("1.7667419943328169%"),
    minWidth: wp("1.7667419943328169%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.473493100944083%"),
    top: hp("2.3679305946891986%")
  },
  View_278_610: {
    width: wp("1.597676107480029%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_278_611: {
    width: wp("0.09644429754674132%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009051880550146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6702977487291193%")
  },
  View_278_612: {
    width: wp("1.3071895424836601%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12104197871278188%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_613: {
    width: wp("1.11352938539149%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.367580392973025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.948438634713142%")
  },
  ImageBackground_278_617: {
    width: wp("1.2345679012345678%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413473494065954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.350762527233115%")
  },
  ImageBackground_278_622: {
    width: wp("2.077427062766658%"),
    height: hp("1.5148725665983607%"),
    top: hp("2.3452842170423764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4120200606646014%")
  },
  View_278_623: {
    width: wp("9.731299927378359%"),
    height: hp("0.6830601092896175%"),
    top: hp("109.42622950819674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.714596949891067%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_278_624: {
    width: wp("27.233115468409586%"),
    height: hp("4.918032786885246%"),
    top: hp("5.8743169398907185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_625: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.909222948438632%"),
    top: hp("1.2295081967213264%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_278_626: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%")
  },
  View_278_634: {
    width: wp("9.658678286129268%"),
    minWidth: wp("9.658678286129268%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3071895424836608%"),
    top: hp("0.40983606557381336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_635: {
    width: wp("8.133623819898329%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_635: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_636: {
    width: wp("1.1619462599854757%"),
    height: hp("2.185792349726776%"),
    top: hp("0.887978142076463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.49673202614379%")
  },
  View_279_578: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.278140885984023%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_579: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21786492374727828%"),
    top: hp("0.4098360655737565%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_279_580: {
    width: wp("0.8714596949891068%"),
    minWidth: wp("0.8714596949891068%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.435729847494553%"),
    top: hp("0.819672131147513%")
  },
  View_278_638: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.24763979665941%"),
    top: hp("24.043715846994534%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_639: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.21311475409837%")
  },
  View_278_640: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.07045858414446%")
  },
  View_278_641: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_642: {
    width: wp("9.803215697267044%"),
    height: hp("27.481760744188655%"),
    top: hp("-5.289771908619343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2762627584309314%"),
    resizeMode: "cover"
  },
  View_278_643: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7521563095724275%")
  },
  View_278_644: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_645: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.2984719198258574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18627025462963331%")
  },
  View_278_646: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761067%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_647: {
    width: wp("9.242314468195408%"),
    height: hp("24.0387129653347%"),
    top: hp("-7.13649395385076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.23440691380719159%"),
    resizeMode: "cover"
  },
  View_278_648: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_649: {
    width: wp("10.012507109687046%"),
    height: hp("28.045166515913166%"),
    top: hp("-5.571475836748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3181230355278757%"),
    resizeMode: "cover"
  },
  View_278_650: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.04606920252732%")
  },
  View_278_651: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761067%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_652: {
    width: wp("14.79272558451911%"),
    height: hp("20.78347127945697%"),
    top: hp("-1.9406261339865125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.871480261664857%"),
    resizeMode: "cover"
  },
  View_278_653: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_654: {
    width: wp("14.13136512019449%"),
    height: hp("17.60647883180712%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.544984284222963%"),
    resizeMode: "cover"
  },
  View_278_655: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_656: {
    width: wp("13.545347835676516%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6994456926289132%"),
    resizeMode: "cover"
  },
  View_278_657: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.048787101370394%")
  },
  View_278_658: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_659: {
    width: wp("9.041394335511981%"),
    height: hp("25.35333268629397%"),
    top: hp("-7.574696358435801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_660: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761067%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_661: {
    width: wp("14.7006376290027%"),
    height: hp("18.310738652130294%"),
    top: hp("-1.4085196406463467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.5236405072735124%"),
    resizeMode: "cover"
  },
  View_278_662: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752156309572442%")
  },
  View_278_663: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_664: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.29846358168971676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18627025462963331%")
  },
  View_278_665: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_666: {
    width: wp("9.041394335511981%"),
    height: hp("25.35333268629397%"),
    top: hp("-4.0690521073471615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_667: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.024389381617127%")
  },
  View_278_668: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_669: {
    width: wp("9.987391608299859%"),
    height: hp("28.029515834453978%"),
    top: hp("-11.12729265390196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.47718676952841577%"),
    resizeMode: "cover"
  },
  View_278_670: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7521563095724275%")
  },
  View_278_671: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_672: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18627025462963331%")
  },
  View_278_673: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761067%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_674: {
    width: wp("8.949306379995575%"),
    height: hp("25.400280561603484%"),
    top: hp("-2.6292311037824305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04186027709694429%"),
    resizeMode: "cover"
  },
  View_278_675: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_676: {
    width: wp("13.185366739288307%"),
    height: hp("32.74022920535562%"),
    top: hp("-0.7512076956326865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4482973274668751%"),
    resizeMode: "cover"
  },
  View_278_677: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_678: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_679: {
    width: wp("9.686012240363448%"),
    height: hp("27.168757537675038%"),
    top: hp("-3.7560468162995164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3264959774419083%"),
    resizeMode: "cover"
  },
  View_278_680: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761067%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_681: {
    width: wp("9.200455853275917%"),
    height: hp("25.791537175413037%"),
    top: hp("-1.5650181171021273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0837161217206841%"),
    resizeMode: "cover"
  },
  View_278_682: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_683: {
    width: wp("13.352800090847971%"),
    height: hp("37.43528772573002%"),
    top: hp("-9.139718644605964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9711105579384594%"),
    resizeMode: "cover"
  },
  View_278_684: {
    width: wp("0.7716941417951729%"),
    minWidth: wp("0.7716941417951729%"),
    height: hp("1.3928673957866398%"),
    minHeight: hp("1.3928673957866398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7521563095724275%"),
    top: hp("0.9233651916837431%")
  },
  View_278_685: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944022506964013%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_686: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944005570125057%"),
    top: hp("0.29846358168971676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18627025462963331%")
  },
  View_278_687: {
    width: wp("27.30573710965868%"),
    height: hp("5.737704918032787%"),
    top: hp("61.47540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_688: {
    width: wp("13.65286855482934%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_691: {
    width: wp("13.65286855482934%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.652868554829325%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_692: {
    width: wp("1.3778867977809977%"),
    height: hp("2.7179259420092636%"),
    top: hp("1.5027489167093506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1728483711192865%")
  },
  View_278_696: {
    width: wp("24.691358024691358%"),
    minWidth: wp("24.691358024691358%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.08932461873637%"),
    top: hp("49.453551912568315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_697: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_699: {
    width: wp("2.3965141612200433%"),
    minWidth: wp("2.3965141612200433%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0167029774872987%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_699: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_700: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_701: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_702: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_703: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_704: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.083514887436465%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_706: {
    width: wp("2.4691358024691357%"),
    minWidth: wp("2.4691358024691357%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_706: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_707: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_708: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_709: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_710: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_711: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.167029774872915%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_713: {
    width: wp("2.4691358024691357%"),
    minWidth: wp("2.4691358024691357%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_714: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_715: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_716: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_717: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_718: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.25054466230938%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_720: {
    width: wp("2.541757443718228%"),
    minWidth: wp("2.541757443718228%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_721: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_722: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_723: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1288: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_725: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.33405954974583%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_727: {
    width: wp("2.4691358024691357%"),
    minWidth: wp("2.4691358024691357%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_727: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_728: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_729: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499635683%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_730: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1289: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_732: {
    width: wp("25.054466230936818%"),
    minWidth: wp("25.054466230936818%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.08932461873637%"),
    top: hp("25.273224043715846%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_733: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_734: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_734: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_735: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "flex-start"
  },
  Text_278_735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_736: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327873%"),
    justifyContent: "flex-start"
  },
  Text_278_736: {
    color: "rgba(0, 76, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_737: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.972677595628419%"),
    justifyContent: "flex-start"
  },
  Text_278_737: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_738: {
    width: wp("25.054466230936818%"),
    minWidth: wp("25.054466230936818%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_739: {
    width: wp("25.054466230936818%"),
    minWidth: wp("25.054466230936818%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_740: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.348583877995651%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_741: {
    width: wp("7.18954248366013%"),
    minWidth: wp("7.18954248366013%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.3278688524590265%"),
    backgroundColor: "rgba(31, 161, 255, 1)"
  },
  View_278_742: {
    width: wp("2.904865649963689%"),
    minWidth: wp("2.904865649963689%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1423384168482187%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_278_742: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_743: {
    width: wp("7.262164124909224%"),
    minWidth: wp("7.262164124909224%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.62527233115469%"),
    top: hp("5.3278688524590265%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_744: {
    width: wp("3.994190268700073%"),
    minWidth: wp("3.994190268700073%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6339869281045765%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_278_744: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_745: {
    width: wp("7.18954248366013%"),
    minWidth: wp("7.18954248366013%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558466%"),
    top: hp("5.3278688524590265%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_746: {
    width: wp("2.3965141612200433%"),
    minWidth: wp("2.3965141612200433%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.39651416122004%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_278_746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_747: {
    width: wp("2.178649237472767%"),
    minWidth: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.875816993464056%"),
    top: hp("5.3278688524590265%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_748: {
    width: wp("1.1619462599854757%"),
    height: hp("2.185792349726776%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5083514887436422%")
  },
  View_279_661: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497269%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_662: {
    width: wp("6.384700644942584%"),
    minWidth: wp("6.384700644942584%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_279_663: {
    width: wp("6.384700644942584%"),
    minWidth: wp("6.384700644942584%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_279_664: {
    width: wp("5.648057393258952%"),
    minWidth: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    minHeight: hp("10.624829276663359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37652973515795907%"),
    top: hp("0.7083392534099602%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_279_665: {
    width: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_279_666: {
    width: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_279_667: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.803921568627445%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_667: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_668: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.74219317356571%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_668: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_669: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.479302832244002%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_670: {
    width: wp("2.3238925199709515%"),
    minWidth: wp("2.3238925199709515%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.312273057371087%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_670: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_671: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.451706608569339%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_672: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.18881626724763%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_762: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.22950819672131%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_763: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_764: {
    width: wp("1.5943751615636488%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2512708787218543%")
  },
  ImageBackground_278_766: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.217138707334783%")
  },
  ImageBackground_278_772: {
    width: wp("1.3129942817106226%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.66376180101669%")
  },
  ImageBackground_278_776: {
    width: wp("1.5264840773594233%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7705156136528615%")
  },
  View_278_778: {
    width: wp("1.5250544662309369%"),
    minWidth: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.89251997095134%"),
    top: hp("1.3661202185792405%")
  },
  ImageBackground_278_779: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_780: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_781: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_782: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1867: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("6.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_1868: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.909222948438625%"),
    top: hp("1.7759562841530077%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_278_1869: {
    width: wp("1.016702977487291%"),
    minWidth: wp("1.016702977487291%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818552%"),
    top: hp("0.9562841530054591%")
  },
  View_278_1877: {
    width: wp("6.1002178649237475%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.530137981118372%"),
    justifyContent: "flex-start"
  },
  Text_278_1877: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1878: {
    width: wp("1.7429195284930015%"),
    height: hp("3.278688785156917%"),
    top: hp("1.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.08932461873637%")
  },
  View_278_783: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_784: {
    width: wp("1.7667419943328169%"),
    minWidth: wp("1.7667419943328169%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.47349310094407%"),
    top: hp("2.3679305946892093%")
  },
  View_278_785: {
    width: wp("1.597676107480029%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_278_786: {
    width: wp("0.09644429754674132%"),
    height: hp("0.546448087431694%"),
    top: hp("0.500910399390051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6702977487291264%")
  },
  View_278_787: {
    width: wp("1.3071895424836601%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12104197871278188%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_788: {
    width: wp("1.11352938539149%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.367578308438997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.948438634713142%")
  },
  ImageBackground_278_792: {
    width: wp("1.2345679012345678%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413479747667992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.350762527233115%")
  },
  ImageBackground_278_797: {
    width: wp("2.077427062766658%"),
    height: hp("1.5148725665983607%"),
    top: hp("2.345284217042348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4120189525462905%")
  },
  View_278_812: {
    width: wp("9.731299927378359%"),
    height: hp("0.6830601092896175%"),
    top: hp("109.42622950819671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.71459694989106%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_278_1495: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.519244734931009%"),
    top: hp("24.043715846994534%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_1496: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.28961748633881%")
  },
  View_278_1497: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.07045858414446%")
  },
  View_278_1498: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1499: {
    width: wp("9.803215697267044%"),
    height: hp("27.481760744188655%"),
    top: hp("-5.289771908619372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2762649746675283%"),
    resizeMode: "cover"
  },
  View_278_1500: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752158525809053%")
  },
  View_278_1501: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1502: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18626914651132154%")
  },
  View_278_1503: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1504: {
    width: wp("9.242314468195408%"),
    height: hp("24.0387129653347%"),
    top: hp("-7.13649395385076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.23440663677761187%"),
    resizeMode: "cover"
  },
  View_278_1505: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1506: {
    width: wp("10.012507109687046%"),
    height: hp("28.045166515913166%"),
    top: hp("-5.571475836748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3181230355278686%"),
    resizeMode: "cover"
  },
  View_278_1507: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.04606920252729%")
  },
  View_278_1508: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1509: {
    width: wp("14.79272558451911%"),
    height: hp("20.78347127945697%"),
    top: hp("-1.9406261339865125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.8714799846352737%"),
    resizeMode: "cover"
  },
  View_278_1510: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1511: {
    width: wp("14.13136512019449%"),
    height: hp("17.60647883180712%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.5449853923412533%"),
    resizeMode: "cover"
  },
  View_278_1512: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1513: {
    width: wp("13.545347835676516%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6994473548063596%"),
    resizeMode: "cover"
  },
  View_278_1514: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.04878710137038%")
  },
  View_278_1515: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1516: {
    width: wp("9.041394335511981%"),
    height: hp("25.35333268629397%"),
    top: hp("-7.574696358435787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1517: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1518: {
    width: wp("14.7006376290027%"),
    height: hp("18.310738652130294%"),
    top: hp("-1.4085196406463325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.5236423079657548%"),
    resizeMode: "cover"
  },
  View_278_1519: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752158525809049%")
  },
  View_278_1520: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1521: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.29846358168970255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1862691465113251%")
  },
  View_278_1522: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1523: {
    width: wp("9.041394335511981%"),
    height: hp("25.35333268629397%"),
    top: hp("-4.069052107347176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1524: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.024389381617127%")
  },
  View_278_1525: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1526: {
    width: wp("9.987391608299859%"),
    height: hp("28.029515834453978%"),
    top: hp("-11.127292653901975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.477184553291802%"),
    resizeMode: "cover"
  },
  View_278_1527: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752158525809053%")
  },
  View_278_1528: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1529: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298463581689731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18626914651132154%")
  },
  View_278_1530: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1531: {
    width: wp("8.949306379995575%"),
    height: hp("25.400280561603484%"),
    top: hp("-2.6292311037824305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04185833788991644%"),
    resizeMode: "cover"
  },
  View_278_1532: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1533: {
    width: wp("13.185366739288307%"),
    height: hp("32.74022920535562%"),
    top: hp("-0.7512076956326723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4482973274668645%"),
    resizeMode: "cover"
  },
  View_278_1534: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1535: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1536: {
    width: wp("9.686012240363448%"),
    height: hp("27.168757537675038%"),
    top: hp("-3.7560509853675796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3264948693235965%"),
    resizeMode: "cover"
  },
  View_278_1537: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1538: {
    width: wp("9.200455853275917%"),
    height: hp("25.791537175413037%"),
    top: hp("-1.5650222861701764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.08371660652243662%"),
    resizeMode: "cover"
  },
  View_278_1539: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1540: {
    width: wp("13.352800090847971%"),
    height: hp("37.43528772573002%"),
    top: hp("-9.139718644605978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9711127741750651%"),
    resizeMode: "cover"
  },
  View_278_1541: {
    width: wp("0.7716941417951729%"),
    minWidth: wp("0.7716941417951729%"),
    height: hp("1.3928673957866398%"),
    minHeight: hp("1.3928673957866398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752156309572442%"),
    top: hp("0.9233651916837431%")
  },
  View_278_1542: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944022506964013%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1543: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944005570125057%"),
    top: hp("0.29846358168970255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18627025462962976%")
  },
  View_278_1544: {
    width: wp("27.30573710965868%"),
    height: hp("5.737704918032787%"),
    top: hp("53.55191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_1545: {
    width: wp("13.65286855482934%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1548: {
    width: wp("13.65286855482934%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.652868554829338%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1549: {
    width: wp("1.3778867977809977%"),
    height: hp("2.7179259420092636%"),
    top: hp("1.5027489167093648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.172848371119279%")
  },
  View_278_1553: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1554: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2708787218591144%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1555: {
    width: wp("2.3965141612200433%"),
    minWidth: wp("2.3965141612200433%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0167029774872907%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1556: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1557: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2904865649963684%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1558: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1559: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1560: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.35439360929557%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1561: {
    width: wp("2.4691358024691357%"),
    minWidth: wp("2.4691358024691357%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1561: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1562: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1563: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499636927%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1564: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1565: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1566: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.437908496732026%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1567: {
    width: wp("2.4691358024691357%"),
    minWidth: wp("2.4691358024691357%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1568: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1569: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1570: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1571: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1572: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.52142338416848%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1573: {
    width: wp("2.541757443718228%"),
    minWidth: wp("2.541757443718228%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362382023%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1574: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1575: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1576: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1577: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1578: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.604938271604937%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1579: {
    width: wp("1.597676107480029%"),
    minWidth: wp("1.597676107480029%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3798111837327518%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1579: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1580: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1581: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1582: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1666: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1584: {
    width: wp("25.054466230936818%"),
    minWidth: wp("25.054466230936818%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0893246187363843%"),
    top: hp("25.273224043715846%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1585: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1586: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_1586: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1587: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "flex-start"
  },
  Text_278_1587: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1588: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327873%"),
    justifyContent: "flex-start"
  },
  Text_278_1588: {
    color: "rgba(0, 76, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1591: {
    width: wp("25.054466230936818%"),
    minWidth: wp("25.054466230936818%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.202185792349724%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1592: {
    width: wp("4.720406681190995%"),
    minWidth: wp("4.720406681190995%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.167029774872914%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_278_1592: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_685: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497269%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_686: {
    width: wp("6.384700644942584%"),
    minWidth: wp("6.384700644942584%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1619462599854753%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_279_687: {
    width: wp("6.384700644942584%"),
    minWidth: wp("6.384700644942584%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_279_688: {
    width: wp("5.648057393258952%"),
    minWidth: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    minHeight: hp("10.624829276663359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3765302892171061%"),
    top: hp("0.7083392534099602%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_279_689: {
    width: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_279_690: {
    width: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_279_691: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.803921568627452%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_691: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_692: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.742193173565722%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_692: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_693: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.47930283224401%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_693: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_694: {
    width: wp("2.3238925199709515%"),
    minWidth: wp("2.3238925199709515%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.312273057371096%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_695: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.451706608569355%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_696: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.18881626724764%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_696: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_563: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("6.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_564: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.909222948438632%"),
    top: hp("1.7759562841530077%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_279_565: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557376717%")
  },
  View_279_569: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("1.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.278140885984023%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_570: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21786492374727828%"),
    top: hp("0.4098360655737707%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_279_571: {
    width: wp("0.8714596949891068%"),
    minWidth: wp("0.8714596949891068%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.435729847494553%"),
    top: hp("0.8196721311475379%")
  },
  View_279_574: {
    width: wp("9.005083514887437%"),
    minWidth: wp("9.005083514887437%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3071895424836608%"),
    top: hp("1.0928961748633874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_279_575: {
    width: wp("7.4800290486565%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_279_575: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_279_576: {
    width: wp("1.1619462599854757%"),
    height: hp("2.185792349726776%"),
    top: hp("0.6830601092896202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.843137254901961%")
  },
  View_278_1614: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.22950819672131%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_1615: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_1616: {
    width: wp("1.5943751615636488%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2512708787218596%")
  },
  ImageBackground_278_1618: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.217138707334785%")
  },
  ImageBackground_278_1624: {
    width: wp("1.3129942817106226%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.663761801016705%")
  },
  ImageBackground_278_1628: {
    width: wp("1.5264840773594233%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.77051561365287%")
  },
  View_278_1630: {
    width: wp("1.5250544662309369%"),
    minWidth: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.892519970951348%"),
    top: hp("1.3661202185792405%")
  },
  ImageBackground_278_1631: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1632: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_1633: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_1634: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1635: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1636: {
    width: wp("1.7667419943328169%"),
    minWidth: wp("1.7667419943328169%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.473493100944083%"),
    top: hp("2.3679305946892093%")
  },
  View_278_1637: {
    width: wp("1.597676107480029%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_278_1638: {
    width: wp("0.09644429754674132%"),
    height: hp("0.546448087431694%"),
    top: hp("0.500910399390051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6702977487291193%")
  },
  View_278_1639: {
    width: wp("1.3071895424836601%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12104197871278188%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_1640: {
    width: wp("1.11352938539149%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.367578308438997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.948438634713142%")
  },
  ImageBackground_278_1644: {
    width: wp("1.2345679012345678%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413479747667992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.350762527233115%")
  },
  ImageBackground_278_1649: {
    width: wp("2.077427062766658%"),
    height: hp("1.5148725665983607%"),
    top: hp("2.345284217042348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4120200606646014%")
  },
  View_278_1664: {
    width: wp("9.731299927378359%"),
    height: hp("0.6830601092896175%"),
    top: hp("109.42622950819671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.714596949891067%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_278_1321: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.38344226579521%"),
    top: hp("24.043715846994534%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_1322: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("84.97267759562843%"),
    minHeight: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.88524590163935%")
  },
  View_278_1323: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.07045858414445%")
  },
  View_278_1324: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1325: {
    width: wp("9.803215697267044%"),
    height: hp("27.481760744188655%"),
    top: hp("-5.289771908619343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.27626497466753364%"),
    resizeMode: "cover"
  },
  View_278_1326: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752158525809044%")
  },
  View_278_1327: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1328: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.298471919825829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18626803839301687%")
  },
  View_278_1329: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1330: {
    width: wp("9.242314468195408%"),
    height: hp("24.0387129653347%"),
    top: hp("-7.1364939538507315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.23440691380719159%"),
    resizeMode: "cover"
  },
  View_278_1331: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1332: {
    width: wp("10.012507109687046%"),
    height: hp("28.045166515913166%"),
    top: hp("-5.571475836748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.3181230355278757%"),
    resizeMode: "cover"
  },
  View_278_1333: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.046069202527306%")
  },
  View_278_1334: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1335: {
    width: wp("14.79272558451911%"),
    height: hp("20.78347127945697%"),
    top: hp("-1.940626133986484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.87148026166485%"),
    resizeMode: "cover"
  },
  View_278_1336: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1337: {
    width: wp("14.13136512019449%"),
    height: hp("17.60647883180712%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.5449842842229558%"),
    resizeMode: "cover"
  },
  View_278_1338: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1339: {
    width: wp("13.545347835676516%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6994456926289132%"),
    resizeMode: "cover"
  },
  View_278_1340: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.048787101370394%")
  },
  View_278_1341: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1342: {
    width: wp("9.041394335511981%"),
    height: hp("25.35333268629397%"),
    top: hp("-7.574696358435801%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1343: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1344: {
    width: wp("14.7006376290027%"),
    height: hp("18.310738652130294%"),
    top: hp("-1.4085196406463467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.5236427235101218%"),
    resizeMode: "cover"
  },
  View_278_1345: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752156309572435%")
  },
  View_278_1346: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1347: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.29846358168971676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18627025462963331%")
  },
  View_278_1348: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1349: {
    width: wp("9.041394335511981%"),
    height: hp("25.35333268629397%"),
    top: hp("-4.0690521073471615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1350: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.024389381617127%")
  },
  View_278_1351: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1352: {
    width: wp("9.987391608299859%"),
    height: hp("28.029515834453978%"),
    top: hp("-11.12729265390196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4771845532918064%"),
    resizeMode: "cover"
  },
  View_278_1353: {
    width: wp("0.7716930336768677%"),
    height: hp("1.3928703923043007%"),
    top: hp("0.9233651916837573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752158525809044%")
  },
  View_278_1354: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944021204130245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1355: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944004267291294%"),
    top: hp("0.29846358168971676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18626803839301687%")
  },
  View_278_1356: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1357: {
    width: wp("8.949306379995575%"),
    height: hp("25.400280561603484%"),
    top: hp("-2.6292311037824305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.041858060860334945%"),
    resizeMode: "cover"
  },
  View_278_1358: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1359: {
    width: wp("13.185366739288307%"),
    height: hp("32.74022920535562%"),
    top: hp("-0.7512076956326723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.448297327466861%"),
    resizeMode: "cover"
  },
  View_278_1360: {
    width: wp("27.269426289034133%"),
    minWidth: wp("27.269426289034133%"),
    height: hp("16.90222109601797%"),
    minHeight: hp("16.90222109601797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1361: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1362: {
    width: wp("9.686012240363448%"),
    height: hp("27.168757537675038%"),
    top: hp("-3.7560509853675796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.32649376120529894%"),
    resizeMode: "cover"
  },
  View_278_1363: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.114015976761074%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1364: {
    width: wp("9.200455853275917%"),
    height: hp("25.791537175413037%"),
    top: hp("-1.5650181171021273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.083716121720677%"),
    resizeMode: "cover"
  },
  View_278_1365: {
    width: wp("9.041394335511981%"),
    height: hp("16.90222109601797%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.228031953522148%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1366: {
    width: wp("13.352800090847971%"),
    height: hp("37.43528772573002%"),
    top: hp("-9.139718644605964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9711105579384594%"),
    resizeMode: "cover"
  },
  View_278_1367: {
    width: wp("0.7716941417951729%"),
    minWidth: wp("0.7716941417951729%"),
    height: hp("1.3928673957866398%"),
    minHeight: hp("1.3928673957866398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.752156309572442%"),
    top: hp("0.9233651916837431%")
  },
  View_278_1368: {
    width: wp("0.5854233331063907%"),
    height: hp("1.0944022506964013%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_278_1369: {
    width: wp("0.5854238871655433%"),
    height: hp("1.0944005570125057%"),
    top: hp("0.29846358168971676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18627025462963331%")
  },
  View_278_1379: {
    width: wp("24.691358024691358%"),
    minWidth: wp("24.691358024691358%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0893246187363772%"),
    top: hp("44.125683060109296%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1380: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1381: {
    width: wp("2.3965141612200433%"),
    minWidth: wp("2.3965141612200433%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0167029774872915%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1381: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1382: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1383: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1384: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1385: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1386: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.083514887436458%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1387: {
    width: wp("2.4691358024691357%"),
    minWidth: wp("2.4691358024691357%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1387: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1388: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1389: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1390: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1391: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1392: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.167029774872915%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1393: {
    width: wp("2.4691358024691357%"),
    minWidth: wp("2.4691358024691357%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1393: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1394: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1395: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637104%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1396: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1397: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1398: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.250544662309366%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1399: {
    width: wp("2.541757443718228%"),
    minWidth: wp("2.541757443718228%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362382059%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1399: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1400: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1401: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1402: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1403: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1404: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.334059549745824%"),
    top: hp("0.8196721311475414%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1405: {
    width: wp("2.4691358024691357%"),
    minWidth: wp("2.4691358024691357%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362382059%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_278_1405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1406: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_278_1407: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29048656499637815%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_278_1408: {
    width: wp("3.776325344952796%"),
    minWidth: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_1409: {
    width: wp("3.776325344952796%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1410: {
    width: wp("25.054466230936818%"),
    minWidth: wp("25.054466230936818%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0893246187363772%"),
    top: hp("25.273224043715846%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1411: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1412: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_1412: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1413: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%"),
    justifyContent: "flex-start"
  },
  Text_278_1413: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1414: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327873%"),
    justifyContent: "flex-start"
  },
  Text_278_1414: {
    color: "rgba(0, 76, 139, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1415: {
    width: wp("24.982055132165716%"),
    minWidth: wp("24.982055132165716%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.972677595628419%"),
    justifyContent: "flex-start"
  },
  Text_278_1415: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1416: {
    width: wp("25.054466230936818%"),
    minWidth: wp("25.054466230936818%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.797814207650276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1421: {
    width: wp("7.262164124909224%"),
    minWidth: wp("7.262164124909224%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.62527233115469%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1422: {
    width: wp("3.994190268700073%"),
    minWidth: wp("3.994190268700073%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6339869281045694%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_1422: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1491: {
    width: wp("7.262164124909224%"),
    minWidth: wp("7.262164124909224%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1492: {
    width: wp("4.212055192447349%"),
    minWidth: wp("4.212055192447349%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9440813362381988%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_1492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1493: {
    width: wp("1.1619462599854757%"),
    height: hp("2.185792349726776%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.1561365286855505%")
  },
  View_278_1423: {
    width: wp("7.18954248366013%"),
    minWidth: wp("7.18954248366013%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.323166303558459%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1424: {
    width: wp("2.3965141612200433%"),
    minWidth: wp("2.3965141612200433%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.396514161220047%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_278_1424: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1425: {
    width: wp("2.178649237472767%"),
    minWidth: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.875816993464056%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_1426: {
    width: wp("1.1619462599854757%"),
    height: hp("2.185792349726776%"),
    top: hp("0.9562841530054627%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5083514887436422%")
  },
  View_278_1819: {
    width: wp("27.30573710965868%"),
    height: hp("5.737704918032787%"),
    top: hp("56.14754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.07262164124909987%"),
    backgroundColor: "rgba(239, 172, 89, 1)"
  },
  View_278_1820: {
    width: wp("6.82643427741467%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1821: {
    width: wp("1.175778900789193%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8322440087145964%"),
    top: hp("1.7759562841530112%")
  },
  ImageBackground_278_1822: {
    width: wp("6.82643427741467%"),
    height: hp("0%"),
    top: hp("5.73770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1823: {
    width: wp("6.899055918663762%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.826434277414677%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1824: {
    width: wp("6.82643427741467%"),
    height: hp("0%"),
    top: hp("5.73770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07262164124908566%")
  },
  ImageBackground_278_1825: {
    width: wp("1.4524328249818446%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.687000726216411%")
  },
  View_278_1831: {
    width: wp("6.753812636165578%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.725490196078432%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1832: {
    width: wp("6.82643427741467%"),
    height: hp("0%"),
    top: hp("5.73770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1833: {
    width: wp("1.4524328249818446%"),
    height: hp("2.73224043715847%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.614379084967318%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_278_1834: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07262164124909276%"),
    top: hp("0.4098360655737565%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_278_1835: {
    width: wp("0.36310820624546114%"),
    minWidth: wp("0.36310820624546114%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5482925049360148%"),
    top: hp("0.1366120218579141%")
  },
  ImageBackground_278_1836: {
    width: wp("0.7262164124909223%"),
    minWidth: wp("0.7262164124909223%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3631082062454709%"),
    top: hp("1.3661202185792263%")
  },
  View_278_1837: {
    width: wp("6.82643427741467%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.47930283224401%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_278_1838: {
    width: wp("1.3778867977809977%"),
    height: hp("2.7179259420092636%"),
    minHeight: hp("2.7179259420092636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.759631232411955%"),
    top: hp("1.5027489167093648%")
  },
  ImageBackground_278_1842: {
    width: wp("6.82643427741467%"),
    height: hp("0%"),
    top: hp("5.73770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_279_673: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497269%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_279_674: {
    width: wp("6.384700644942584%"),
    minWidth: wp("6.384700644942584%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.16194625998547%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_279_675: {
    width: wp("6.384700644942584%"),
    minWidth: wp("6.384700644942584%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_279_676: {
    width: wp("5.648057393258952%"),
    minWidth: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    minHeight: hp("10.624829276663359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37652973515795907%"),
    top: hp("0.7083392534099602%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_279_677: {
    width: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_279_678: {
    width: wp("5.648057393258952%"),
    height: hp("10.624829276663359%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_279_679: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.803921568627445%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_679: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_680: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.742193173565717%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_680: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_681: {
    width: wp("3.340595497458242%"),
    minWidth: wp("3.340595497458242%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.479302832244002%"),
    top: hp("3.415300546448087%"),
    justifyContent: "flex-start"
  },
  Text_279_681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_682: {
    width: wp("2.3238925199709515%"),
    minWidth: wp("2.3238925199709515%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.312273057371094%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_682: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_683: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.451706608569346%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_683: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_279_684: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.18881626724764%"),
    top: hp("6.147540983606561%"),
    justifyContent: "flex-start"
  },
  Text_279_684: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_278_1440: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.22950819672131%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_278_1441: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_1442: {
    width: wp("1.5943751615636488%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2512708787218614%")
  },
  ImageBackground_278_1444: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.217138707334783%")
  },
  ImageBackground_278_1450: {
    width: wp("1.3129942817106226%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.663761801016697%")
  },
  ImageBackground_278_1454: {
    width: wp("1.5264840773594233%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7705156136528615%")
  },
  View_278_1456: {
    width: wp("1.5250544662309369%"),
    minWidth: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.89251997095134%"),
    top: hp("1.3661202185792405%")
  },
  ImageBackground_278_1457: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_1458: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_1459: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_1460: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_278_1461: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_278_1462: {
    width: wp("1.7667419943328169%"),
    minWidth: wp("1.7667419943328169%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.473493100944076%"),
    top: hp("2.3679305946892093%")
  },
  View_278_1463: {
    width: wp("1.597676107480029%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_278_1464: {
    width: wp("0.09644429754674132%"),
    height: hp("0.546448087431694%"),
    top: hp("0.500910399390051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6702977487291193%")
  },
  View_278_1465: {
    width: wp("1.3071895424836601%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12104197871278899%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_278_1466: {
    width: wp("1.11352938539149%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.367578308438997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.948438634713142%")
  },
  ImageBackground_278_1470: {
    width: wp("1.2345679012345678%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.413479747667992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.35076252723311%")
  },
  ImageBackground_278_1475: {
    width: wp("2.077427062766658%"),
    height: hp("1.5148725665983607%"),
    top: hp("2.345284217042348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4120189525462905%")
  },
  View_278_1909: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("6.010928961748636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_278_1910: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.909222948438632%"),
    top: hp("1.7759562841530077%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_278_1911: {
    width: wp("1.016702977487291%"),
    minWidth: wp("1.016702977487291%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818552%"),
    top: hp("0.9562841530054591%")
  },
  View_278_1915: {
    width: wp("6.1002178649237475%"),
    top: hp("1.5027322404371581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.530137981118365%"),
    justifyContent: "flex-start"
  },
  Text_278_1915: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_278_1916: {
    width: wp("1.7429195284930015%"),
    height: hp("3.278688785156917%"),
    top: hp("1.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0893246187363772%")
  },
  View_278_1918: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("1.366120218579237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.931735657225843%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_278_1919: {
    width: wp("1.5250544662309369%"),
    minWidth: wp("1.5250544662309369%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1089324618736498%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_278_1922: {
    width: wp("0.4357298474945534%"),
    minWidth: wp("0.4357298474945534%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.653594771241842%"),
    top: hp("3.0054644808743127%")
  },
  ImageBackground_278_1923: {
    width: wp("0.29048656499636893%"),
    minWidth: wp("0.29048656499636893%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7262164124909347%"),
    top: hp("0%")
  },
  View_278_1490: {
    width: wp("9.731299927378359%"),
    height: hp("0.6830601092896175%"),
    top: hp("109.42622950819671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.714596949891067%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_303_183: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.24763979665941%"),
    top: hp("155.7377049180328%"),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    overflow: "hidden"
  },
  View_303_225: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("64.03688524590164%"),
    minHeight: hp("64.03688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.69398907103826%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_303_571: {
    width: wp("29.193899782135073%"),
    height: hp("73.36065573770492%"),
    top: hp("-4.6448087431694205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9440813362381988%"),
    resizeMode: "cover"
  },
  View_303_350: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95.73087431693989%"),
    backgroundColor: "rgba(255, 73, 99, 1)"
  },
  View_303_358: {
    width: wp("6.1002178649237475%"),
    minWidth: wp("6.1002178649237475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.08932461873637%"),
    top: hp("1.229508196721298%"),
    justifyContent: "flex-start"
  },
  Text_303_358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_303_360: {
    width: wp("1.1619462599854757%"),
    height: hp("2.185792349726776%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.98184458968771%")
  },
  View_303_193: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100.64890710382511%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_194: {
    width: wp("25.70806100217865%"),
    minWidth: wp("25.70806100217865%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8714596949890989%"),
    top: hp("1.2295081967213264%")
  },
  ImageBackground_303_195: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_197: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.301379811183736%"),
    top: hp("0%")
  },
  ImageBackground_303_199: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7596223674654965%"),
    top: hp("0%")
  },
  ImageBackground_303_201: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.96514161220044%"),
    top: hp("0%")
  },
  View_303_203: {
    width: wp("4.212055192447349%"),
    minWidth: wp("4.212055192447349%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_303_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_205: {
    width: wp("25.417574437182278%"),
    minWidth: wp("25.417574437182278%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_303_206: {
    width: wp("25.12708787218591%"),
    minWidth: wp("25.12708787218591%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818552%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_303_206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_207: {
    width: wp("25.417574437182278%"),
    minWidth: wp("25.417574437182278%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032819%")
  },
  View_303_208: {
    width: wp("7.4800290486565%"),
    minWidth: wp("7.4800290486565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.39651416122004%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_303_208: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_209: {
    width: wp("1.888162672476398%"),
    minWidth: wp("1.888162672476398%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.116194625998546%"),
    top: hp("1.2295081967212695%"),
    justifyContent: "center"
  },
  Text_303_209: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_210: {
    width: wp("1.888162672476398%"),
    minWidth: wp("1.888162672476398%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.076978939724043%"),
    top: hp("1.2295081967212695%"),
    justifyContent: "center"
  },
  Text_303_210: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_211: {
    width: wp("7.4800290486565%"),
    minWidth: wp("7.4800290486565%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_303_211: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_212: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_213: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_214: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_303_215: {
    width: wp("0.7262164124909223%"),
    minWidth: wp("0.7262164124909223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.691358024691354%"),
    top: hp("1.0928961748633697%")
  },
  ImageBackground_303_216: {
    width: wp("0.7262164124909223%"),
    minWidth: wp("0.7262164124909223%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_217: {
    width: wp("0.4357298474945534%"),
    minWidth: wp("0.4357298474945534%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14524328249818552%"),
    top: hp("0.2732240437158566%")
  },
  View_303_204: {
    width: wp("3.0501089324618738%"),
    minWidth: wp("3.0501089324618738%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.240437158469945%"),
    justifyContent: "flex-start"
  },
  Text_303_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_231: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748647%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_303_232: {
    width: wp("7.552650689905592%"),
    height: hp("4.098360655737705%"),
    top: hp("0.4098360655737565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.08932461873637%")
  },
  ImageBackground_303_233: {
    width: wp("1.7429193899782136%"),
    minWidth: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.278140885984016%"),
    top: hp("0.819672131147513%")
  },
  View_303_235: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.082788671023962%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_303_236: {
    width: wp("1.3071895424836601%"),
    minWidth: wp("1.3071895424836601%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.21786492374727118%"),
    top: hp("0.40983606557378494%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1.7999999523162842,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_303_237: {
    width: wp("0.8714596949891068%"),
    minWidth: wp("0.8714596949891068%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.43572984749454235%"),
    top: hp("0.8196721311475699%")
  },
  ImageBackground_303_240: {
    width: wp("1.7429193899782136%"),
    height: hp("3.278688524590164%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.47349310094407%")
  },
  View_303_328: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.13661202185793%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_303_329: {
    width: wp("1.016702977487291%"),
    minWidth: wp("1.016702977487291%"),
    height: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.185171001270874%"),
    top: hp("3.1420765027322375%")
  },
  View_303_333: {
    width: wp("2.178649237472767%"),
    minWidth: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5809731299927279%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_303_334: {
    width: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_339: {
    width: wp("2.178649237472767%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_336: {
    width: wp("3.558460421205519%"),
    minWidth: wp("3.558460421205519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4132171387073384%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_303_336: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_337: {
    width: wp("3.9215686274509802%"),
    minWidth: wp("3.9215686274509802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4132171387073384%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_303_337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_303_243: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("9.699453551912567%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101.2295081967213%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_303_244: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_245: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2512708787218543%")
  },
  ImageBackground_303_247: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.217138707334783%")
  },
  ImageBackground_303_253: {
    width: wp("1.3129942817106226%"),
    height: hp("2.991804789975693%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.66376180101669%")
  },
  ImageBackground_303_257: {
    width: wp("1.5264840773594233%"),
    height: hp("2.8688524590163933%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7705156136528615%")
  },
  View_303_259: {
    width: wp("1.5250544662309369%"),
    minWidth: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.89251997095134%"),
    top: hp("1.3661202185792831%")
  },
  View_303_261: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_303_262: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_263: {
    width: wp("1.5250544662309369%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_264: {
    width: wp("27.233115468409586%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_265: {
    width: wp("1.7667419943328169%"),
    minWidth: wp("1.7667419943328169%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.425072763480387%"),
    top: hp("2.3679472709613947%")
  },
  View_303_266: {
    width: wp("1.597676107480029%"),
    height: hp("1.5482695376286741%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_303_267: {
    width: wp("0.09644429754674132%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5009051880549862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6702977487291264%")
  },
  View_303_268: {
    width: wp("1.3071895424836601%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1452432824981713%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_303_269: {
    width: wp("1.11352938539149%"),
    height: hp("1.5027322404371584%"),
    top: hp("2.367580392973025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.948438634713142%")
  },
  ImageBackground_303_273: {
    width: wp("1.2345679012345678%"),
    height: hp("1.4571949432456428%"),
    top: hp("2.4134734940658973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.350762527233115%")
  },
  View_303_278: {
    width: wp("3.9215686274509802%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.9562841530054413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5250544662309267%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_279: {
    width: wp("3.9215686274509802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475699%"),
    justifyContent: "flex-start"
  },
  Text_303_279: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_303_280: {
    width: wp("27.233115468409586%"),
    minWidth: wp("27.233115468409586%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.792349726775967%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_303_281: {
    width: wp("27.233115468409586%"),
    height: hp("14.344262295081966%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_303_282: {
    width: wp("4.925595285586023%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5809731299927279%")
  },
  View_303_283: {
    width: wp("3.3969618742588907%"),
    minWidth: wp("3.3969618742588907%"),
    height: hp("1.2100916742627086%"),
    minHeight: hp("1.2100916742627086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7825176873411408%"),
    top: hp("3.9975859428363947%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_303_284: {
    width: wp("3.3969618742588907%"),
    height: hp("1.2100918045460853%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_303_285: {
    width: wp("2.1778303380452297%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2191340294798465%")
  },
  ImageBackground_303_286: {
    width: wp("2.1778303380452297%"),
    height: hp("1.210088677745048%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_291: {
    width: wp("0.16613283621373173%"),
    height: hp("0.21868559832129972%"),
    top: hp("0.3598072489754145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20353473782452625%")
  },
  ImageBackground_303_292: {
    width: wp("0.5618902939164128%"),
    height: hp("1.1173729036675124%"),
    top: hp("0.046960382513674404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6046912941970675%")
  },
  ImageBackground_303_293: {
    width: wp("0.5810398248632316%"),
    height: hp("1.1588858776405209%"),
    top: hp("0.026198423625345413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_294: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_295: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29049099746958973%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_303_296: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_303_297: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_303_298: {
    width: wp("4.331126382754346%"),
    minWidth: wp("4.331126382754346%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3579000502110574%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_298: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_299: {
    width: wp("5.520062526240242%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.713707618464042%")
  },
  View_303_300: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5484653713916146%")
  },
  ImageBackground_303_301: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_302: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_303: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2579743739220248%"),
    top: hp("0%")
  },
  View_303_304: {
    width: wp("5.520062526240242%"),
    minWidth: wp("5.520062526240242%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_305: {
    width: wp("4.925594177467717%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.362381989832954%")
  },
  View_303_306: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29049099746958973%")
  },
  ImageBackground_303_307: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_308: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_309: {
    width: wp("4.925594177467717%"),
    minWidth: wp("4.925594177467717%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_310: {
    width: wp("4.076352254497719%"),
    minWidth: wp("4.076352254497719%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4000262757012649%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_311: {
    width: wp("4.925595285586023%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.68046477850399%")
  },
  View_303_312: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2904909974695755%")
  },
  ImageBackground_303_313: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_314: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_315: {
    width: wp("4.925595285586023%"),
    minWidth: wp("4.925595285586023%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_303_316: {
    width: wp("3.7366577569522454%"),
    minWidth: wp("3.7366577569522454%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6211047425335892%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_303_317: {
    width: wp("5.350213476775259%"),
    height: hp("12.792367361933806%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.90654715300471%")
  },
  View_303_318: {
    width: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45511748536220864%")
  },
  ImageBackground_303_319: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_303_320: {
    width: wp("4.357298474945534%"),
    minWidth: wp("4.357298474945534%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_303_321: {
    width: wp("4.925597501822633%"),
    minWidth: wp("4.925597501822633%"),
    height: hp("9.274484811584806%"),
    minHeight: hp("9.274484811584806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16462205541938602%"),
    top: hp("0%")
  },
  View_303_322: {
    width: wp("5.350213476775259%"),
    minWidth: wp("5.350213476775259%"),
    minHeight: hp("3.5179091281578185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.274458754909489%"),
    justifyContent: "flex-start"
  },
  Text_303_322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_303_323: {
    width: wp("27.233115468409586%"),
    height: hp("0%"),
    top: hp("14.344262295081961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_303_324: {
    width: wp("9.731299927378359%"),
    minWidth: wp("9.731299927378359%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.71459694989106%"),
    top: hp("109.42622950819671%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
