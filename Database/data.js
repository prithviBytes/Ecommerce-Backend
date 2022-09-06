const mensTopImages = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13483804/2021/2/4/5f204e75-5886-4c31-9fcd-9772beb959011612421834525-Allen-Solly-Sport-Men-Rust-Colourblocked-Polo-Collar-T-shirt-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13222024/2021/1/14/e1fb21f8-f796-405b-99c4-c3398e4d8c731610602959104-Mast--Harbour-Men-Tshirts-1891610602958038-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11630444/2020/6/16/bcfacc31-103c-400b-8cd5-9f9d2ba7c4711592300974661-Nautica-Men-Tshirts-1171592300972647-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7546902/2019/2/11/be44366c-a232-47ec-a7b4-c4bea24f04e71549886561293-HERENOW-Men-Teal-Solid-Polo-Collar-T-shirt-7371549886559966-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11687264/2020/6/9/6fe28196-ea0a-4ea9-b132-8fdf8bbd9e4f1591703233064-Roadster-Men-Tshirts-4241591703231327-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8267997/2019/1/9/2aa11437-9107-4e02-86ca-d0d7ca2190e81547028324622-HERENOW-Men-White-Solid-Round-Neck-T-shirt-351547028323849-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11543376/2020/3/3/0ca49258-67bc-4de6-97ae-0d82467340b51583216200086-DILLINGER-Men-Tshirts-9651583216197688-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11679428/2020/3/11/6efe261d-b560-4191-8dee-d4315abd58bf1583928130690HMMenWhiteSolidSlubJerseyT-shirt1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11487358/2020/6/17/e261e03b-7fab-4f4c-b270-bf196fb9ce8c1592396694544-Nautica-Men-Tshirts-1841592396692438-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7228316/2019/1/30/4d826b89-0119-4c89-8861-4a8cea8ed0691548844555754-DILLINGER-Men-Navy-Blue-Colourblocked-Round-Neck-T-shirt-161-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13345522/2021/3/25/d8c13c03-c98b-4893-9d7e-bed71657919b1616659105637-Mast--Harbour-Men-Tshirts-5681616659104820-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2475886/2018/4/12/11523531445323-Roadster-Men-Tshirts-8561523531445053-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2471500/2018/2/9/11518159758071-FIDO-DIDO-Men-Tshirts-9591518159757862-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2221320/2017/11/23/11511442645053-Moda-Rapido-Men-Black-Solid-Round-Neck-T-shirt-1511511442644939-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10984588/2020/4/6/12e687fe-4e19-4b23-a34f-9a8dc977464f1586163142759-Nautica-Men-Tshirts-7371586163140480-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10941064/2020/3/17/07c213b2-e262-4377-af00-65f83780d0e21584446980587-Roadster-Men-Tshirts-8211584446979170-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2314372/2018/6/19/29e8ddfd-6f5f-43fd-8b71-dfa8ac6cef681529385860869-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1320997/2016/7/19/11468929336914-WROGN-Black-Printed-Slim-Fit-T-shirt-4071468929335948-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/26/6fc32dea-a09a-44c0-84f9-48b4aad833211616739041356-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2330211/2019/2/1/3cbc81a0-dfcb-4a51-adb9-c02b87d1d4cd1549002838431-Roadster-Men-White-Solid-T-shirt-981549002836084-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9376057/2019/6/12/40949524-1f0b-48f5-a68a-cee0661b30d81560344436422-HERENOW-Men-Tshirts-9361560344434861-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/25/5c70d8d7-958a-43d3-8552-ceeda3e4cbea1614273493375-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8426459/2019/1/24/e694c12d-0ea4-4991-86c7-3e84a35564d61548330043036-WROGN-Men-White-Dyed-Round-Neck-T-shirt-7641548330041586-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8938905/2019/4/22/87f43813-3f79-44c6-b24f-10bb2f546ce61555939169332-Roadster-Men-Black-Printed-Round-Neck-T-shirt-22215559391680-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7452058/2019/1/30/0b7be930-948c-4e5e-9419-da64232295941548845036379-DILLINGER-Men-Green--Black-Printed-Round-Neck-T-shirt-921548-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10106295/2020/6/9/588a37df-5674-49f5-8c02-8f6fa3a021d61591680988077-HRX-by-Hrithik-Roshan-Men-Orange-Printed-Regular-Fit-Running-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7231694/2019/2/8/6b595914-1c66-4d0a-a542-9a2134ae6f391549618643915-HRX-by-Hrithik-Roshan-Men-Fluorescent-Green-Solid-Round-Neck-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12405146/2021/2/17/40474ea9-40bb-42ad-93a0-700f5b8453c81613563745633-HRX-by-Hrithik-Roshan-Men-Blue-Horizon-Solid-Seamless-Rapid--1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11999546/2020/7/9/6838e973-0889-4680-bf73-e4780885147e1594292925029-HRX-by-Hrithik-Roshan-Men-Tshirts-8891594292923892-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13040498/2021/4/3/a350ce69-35c9-451c-80fe-8983edc33c651617448733321-HRX-By-Hrithik-Roshan-Men-Jet-Black-Camouflage-Rapid-Dry-Ant-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/3009821/2018/7/27/c0d262ca-442b-49c2-a113-cf7e1e56c65f1532691415032-HRX-Active-by-Hrithik-Roshan-Men-Charcoal-Grey-Rapid-Dry-Pri-1.jpg"
]

const mensBottomImages = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2290040/2018/2/7/11517998926396-HIGHLANDER-Men-Grey-Tapered-Fit-Solid-Chinos-5971517998926206-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7786833/2019/9/25/55914283-1977-4328-9677-023537820a8b1569399773519-LOCOMOTIVE-Men-Grey-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5415202/2018/5/23/7a32e5c1-6ac6-4219-984e-63cb68497fa21527075068613-Roadster-Men-Trousers-6171527075067295-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8275695/2019/2/28/925e6dae-ee22-4474-8098-da34a3fce2db1551353661282-Roadster-Men-Jeans-681551353660126-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7229767/2019/1/31/97d63969-943d-46d3-b9e0-6bf57b6428821548938509728-WROGN-Men-Blue-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jean-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13490706/2021/3/3/bfdbc065-e330-4408-bf53-b9999ab6115d1614774261042-Mast--Harbour-Men-Jeans-371614774258690-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/899acb62-76a5-4e91-b973-b7d8ad771d671550820021053-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12330332/2020/11/30/b2dde9c7-e028-4a34-b8b8-4b4fa5a1f10f1606728067687-Calvin-Klein-Jeans-Men-Jeans-761606728066127-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/5/28/70c9790a-8fbd-4914-8afe-23d8f5d436ac1559063674224-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1729344/2020/3/2/84a03c78-f8e5-4c20-942c-8ea6e4a9ed641583150812330-WROGN-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jea-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1966990/2018/4/23/11524480696405-US-Polo-Assn-Men-Khaki-Slim-Fit-Solid-Chinos-9971524480696200-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9089099/2019/5/28/2ef64167-722c-427d-afa2-214777c46a911559042979355-HERENOW-Men-Trousers-4841559042978604-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2290044/2019/3/15/640293e1-c177-4c05-86c9-bff2d359f6a21552640215770-HIGHLANDER-Men-Olive-Green-Tapered-Fit-Solid-Chinos-18615526-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4911728/2018/6/7/662e6af1-cc93-42be-a0a5-a5324396003d1528366583947-HERENOW-Men-Jeans-7441528366583043-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/17/e838a455-9706-4ba6-bdca-628a4689e7ab1605625028778-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8206991/2018/12/14/d8e25eda-decc-4427-9fd3-ecb58aeb0c061544783715511-HIGHLANDER-Olive-6961544783714971-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13717716/2021/3/19/f6885855-7ab5-4a60-b867-f9726b9cf0a41616134056299-ether-Men-Jeans-9961616134055301-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8375547/2019/4/5/23429892-0df2-4045-bff8-68dd52afc4e61554458740813-HIGHLANDER-Men-Navy-Blue-Slim-Fit-Checked-Chinos-10015544587-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11358942/2020/8/13/71b14362-8586-4795-8929-019ee016407a1597313745617-WROGN-Men-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-J-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5395425/2019/7/5/d415e284-7c6f-4763-9d0a-b9b4182c95b01562307261030--HERENOW-Men-Charcoal-Grey-Regular-Fit-Printed-Joggers-14715-1.jpg",
]

const mensFootWearImages = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/14/cd6632e5-a2c6-4ec2-a3d8-9a6a6c59e0f51565782726402-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11567666/2020/3/20/fd86fc52-90f7-47fc-a0f2-927ec90f4b3c1584705395312-Crocs-Unisex-Navy-Blue-Solid-Thong-Flip-Flops-88615847053940-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/22/d605cab9-72ff-41b1-9e97-f5c1f95d0db11600734647939-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/1/30/4ca05056-1bb5-421d-8594-d43fa15d86fc1580339753729-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11779430/2020/4/2/7460b201-74cb-4c71-9ecd-71b1b172272e1585816666577WalkstylebyELPasoMensWhiteAirSeriesKnittedMeshSportsRunningS1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11334710/2020/5/21/65a8eeb7-4f9a-40c8-962f-5ebe1f9e8c551590080003782PumaUnisexBlackSolidGalaxyComfortIDPFlip-Flops1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13327768/2021/3/16/c16ccfea-a611-4362-91c7-6c92229c18f81615880530520-Nike-Air-Zoom-Pegasus-37-Mens-Running-Shoe-9421615880529970-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/3/7/11bc12ae-27de-442c-ab25-96ab18cf53781551905038221-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/9/24/f656f21e-7003-4b9b-b235-469cc9a1ce1d1569303201982-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/23/69592704-8784-4fe9-9427-ca882c77f72f1614065739674-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/26/e509ffb5-2534-46c1-bfb4-c9d6376c7f4b1616756399558-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11567688/2020/3/20/1f4d4b99-8a35-48af-87da-f966a2c23b5a1584703400474-Crocs-Unisex-Navy-Blue-Sandals-2211584703399157-1.jpg"
]

const mensBrands = [
  "Roadster",
  "Puma",
  "Nike",
  "Tommy Hilfiger",
  "Adidas"
]

const womensImages1 = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/2/f04c1859-6fd2-401e-886d-1616a36487611564686015480-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11374210/2020/2/12/0fe1f20e-e952-42fa-a1af-9bff2d2f418f1581484426280-Yufta-Women-Black--Golden-Solid-Kurta-with-Palazzos--Dupatta-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8969717/2019/3/28/e448c9a1-3a0f-40e7-b267-1bf44a44ba501553778956208-Indo-Era-Beige-Solid-Straight-Kurta-Sets-9801553778954623-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/5/497203e2-86f2-49ff-bac8-afd82bdb77ab1607166998827-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9329399/2019/4/24/8df4ed41-1e43-4a0d-97fe-eb47edbdbacd1556086871124-Libas-Women-Kurtas-6161556086869769-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13027872/2020/12/18/e9520c19-a0a9-49d4-a6d7-6f8c7843c87b1608288083337YurisBluePeachPrintedKurtaWithPalazzoDupatta1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13462942/2021/2/9/7b6e3c48-d06f-4378-b497-2b89b5dcfda01612871210267-GoSriki-Women-Burgundy-Solid-Straight-Kurta-with-Palazzos--D-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2477343/2018/2/22/11519301743689-Libas-Women-Green-Woven-Design-Pathani-Kurta-4531519301743438-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7287246/2018/9/21/f66057bf-5c66-4084-939d-5491a978c4e01537518473832-STREET-9-Women-White-Self-Design-Cropped-Top-1161537518473674-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7211000/2018/8/23/f5e2a503-fd7f-4ae1-9232-b087e1999add1535008687470-na-6071535008687249-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7797499/2019/3/1/844bcc25-4534-4483-94b2-4acc9e1fdbde1551425771698-Roadster-Women-Black-Solid-Top-2941551425770339-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2232839/2017/12/1/11512130640605-HERENOW-Women-Tops-3941512130640459-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12364800/2020/9/1/b6e3573d-b74a-47e7-871d-fa9838decd8a1598964146292BabyNightSuitsetwithPyjamaTshirtsRAREWomenShirtsRAREWomen1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12686450/2021/2/8/99d484a1-28ef-4e55-b424-17d0940726d11612781194218-GAP-Women-Grey-Melange-Logo-Printed-Hooded-Sweatshirt-695161-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10918152/2019/11/29/8980d0bc-5a6d-406f-b7fc-1b0367e745291575023837813-Tokyo-Talkies-Women-Black--White-Printed-Hooded-Sweatshirt-4-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13454534/2021/1/25/8b9c9ae9-58b1-46f9-8cc4-a4209205cc861611547876637DOROTHYPERKINSWomenNavyLaceA-LineDressSweatshirtsDOROTHYPERK1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/15/0ea665d7-4111-4eb5-9f6b-168debf8359c1610695891330-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/21/90395341-9015-42e6-97c1-077a63d0d94a1574317630516-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13421938/2021/2/10/1b955a6d-f736-44fb-b96d-ce45ece89e9f1612943333298-Nike-Swoosh-Run-Womens-12-Zip-Running-Top-7821612943331577-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10604552/2019/9/12/fd347043-b506-4fc8-9997-ae6f939c73081568291650944-SASSAFRAS-Women-Jackets-8211568291648962-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13884292/2021/3/30/18cbdfc5-49bf-4458-99d7-44a31f46fa271617089426075-MANGO-Women-Sustainable-Blue-Eco-Wash-Washed-Denim-Jacket-81-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/9/ccccaa77-315f-42a8-9447-a9abe0bad0111612855051246-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10562422/2019/11/7/3744522a-4d29-4016-b109-4f98cb05cfd11573105654540-Roadster-Women-Jackets-7941573105651250-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2196419/2017/10/25/11508934598492-SASSAFRAS-Grey-Blazer-3781508934598286-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/27/db54dda2-0c29-4e5d-9187-3d826ad32f431616827356876-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9140095/2019/4/1/23d28a6a-92d6-40bb-885d-1c888973d2c11554102654554-Mitera-Pink-Silk-Blned--Woven-Design-Party-wear-Banarasi-Sar-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12564560/2020/10/11/982b4a0a-96f7-4871-8fce-1f2b83c350261602402688515SareemallSeaGreenPolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13750508/2021/3/12/8400b6e2-6fd7-4064-a0a1-744d9f8f8bdd1615538791465-The-Chennai-Silks---Vivaha-Traditional-Pure-Silk-Kanjeevaram-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/28/cd191469-0b3b-470c-8365-20cc4c37556d1574893593957-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9753249/2019/6/4/28969b5f-a48a-4e95-9145-bae2544f4fd51559646513674-Saree-mall-Red--Gold-Toned-Silk-Cotton-Solid-Saree-784155964-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11263970/2020/2/12/3559b846-9284-4509-9944-77d2ad032fb51581508102623-Tikhi-Imli-Black-Embellished-Poly-Georgette-Saree-1281581508-1.jpg"
]

const womensImages2 = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7393506/2020/10/10/9a490a45-d7fb-4f17-a7f8-df2e6c40b0881602269372163TaaviWomenBlackMaroonKalamkariHandBlockPrintEthnicSustainabl1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10529224/2019/9/9/ea0d16ea-4e51-4d59-94e0-941d8ff4c6a31568030027823-Juniper-Gold-Rayon-Printed-Flared-Palazzo-5511568030025933-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4448001/2018/4/10/11523363603721-HERENOW-Women-Skirts-3341523363603608-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10562082/2020/1/9/a8db5cdd-dd06-4bfc-afc6-f7d5be5b22781578571384678-Sangria-Women-Navy-Blue--Golden-Printed-Wide-Leg-Palazzos-65-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9236655/2019/4/15/69316467-2e25-49d5-af83-e277397e70501555324038540-Varanga-White-With-Lace-Detailing-Flared-Palazzo-29015553240-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/25/da960af6-827b-4870-b691-c72bcaef2f2b1606282299567-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11478398/2020/2/17/701ec930-9dd5-4209-b6a7-8c9faaee2feb1581941218497-Juniper-Offwhite-Rayon-Flex-Solid-Wide-Leg-Palazzo-503158194-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/25/21381f75-10db-4c28-9b22-b1eec08c79121606286301950-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11893114/2020/6/1/ba1f3086-e11c-4c45-a1be-bf81beea376d1590991583029JuniperMaroonRayonPrintedFlaredPalazzo1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10322657/2019/8/5/f74a25f4-8676-4dee-a7f7-8026f20326161565006685612-Yuris-Cream-Printed-Straight-Palazzo-2421565006682653-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10216989/2019/8/13/641b61ee-77d8-4b4f-886b-a198b54fd2b61565682823186-Moda-Rapido-Women-Skirts-8601565682822001-2.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10653788/2019/9/20/04678be2-e2ac-4a25-9ec7-f937f92f93aa1568958620910-Varanga-black-base-with-gold-and-white-khadi-floral-printed--1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/11/25/04a674f1-881a-4947-abad-8f6841fd71c81606282338041-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9465295/2019/5/8/5026138a-ca5c-4e46-a56d-3e8241d0c7781557318343580-Multi-colored-cotton-ankle-length-palazzo-6841557318342102-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10614644/2019/9/21/ec220357-b851-4d16-9630-86212c6e4e331569066163177-Juniper-Black-Rayon-Solid-Wide-Leg-Palazzo-861569066160854-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10653762/2019/9/20/d02f4c23-1b3b-4730-8877-76777c5247761568958537986-Varanga-fushcia-floral-printed-tiered-skirt-with-drawstring--1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13845846/2021/3/19/964903a2-7367-4439-b031-455e13c789381616134891097-Shae-by-SASSAFRAS-Women-Skirts-4051616134890246-1.jpg"
]

const womensImages3 = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/21/64b9fd6d-3056-4664-9531-87c33a79551b1595285074775-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14045002/2021/4/7/f748f80a-3e90-432d-abe1-c96932f4b3041617800043943Braidedslides1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12768898/2020/11/9/2950723d-f565-4c10-b385-e05631dd63c01604902972568VishudhWomenNavyBlueEmbellishedOpenToeFlats1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/13/7fb3470a-d006-4ed3-877e-2ce6b699925c1615613984557-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7299177/2018/11/22/dd9a7a2d-080f-42b3-88b2-7edabebe52771542884019403-Street-Style-Store-Women-Black-Solid-Ballerinas-693154288401-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/16/37363c21-4f9c-4062-a1c0-4d94bb12d6401600208193482-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7447456/2018/10/29/a4748e3a-1f57-4973-a8f9-7fd8f12f97071540811042566-Marc-Loire-Women-Mint-Green-Solid-One-Toe-Flats-5421540811042405-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12768948/2021/2/18/e37220a2-0b6e-430f-9697-9dbf2ca95b0d1613627790952-Vishudh-Women-Bronze-Toned-Embellished-Open-Toe-Flats-717161-7.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13822354/2021/3/22/4f3df7c4-c31f-4e0a-948e-762b964accc61616386683765-DressBerry-Women-Flats-1221616386683194-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13640618/2021/3/9/24fb887b-e1cf-4526-ae60-f03d7f02ba5f1615292722798-House-of-Pataudi-Women-Red--Gold-Toned-Woven-Design-Handcraf-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13349580/2021/4/12/46eb1776-04cc-4a38-abaa-61c7802ca26e1618224711189-Anouk-Women-Gunmetal-Toned-Braided-One-Toe-Flats-19161822470-1.jpg"
]
const womensBrands = [
  "AURELIA",
  "HERE&NOW",
  "Vero Moda",
  "Roadster",
  "Van Heusen"
]

const kidsTopImages = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/19/0449c939-7fa1-4755-bb5d-53b0025db3e01595110038743-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/12/9167083e-fe42-44ac-bc43-ed94fae8ecbc1618212451195-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/18/f250d5e5-5829-40b4-a007-5d765e388de11595026879335-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/v1/image/style/properties/996248/GKIDZ-Boys-Tshirts_1_429de95d1eb4bbef58ecb8d609d8f08c.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13186070/2021/2/26/342918ce-78e7-492d-b98b-55fdc84fecde1614341281506-YK-Disney-Boys-Tshirts-291614341280842-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/25/6e696c23-947d-49e0-adba-c2cb310c89c41611589918339-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/17/c36871cc-2632-423e-944c-4bc1bb55df9f1594942107913-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1482956/2016/11/9/11478685791291-YK-Disney-Boys-Tshirts-2091478685791157-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/16/913d5278-4a71-42cf-8102-dc52bb2c1ca51594850274502-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/12/00b2f276-f604-4c69-b4dd-81cb7ea66d3d1618212464796-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/12/9ac93ad3-fcec-4be7-b1cc-1cb52f75b0471599859919282-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/v1/images/style/properties/GKIDZ-Boys-Pack-of-5-Printed-T-shirts_604fb2e35474b89c76613d5bfdd36692_images.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/2/bd837dee-0525-4afe-ad8c-3bf59407302a1614696496298-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/8/23/41712940-5bd6-4b93-9f6a-4c8be2ae8bdd1566545182163-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/8/272a1067-b828-4262-85bc-f7d1cec39dae1617860372243-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/13/d2133283-7164-44aa-b42c-3f7208c6a8a91613191539080-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/14/eceb9c45-006b-47f9-a401-38030de3a7291581634314016-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9969869/2021/3/5/db5019f9-b991-4408-863d-3bf9aa9e16301614930519569StyloBugGirlsTurquoiseBluePrintedFitandFlareDress1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/25/21028abe-284c-420a-8269-bcfee4398e5a1614251901136-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10002827/2021/3/5/1903369f-223b-41df-9c01-18fd3606ac5e1614930522861StyloBugGirlsTurquoiseBlueButterflyPrintA-LineDress1.jpg"
]

const kidsBottomImages = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/16/a250139d-5349-461a-a687-0c6d7f859c711615871020078-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/26/7f9117a6-cc6c-43b4-a209-19bb15c99de41616740292331-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/26/35de6be8-20a8-454e-a4a5-6e293f2601b41616741195948-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/1/28/a97dbf24-8a6a-4b8a-a09b-23b8a8066d1c1580163911568-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/18/5cb2b5b9-5d3e-447f-b319-2398c00e973f1613640960486-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/8/d3c7db8e-9e6c-40d6-ad3a-bf87c686158c1610109318384-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/6/11/3e1def9e-4582-450e-907d-a6b5462832771591858492631-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/26/d9c4a8ff-e353-48c5-8b70-fc29a668ee9b1616742956373-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/17/d798eb33-9e57-4e50-b86f-2c0f1ef7171a1615978780095-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/23/09910ff8-a001-47b0-881c-aafdd4589f6e1614086292612-1.jpg"
]

const kidsFootwearImages = [
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/7/3701f588-c859-4c6d-9c69-4ee5d1e33f351617811988111-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/1/17e6367c-1ed3-462d-b4ec-1aab4fed79a01614598009870-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12149974/2020/8/28/eadfd481-aa3a-41ca-9d5f-ca69cfe97e971598613504502-Onitsuka-Tiger-Unisex-Kids-Navy-Blue-Corsair-PS--Sneakers-27-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/13/a1ae58f5-cc5a-4d2c-8938-48f91b7dce261615620813373-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/20/dc12825a-8322-4b89-bedd-c1d557a01a001613816846709-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/22/5ef06df7-18f7-49f0-a255-f97502c64b561600734052860-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/6/6/011dd71a-7d85-4354-868a-b38ae8bccdaa1559815753049-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/15/109945e5-8c00-49ce-bf6f-a5d51f0c12d81610708193941-1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/8/18/52f139c9-86c6-4bc8-b1aa-32a7a10db36a1597701795150-1.jpg"
]

const kidsBrands = [
  "Gini and Jony",
  "United Colors of Benetton",
  "CUTECUMBER",
  "Bella Moda",
  "Nauti Nati"
]

module.exports = {mensTopImages, mensBrands, mensBottomImages, mensFootWearImages, womensImages1, womensImages2, womensImages3, womensBrands, kidsTopImages, kidsBrands, kidsBottomImages, kidsFootwearImages}