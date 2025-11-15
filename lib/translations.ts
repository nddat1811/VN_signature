export type Language = 'vi' | 'en' | 'zh';

interface Landmark {
  name: string;
  nameEnglish: string;
  location: string;
  description: string;
  paragraphs?: string[]; // Optional: for detailed view with separated paragraphs
  image: string;
  images?: string[]; // Optional: additional images for gallery
  mapUrl?: string; // Optional: Google Maps URL
}

interface Translations {
  title: string;
  subtitle: string;
  viewDetail: string;
  backToList: string;
  imageGallery: string;
  landmarks: Landmark[];
}

const translations: Record<Language, Translations> = {
  vi: {
    title: 'Danh lam thắng cảnh TPHCM',
    subtitle: 'Khám phá vẻ đẹp và giá trị lịch sử của những địa điểm nổi tiếng nhất Thành phố Hồ Chí Minh',
    viewDetail: 'Xem Chi Tiết',
    backToList: 'Quay lại danh sách',
    imageGallery: 'Thư viện ảnh',
    landmarks: [
      {
        name: 'Nhà thờ Đức Bà',
        nameEnglish: 'Saigon Notre-Dame Cathedral',
        location: 'Số 1 Công xã Paris, Quận 1, Thành phố Hồ Chí Minh',
        description: 'Nhà thờ Đức Bà Sài Gòn, tên đầy đủ là Nhà thờ Chính tòa Đức Bà Sài Gòn, nằm ngay trung tâm Quận 1 tại số 1 Công xã Paris, được xem như biểu tượng lâu đời và nổi bật nhất của thành phố.',
        paragraphs: [
          'Nhà thờ Đức Bà Sài Gòn, tên đầy đủ là Nhà thờ Chính tòa Đức Bà Sài Gòn, nằm ngay trung tâm Quận 1 tại số 1 Công xã Paris, được xem như biểu tượng lâu đời và nổi bật nhất của thành phố.',
          'Được xây dựng từ năm 1877 và khánh thành năm 1880 bởi kiến trúc sư người Pháp Jules Bourard, toàn bộ vật liệu như gạch, thép, kính đều được mang từ Pháp sang, tạo nên một công trình mang đậm phong cách Roman – Gothic châu Âu giữa lòng Sài Gòn.',
          'Điểm đặc trưng dễ nhận thấy nhất là hai tháp chuông cao gần 60 mét cùng lớp gạch đỏ Marseille đến nay vẫn giữ nguyên màu sau hơn trăm năm. Bên cạnh đó, mặt tiền nhà thờ với các ô kính màu sản xuất tại xưởng Lorraine (Pháp) từng là một trong những nét đẹp đặc sắc nhất, dù qua chiến tranh nhiều ô đã hư hại và chỉ còn lại một phần được bảo tồn.',
          'Trước sân nhà thờ là tượng Đức Mẹ Hòa Bình bằng đá cẩm thạch Ý, cao 4,6 mét, được đặt từ năm 1959 và đã trở thành điểm check-in quen thuộc của du khách lẫn người dân Sài Gòn.',
          'Không gian xung quanh nhà thờ luôn nhộn nhịp, nơi giới trẻ tụ tập uống cà phê bệt, du khách dạo bộ sang phố sách Nguyễn Văn Bình hay ghé thăm Bưu điện Thành phố đối diện.',
          'Dù hiện nay nhà thờ đang trong quá trình trùng tu (từ năm 2017), du khách vẫn có thể tham quan bên ngoài và tham dự Thánh lễ tại nhà nguyện bên cạnh.',
          'Với hơn 140 năm tồn tại, Nhà thờ Đức Bà không chỉ là công trình tôn giáo mà còn là chứng nhân lịch sử, lưu giữ nhiều lớp ký ức của Sài Gòn qua từng thời kỳ, đồng thời là niềm tự hào và biểu tượng văn hóa của người dân thành phố.'
        ],
        image: '/saigon-notre-dame-cathedral-magnificent-architectu.jpg',
        images: [
          '/saigon-notre-dame-cathedral-magnificent-architectu.jpg',
          '/saigon-notre-dame-cathedral-night-aerial.jpg',
          '/saigon-notre-dame-cathedral-interior.jpg',
          '/saigon-notre-dame-cathedral-night-view.jpg',
          '/saigon-notre-dame-cathedral-night-front.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/Dvb9W4Z29KxRZevV7'
      },
      {
        name: 'Bảo tàng Mỹ thuật',
        nameEnglish: 'Fine Arts Museum',
        location: 'Số 97A Phó Đức Chính, Quận 1, Thành phố Hồ Chí Minh',
        description: 'Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh nằm tại số 97A Phó Đức Chính, Quận 1, là một trong những công trình kiến trúc đẹp và cổ kính nhất tại Sài Gòn.',
        paragraphs: [
          'Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh nằm tại số 97A Phó Đức Chính, Quận 1, là một trong những công trình kiến trúc đẹp và cổ kính nhất tại Sài Gòn, đồng thời cũng là nơi lưu giữ kho tàng nghệ thuật đa dạng của Việt Nam, đặc biệt là nghệ thuật Nam Bộ.',
          'Tòa nhà được xây dựng vào năm 1929 theo lối kiến trúc Đông – Tây hòa trộn, do một thương nhân người Hoa giàu có tên Hứa Bổn Hòa làm biệt thự cho gia đình. Vì vậy, bên trong bảo tàng vẫn còn giữ nhiều chi tiết đặc trưng như cầu thang rộng, lan can uốn lượn kiểu Art Deco, những ô cửa kính màu, gạch hoa cổ, cùng hệ thống thông gió và giếng trời rất độc đáo. Công trình gồm ba dãy nhà vàng rực, rộng rãi và bố trí theo hình chữ U, tạo nên cảm giác vừa cổ điển vừa thanh lịch.',
          'Bên trong bảo tàng hiện trưng bày hàng ngàn hiện vật: từ tranh sơn dầu, tranh lụa, tranh khắc gỗ, điêu khắc đến nhiều tác phẩm nghệ thuật đương đại của các họa sĩ Việt Nam. Đặc biệt, nơi đây lưu giữ nhiều tác phẩm quý của các họa sĩ nổi tiếng như Nguyễn Gia Trí, Trần Văn Cẩn, Nguyễn Phan Chánh… cùng bộ sưu tập mỹ thuật cổ Nam Bộ gồm tượng gỗ, gốm sứ, đồ thờ và hiện vật văn hóa của người Khmer, Chăm. Không gian thoáng đãng, ánh sáng tự nhiên từ giếng trời chiếu xuống tạo điều kiện tuyệt vời để du khách vừa thưởng thức nghệ thuật, vừa cảm nhận vẻ đẹp kiến trúc của tòa nhà.',
          'Ngày nay, Bảo tàng Mỹ thuật TP.HCM không chỉ là điểm đến dành cho người yêu nghệ thuật, mà còn là nơi check-in yêu thích của giới trẻ nhờ kiến trúc cổ kính, màu sơn vàng đặc trưng và những khung cửa sổ lớn mang đậm hơi thở Sài Gòn xưa. Ngoài ra, bảo tàng thường xuyên tổ chức các triển lãm theo chủ đề, giới thiệu nghệ thuật đương đại Việt Nam và quốc tế, thu hút đông đảo khách tham quan. Đây là một trong những địa điểm lý tưởng để tìm hiểu lịch sử mỹ thuật Việt Nam, thưởng thức cái đẹp và tận hưởng không gian nghệ thuật ngay giữa lòng thành phố.'
        ],
        image: '/fine-arts-museum-vietnam-interior-gallery.jpg',
        images: [
          '/fine-arts-museum-vietnam-interior-gallery.jpg',
          '/BTMT2.jpg',
          '/BTMT3.jpg',
          '/BTMT4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/NWHnuG5d4KRqVSnN8'
      },
      {
        name: 'Dinh Độc Lập',
        nameEnglish: 'Reunification Palace',
        location: 'Số 135 Nam Kỳ Khởi Nghĩa, Quận 1, Thành phố Hồ Chí Minh',
        description: 'Dinh Độc Lập, hay còn gọi là Hội trường Thống Nhất, là một trong những địa danh lịch sử quan trọng bậc nhất của TP.HCM, gắn liền với nhiều dấu mốc lớn của Việt Nam.',
        paragraphs: [
          'Dinh Độc Lập, hay còn gọi là Hội trường Thống Nhất, là một trong những địa danh lịch sử quan trọng bậc nhất của TP.HCM, gắn liền với nhiều dấu mốc lớn của Việt Nam. Tọa lạc tại số 135 Nam Kỳ Khởi Nghĩa, Quận 1, Dinh nằm giữa khu trung tâm sầm uất nhưng vẫn giữ được vẻ uy nghi, thanh tĩnh giữa một khuôn viên rộng lớn, rợp bóng cây xanh.',
          'Công trình hiện tại được xây dựng từ năm 1962 đến 1966, theo thiết kế của kiến trúc sư Ngô Viết Thụ, người Việt Nam đầu tiên đạt giải Khôi nguyên La Mã danh giá. Kiến trúc Dinh mang sự kết hợp độc đáo giữa hiện đại và truyền thống Á Đông, thể hiện qua các họa tiết hình trúc, hoa văn phương Đông và bố cục không gian mở, tạo nên vẻ sang trọng nhưng vẫn rất gần gũi.',
          'Bên trong Dinh Độc Lập có hơn 100 phòng với nhiều chức năng khác nhau, tất cả đều được bố trí và trang trí theo phong cách sang trọng của thập niên 1960–1970. Du khách có thể tham quan các phòng quan trọng như: phòng họp Nội các, phòng khánh tiết, phòng tổng thống, phòng tiếp khách, phòng trình quốc thư… Mỗi căn phòng đều được giữ nguyên nội thất, vật dụng, máy móc liên lạc và cả bản đồ quân sự, giúp người xem hình dung rõ nét đời sống chính trị – quân sự của Việt Nam Cộng hòa trước năm 1975. Một điểm hấp dẫn khác là khu hầm ngầm với đường hầm chống bom, phòng liên lạc vô tuyến, nơi từng diễn ra các hoạt động chỉ huy trong thời chiến. Đây là khu vực mà rất nhiều du khách đặc biệt yêu thích vì giữ được hầu như nguyên vẹn không khí lịch sử.',
          'Dinh Độc Lập chính là nơi diễn ra sự kiện mang tính biểu tượng của ngày 30/4/1975, khi xe tăng 390 húc đổ cổng chính, đánh dấu sự sụp đổ của chính quyền Sài Gòn và kết thúc chiến tranh, thống nhất đất nước. Vì vậy, nơi đây được xem như biểu tượng hòa bình và tự do của dân tộc Việt Nam, đồng thời là điểm tham quan được du khách quốc tế ghé thăm nhiều nhất khi đến Sài Gòn. Với kiến trúc độc đáo, không gian xanh mát và giá trị lịch sử sâu sắc, Dinh Độc Lập không chỉ là một công trình của quá khứ mà còn là nơi giúp thế hệ trẻ hiểu hơn về hành trình gian khổ nhưng oai hùng của đất nước.'
        ],
        image: '/saigon-independence-palace-vietnam-historic.jpg',
        images: [
          '/saigon-independence-palace-vietnam-historic.jpg',
          '/Dinh2.jpg',
          '/Dinh3.jpg',
          '/Dinh4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/chtCBPrWWow9uW8s8'
      },
      {
        name: 'Bảo tàng Chứng Tích Chiến Tranh',
        nameEnglish: 'War Remnants Museum',
        location: 'Số 28 Võ Văn Tần, Quận 3, Thành phố Hồ Chí Minh',
        description: 'Bảo tàng Chứng tích Chiến tranh TP.HCM (War Remnants Museum) tọa lạc tại số 28 Võ Văn Tần, Quận 3, là một trong những điểm tham quan quan trọng và thu hút nhất của thành phố.',
        paragraphs: [
          'Bảo tàng Chứng tích Chiến tranh TP.HCM (War Remnants Museum) tọa lạc tại số 28 Võ Văn Tần, Quận 3, là một trong những điểm tham quan quan trọng và thu hút nhất của thành phố, đặc biệt đối với du khách quốc tế muốn tìm hiểu về lịch sử chiến tranh Việt Nam. Khởi nguồn từ năm 1975, bảo tàng được thành lập nhằm lưu giữ và trưng bày những hiện vật, hình ảnh, tư liệu phản ánh hậu quả của chiến tranh cũng như tinh thần đấu tranh kiên cường của nhân dân Việt Nam. Không gian kiến trúc của bảo tàng đơn giản, hiện đại, nhưng nội dung bên trong lại đầy chiều sâu, mang tính giáo dục mạnh mẽ về giá trị của hòa bình.',
          'Bên trong bảo tàng có nhiều khu trưng bày theo chủ đề như: phòng "Tội ác chiến tranh xâm lược", phòng "Hậu quả chất độc da cam/dioxin", phòng "Nhà tù Côn Đảo thu nhỏ", và phòng trưng bày hình ảnh về phong trào phản đối chiến tranh trên thế giới. Một trong những khu vực gây ấn tượng mạnh nhất là khu chứng tích chất độc da cam, nơi trưng bày những hình ảnh, hiện vật về nạn nhân dioxin – những minh chứng đau lòng nhưng chân thật về hậu quả mà chiến tranh để lại cho nhiều thế hệ. Ngoài ra, du khách cũng có thể xem các tư liệu quốc tế, ảnh báo chí của nhiều nhiếp ảnh gia nổi tiếng từng đoạt giải Pulitzer, tạo góc nhìn khách quan về cuộc chiến tranh Việt Nam.',
          'Khu vực ngoài trời của bảo tàng đặc biệt hấp dẫn với nhiều máy bay, trực thăng, xe tăng, đại bác, và bom mìn thật từng được sử dụng trong chiến tranh. Các mô hình như "chuồng cọp" – nhà tù kiểu Pháp và kiểu Mỹ – tái hiện phương thức giam giữ khắc nghiệt của thời chiến, giúp du khách hình dung rõ hơn sự khốc liệt mà tù nhân phải chịu đựng. Dù mang nội dung nặng nề, Bảo tàng Chứng tích Chiến tranh vẫn là địa điểm quan trọng giúp mọi người thấu hiểu giá trị của hòa bình và sự hy sinh của dân tộc. Nơi đây không chỉ là điểm tham quan, mà còn là lời nhắc nhở sâu sắc về quá khứ, để thế hệ hôm nay và mai sau trân trọng hơn cuộc sống tự do, hòa bình mà chúng ta đang có.'
        ],
        image: '/war-remnants-museum-vietnam-saigon.jpg',
        mapUrl: 'https://maps.app.goo.gl/1wMS3vZso8VZrNDs5'
      },
      {
        name: 'Bưu điện Trung tâm',
        nameEnglish: 'Central Post Office',
        location: 'Số 2 Công xã Paris, Quận 1, Thành phố Hồ Chí Minh',
        description: 'Bưu điện Trung tâm Thành phố Hồ Chí Minh là một trong những công trình kiến trúc cổ điển và nổi bật nhất của Sài Gòn, nằm ngay cạnh Nhà thờ Đức Bà tại số 2 Công xã Paris, Quận 1.',
        paragraphs: [
          'Bưu điện Trung tâm Thành phố Hồ Chí Minh là một trong những công trình kiến trúc cổ điển và nổi bật nhất của Sài Gòn, nằm ngay cạnh Nhà thờ Đức Bà tại số 2 Công xã Paris, Quận 1. Được xây dựng vào cuối thế kỷ XIX, khoảng năm 1886–1891, công trình do các kiến trúc sư người Pháp thiết kế theo phong cách kiến trúc châu Âu kết hợp nét Á Đông, tạo nên một công trình không chỉ đẹp về thẩm mỹ mà còn mang đậm dấu ấn lịch sử của thành phố.',
          'Mặt tiền của bưu điện nổi bật với gam màu vàng cổ kính, các ô cửa vòm, cột trang trí và họa tiết tinh xảo mang phong cách kiến trúc Pháp. Phía trên cổng chính là chiếc đồng hồ lớn – biểu tượng quen thuộc của bưu điện suốt hơn một thế kỷ. Khi bước vào bên trong, du khách sẽ ấn tượng với không gian rộng lớn dạng vòm cung như nhà ga châu Âu, kết hợp với hệ khung thép công nghiệp chịu lực, gợi nhớ đến phong cách của kiến trúc sư Gustave Eiffel. Hai bên tường treo những bản đồ cổ như "Sài Gòn và vùng phụ cận 1892" và "Đường dây điện tín Việt Nam – Campuchia 1936", là những tư liệu quý giá về lịch sử giao thông và viễn thông thời Đông Dương.',
          'Bưu điện Trung tâm không chỉ là một công trình đẹp mà còn là nơi vẫn còn hoạt động đúng chức năng. Du khách có thể gửi bưu thiếp, mua tem, hoặc ghé những quầy lưu niệm nhỏ bên trong để mua đồ thủ công, tranh vẽ, hay postcard Sài Gòn. Một trong những hình ảnh quen thuộc là những hàng bàn gỗ dài – nơi nhân viên bưu điện từng làm việc – nay được giữ lại như một phần của ký ức. Không gian nơi đây lúc nào cũng nhộn nhịp, với dòng người tham quan, chụp ảnh, đặc biệt vào dịp lễ, Tết.',
          'Ngày nay, Bưu điện Trung tâm được xem như một biểu tượng văn hóa – lịch sử của Sài Gòn, nơi du khách có thể cảm nhận sự giao thoa giữa quá khứ và hiện tại. Kiến trúc cổ kính, màu vàng đặc trưng và vị trí nằm giữa trái tim thành phố khiến nơi đây trở thành điểm dừng chân không thể thiếu trong hành trình tham quan Sài Gòn, đặc biệt khi kết hợp cùng Nhà thờ Đức Bà và phố sách Nguyễn Văn Bình ngay cạnh. Đây không chỉ là một công trình phục vụ viễn thông, mà còn là nhân chứng cho dòng chảy lịch sử và sự phát triển của thành phố suốt hơn 130 năm qua.'
        ],
        image: '/bd.jpg',
        images: [
          '/bd.jpg',
          '/bd2.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/VSp7uD4kJ5qyPJWz8'
      },
      {
        name: 'Landmark 81',
        nameEnglish: 'Landmark 81',
        location: 'Khu đô thị Vinhomes Central Park, Quận Bình Thạnh, Thành phố Hồ Chí Minh',
        description: 'Landmark 81 là tòa nhà cao nhất Việt Nam và từng nằm trong top các tòa nhà cao nhất châu Á, tọa lạc tại khu đô thị Vinhomes Central Park, Quận Bình Thạnh, ngay bên bờ sông Sài Gòn.',
        paragraphs: [
          'Landmark 81 là tòa nhà cao nhất Việt Nam và từng nằm trong top các tòa nhà cao nhất châu Á, tọa lạc tại khu đô thị Vinhomes Central Park, Quận Bình Thạnh, ngay bên bờ sông Sài Gòn. Công trình được hoàn thành năm 2018 và nhanh chóng trở thành biểu tượng hiện đại mới của TP.HCM, đại diện cho sự phát triển năng động của thành phố. Với chiều cao tổng cộng 461,2 mét và 81 tầng, Landmark 81 không chỉ là một tòa nhà, mà là một tổ hợp kiến trúc – giải trí – thương mại đẳng cấp quốc tế.',
          'Kiến trúc của Landmark 81 được lấy cảm hứng từ hình ảnh bó tre – biểu tượng cho tinh thần đoàn kết và sức mạnh của người Việt Nam. Tòa nhà có mặt kính phản chiếu toàn cảnh thành phố, đặc biệt lung linh vào ban đêm. Bên trong là một quần thể tiện ích cao cấp bao gồm trung tâm thương mại Vincom Center Landmark 81, khu căn hộ – khách sạn 5 sao Vinpearl Luxury, nhà hàng sang trọng, rạp chiếu phim, sân trượt băng, khu vui chơi trẻ em và hệ thống skybar ở tầng cao.',
          'Điểm nổi bật nhất mà du khách luôn muốn trải nghiệm là Đài quan sát Landmark 81 SkyView nằm từ tầng 79–81. Từ đây, bạn có thể ngắm toàn cảnh TP.HCM từ độ cao gần 400 mét, với tầm nhìn ôm trọn sông Sài Gòn và các quận trung tâm. Khu vực đài quan sát còn có cầu kính SkyTouch, nơi du khách có thể "chạm tay vào bầu trời" và chụp ảnh sống ảo cực chất. Đặt chân lên những tầng cao nhất của tòa nhà mang lại cảm giác choáng ngợp khi thấy Sài Gòn thu nhỏ dưới chân mình.',
          'Không chỉ là điểm tham quan, Landmark 81 còn là địa điểm lý tưởng để mua sắm, ăn uống và giải trí. Buổi tối tại khu vực công viên ven sông, bạn có thể tản bộ, ngắm tòa nhà lung linh, hoặc thưởng thức ánh sáng phản chiếu xuống mặt nước rất thơ mộng. Với thiết kế hiện đại, dịch vụ cao cấp và vị trí đắc địa, Landmark 81 ngày nay đã trở thành một phần quan trọng trong "skyline" của thành phố – biểu tượng mới của sức sống, năng lượng và tầm vóc của Sài Gòn thế kỷ 21.'
        ],
        image: '/lm1.jpg',
        images: [
          '/lm1.jpg',
          '/lm2.jpg',
          '/lm3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/fmd4N6SNmDGreA957'
      },
      {
        name: 'Phố đi bộ Nguyễn Huệ',
        nameEnglish: 'Nguyen Hue Walking Street',
        location: 'Quận 1, Thành phố Hồ Chí Minh (từ Trụ sở UBND TP.HCM đến Bến Bạch Đằng)',
        description: 'Phố đi bộ Nguyễn Huệ nằm ngay trung tâm Quận 1, nối liền từ Trụ sở UBND TP.HCM đến Bến Bạch Đằng, là một trong những không gian công cộng sôi động và đẹp nhất của Sài Gòn.',
        paragraphs: [
          'Phố đi bộ Nguyễn Huệ nằm ngay trung tâm Quận 1, nối liền từ Trụ sở UBND TP.HCM đến Bến Bạch Đằng, là một trong những không gian công cộng sôi động và đẹp nhất của Sài Gòn. Con phố được cải tạo thành phố đi bộ từ năm 2015 và nhanh chóng trở thành địa điểm vui chơi, dạo mát và chụp ảnh yêu thích của người dân lẫn du khách. Không gian ở đây rộng thoáng, lát đá granite toàn bộ, với hệ thống nhạc nước, đèn LED và cây xanh hai bên, tạo nên một tuyến phố hiện đại, trẻ trung nhưng vẫn mang nét đặc trưng của Sài Gòn.',
          'Một trong những điểm nổi bật nhất khi đến phố đi bộ Nguyễn Huệ là khung cảnh đông vui mỗi buổi tối và cuối tuần. Hàng trăm bạn trẻ tụ tập biểu diễn nghệ thuật đường phố: đàn guitar, múa, hát, patin, skate… tạo nên không khí rất năng động. Dọc hai bên phố là những tòa nhà mang kiến trúc châu Âu cổ điển, đặc biệt là Tòa nhà UBND Thành phố với vẻ ngoài tráng lệ khi lên đèn. Từ đây, bạn có thể dễ dàng nhìn thấy tòa Bitexco cao vút – một điểm nhấn hiện đại của trung tâm Sài Gòn.',
          'Phố đi bộ cũng gắn liền với hình ảnh Chung cư 42 Nguyễn Huệ, nơi tập trung hàng chục quán café, cửa hàng thời trang, studio sống ảo nhìn thẳng ra phố. Đây là nơi du khách thường ghé để uống café và chụp ảnh ở ban công với view toàn cảnh phố đi bộ. Vào những dịp lễ lớn như Tết Nguyên Đán, con phố càng rực rỡ hơn khi trở thành Phố Hoa Nguyễn Huệ, trang trí bằng hàng ngàn loài hoa, mô hình nghệ thuật theo chủ đề từng năm, thu hút rất đông người đến tham quan.',
          'Ngày nay, phố đi bộ Nguyễn Huệ không chỉ là tuyến phố đẹp, hiện đại, mà còn là trái tim của các hoạt động cộng đồng: từ lễ hội, trình diễn nghệ thuật, countdown năm mới cho đến các hoạt động văn hóa – giải trí của thành phố. Đây là nơi lý tưởng để dạo mát buổi tối, chụp ảnh, thưởng thức ẩm thực gần đó, hoặc đơn giản là cảm nhận nhịp sống năng động của Sài Gòn. Nếu bạn muốn thấy một Sài Gòn trẻ trung, nhộn nhịp và đầy sức sống, phố đi bộ Nguyễn Huệ chắc chắn là điểm không thể bỏ qua.'
        ],
        image: '/nh1.jpg',
        images: [
          '/nh1.jpg',
          '/nh2.jpg',
          '/nh3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/rL5zZxobU93PMZpY9'
      },
      {
        name: 'Hồ Con Rùa',
        nameEnglish: 'Turtle Lake',
        location: 'Giao lộ Phạm Ngọc Thạch – Võ Văn Tần – Trần Cao Vân, Quận 3, Thành phố Hồ Chí Minh',
        description: 'Hồ Con Rùa là một trong những địa điểm quen thuộc và mang tính biểu tượng của Sài Gòn, nằm ngay giao lộ Phạm Ngọc Thạch – Võ Văn Tần – Trần Cao Vân thuộc Quận 3, chỉ cách trung tâm vài phút di chuyển.',
        paragraphs: [
          'Hồ Con Rùa là một trong những địa điểm quen thuộc và mang tính biểu tượng của Sài Gòn, nằm ngay giao lộ Phạm Ngọc Thạch – Võ Văn Tần – Trần Cao Vân thuộc Quận 3, chỉ cách trung tâm vài phút di chuyển. Dù hiện nay hồ đã được cải tạo khá nhiều so với thời xưa, nhưng cái tên "Hồ Con Rùa" vẫn được người dân giữ lại như một phần ký ức đặc biệt. Khu vực này vừa là nơi hóng mát, gặp gỡ của giới trẻ, vừa là không gian gắn liền với nhiều câu chuyện lịch sử thú vị.',
          'Tên gọi "Hồ Con Rùa" xuất phát từ một công trình điêu khắc hình rùa từng nằm giữa hồ vào thập niên 1960–1970. Theo tài liệu, trước đây khu vực này là một vòng xoay với đài phun nước lớn, ở giữa có tượng rùa bằng kim loại đội bia đá khắc hình 5 vị tướng thần linh trong truyền thuyết. Tuy nhiên, công trình này đã bị phá hủy vào cuối thập niên 1970, ngày nay chỉ còn lại hồ nước nhỏ và đài phun nước hiện đại. Dù vậy, người Sài Gòn vẫn quen gọi nơi đây bằng tên cũ, như một cách lưu giữ nét đẹp văn hóa – lịch sử của thành phố.',
          'Điều làm Hồ Con Rùa trở thành địa điểm yêu thích của giới trẻ chính là không khí thoáng mát, nhiều bóng cây xanh và không gian mở rất dễ chịu, đặc biệt vào buổi tối. Xung quanh hồ có rất nhiều quán ăn vặt nổi tiếng như bánh tráng trộn, bánh tráng nướng, xiên que, trà sữa… tạo nên một "thiên đường ăn vặt" đúng nghĩa. Buổi tối, khu vực này rất nhộn nhịp với các nhóm bạn tụ tập trò chuyện, chụp ảnh hoặc đơn giản là ngồi quanh hồ ngắm dòng xe cộ qua lại – một cảnh tượng mang đậm chất Sài Gòn đường phố.',
          'Ngoài vẻ trẻ trung, Hồ Con Rùa còn nằm giữa nhiều công trình đẹp của Sài Gòn như Nhà thờ Tân Định, Dinh Độc Lập, và chỉ cách vài phút đi bộ đến các khu phố sầm uất khác. Với vị trí thuận tiện, không gian dễ chịu và vẻ đẹp pha lẫn hoài niệm – hiện đại, Hồ Con Rùa trở thành điểm đến quen thuộc của người dân và du khách muốn cảm nhận nhịp sống thường ngày của thành phố. Đây là một nơi lý tưởng để nghỉ chân, hóng mát, thưởng thức món ăn vặt và cảm nhận sự năng động, trẻ trung rất đặc trưng của Sài Gòn.'
        ],
        image: '/cr1.jpg',
        images: [
          '/cr1.jpg',
          '/cr2.jpg',
          '/cr3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/Go6AwH86oyuBu3xj8'
      },
      {
        name: 'Địa đạo Củ Chi',
        nameEnglish: 'Cu Chi Tunnels',
        location: 'Củ Chi, Thành phố Hồ Chí Minh (cách trung tâm TP.HCM khoảng 70 km về phía Tây Bắc)',
        description: 'Địa đạo Củ Chi là một trong những di tích lịch sử nổi tiếng nhất của Việt Nam, nằm cách trung tâm TP.HCM khoảng 70 km về phía Tây Bắc.',
        paragraphs: [
          'Địa đạo Củ Chi là một trong những di tích lịch sử nổi tiếng nhất của Việt Nam, nằm cách trung tâm TP.HCM khoảng 70 km về phía Tây Bắc. Đây là hệ thống đường hầm ngầm độc đáo đã gắn liền với cuộc kháng chiến chống Mỹ, được ví như "thành phố trong lòng đất" của quân và dân Củ Chi. Địa đạo được bắt đầu đào từ những năm 1940 trong kháng chiến chống Pháp, và đến thời kỳ chống Mỹ thì được mở rộng, củng cố, trở thành một mạng lưới kiên cố trải dài hơn 200 km, thông nhau qua nhiều xã, kết nối các hầm trú ẩn, phòng họp, kho vũ khí và trạm y tế dưới lòng đất.',
          'Điểm đặc biệt nhất của hệ thống địa đạo là thiết kế tinh vi, hoàn toàn thủ công nhưng vô cùng hiệu quả. Các đường hầm chỉ cao khoảng 80–100 cm, rộng 70–80 cm, buộc người đi phải cúi hoặc bò để di chuyển. Bên trong, địa đạo được chia thành nhiều tầng với lớp chống sập tự nhiên, hệ thống thông gió được ngụy trang khéo léo như các ụ mối hoặc bụi cây, giúp lính Mỹ gần như không thể phát hiện. Ngoài ra, người dân và chiến sĩ Củ Chi còn bố trí hàng trăm loại bẫy tre, hố chông, hầm bí mật… tạo thành hệ thống phòng thủ tự nhiên khiến quân địch khiếp sợ. Nhờ địa đạo, quân giải phóng có thể ẩn náu, sinh hoạt, chiến đấu, rồi bất ngờ xuất hiện tấn công mà không để lộ dấu vết.',
          'Ngày nay, Địa đạo Củ Chi trở thành điểm du lịch lịch sử nổi tiếng, thu hút đông đảo du khách trong và ngoài nước. Đến đây, bạn sẽ được xem phim tư liệu, nghe thuyết minh về cuộc sống trong chiến tranh, tham quan các đường hầm được mở rộng để phù hợp cho khách quốc tế, xem mô hình bếp Hoàng Cầm, hầm hội họp, đường hầm chiến đấu và khu tái hiện chiến trường xưa. Một trải nghiệm thú vị là chui hầm dài 20–100 m, giúp du khách cảm nhận phần nào sự gian khổ của chiến sĩ năm xưa. Ngoài ra, khu du lịch còn có trường bắn thể thao quốc phòng, nơi du khách có thể thử bắn các loại súng AK, M16, Rulo… dưới sự hướng dẫn an toàn. Địa đạo Củ Chi không chỉ là một di sản độc đáo của kỹ thuật quân sự Việt Nam, mà còn là minh chứng sống động cho tinh thần kiên cường, sáng tạo và lòng yêu nước của nhân dân trong thời chiến.'
        ],
        image: '/dd.jpg',
        images: [
          '/dd.jpg',
          '/dd2.jpg',
          '/dd3.jpg',
          '/dd4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/hciUndXHfZHdkraC9'
      }
    ]
  },
  en: {
    title: 'Ho Chi Minh City Landmarks',
    subtitle: 'Discover the beauty and historical significance of the most famous sites in Ho Chi Minh City',
    viewDetail: 'View Details',
    backToList: 'Back to List',
    imageGallery: 'Image Gallery',
    landmarks: [
      {
        name: 'Saigon Notre-Dame Cathedral',
        nameEnglish: 'Nhà thờ Đức Bà',
        location: '1 Cong Xa Paris Street, District 1, Ho Chi Minh City',
        description: 'Saigon Notre-Dame Cathedral, officially known as the Cathedral Basilica of Our Lady of The Immaculate Conception, is located in the heart of District 1 at 1 Cong Xa Paris Street, regarded as the oldest and most prominent symbol of the city.',
        paragraphs: [
          'Saigon Notre-Dame Cathedral, officially known as the Cathedral Basilica of Our Lady of The Immaculate Conception, is located in the heart of District 1 at 1 Cong Xa Paris Street, regarded as the oldest and most prominent symbol of the city.',
          'Built from 1877 and inaugurated in 1880 by French architect Jules Bourard, all materials including bricks, steel, and glass were imported from France, creating a structure with a strong European Roman-Gothic style in the heart of Saigon.',
          'The most distinctive feature is the two bell towers standing nearly 60 meters tall, along with the red Marseille brick facade that has maintained its color for over a hundred years. Additionally, the cathedral\'s facade with stained glass windows manufactured at the Lorraine workshop (France) was once one of the most beautiful features, though many were damaged during the war and only a portion remains preserved.',
          'In front of the cathedral stands the Statue of Our Lady of Peace, made of Italian marble, 4.6 meters tall, installed in 1959 and has become a familiar check-in spot for both tourists and Saigon locals.',
          'The area around the cathedral is always bustling, where young people gather for ground coffee, tourists stroll to Nguyen Van Binh Book Street or visit the City Post Office opposite.',
          'Although the cathedral is currently under renovation (since 2017), visitors can still tour the exterior and attend Mass at the adjacent chapel.',
          'With over 140 years of existence, Notre-Dame Cathedral is not only a religious structure but also a historical witness, preserving layers of Saigon\'s memories through each period, and is a source of pride and cultural symbol for the city\'s people.'
        ],
        image: '/saigon-notre-dame-cathedral-magnificent-architectu.jpg',
        images: [
          '/saigon-notre-dame-cathedral-magnificent-architectu.jpg',
          '/saigon-notre-dame-cathedral-night-aerial.jpg',
          '/saigon-notre-dame-cathedral-interior.jpg',
          '/saigon-notre-dame-cathedral-night-view.jpg',
          '/saigon-notre-dame-cathedral-night-front.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/Dvb9W4Z29KxRZevV7'
      },
      {
        name: 'Fine Arts Museum',
        nameEnglish: 'Bảo tàng Mỹ thuật',
        location: '97A Pho Duc Chinh Street, District 1, Ho Chi Minh City',
        description: 'The Ho Chi Minh City Fine Arts Museum, located at 97A Pho Duc Chinh Street, District 1, is one of the most beautiful and ancient architectural works in Saigon.',
        paragraphs: [
          'The Ho Chi Minh City Fine Arts Museum, located at 97A Pho Duc Chinh Street, District 1, is one of the most beautiful and ancient architectural works in Saigon, and also a place that preserves the diverse art treasures of Vietnam, especially Southern Vietnamese art.',
          'The building was constructed in 1929 in a blended East-West architectural style, built by a wealthy Chinese merchant named Hua Bon Hoa as a villa for his family. Therefore, the museum still retains many characteristic details such as wide staircases, Art Deco-style curved railings, stained glass windows, antique patterned tiles, along with a unique ventilation system and skylights. The structure consists of three bright yellow buildings, spacious and arranged in a U-shape, creating a feeling that is both classical and elegant.',
          'Inside the museum, thousands of artifacts are displayed: from oil paintings, silk paintings, woodblock prints, sculptures to many contemporary artworks by Vietnamese artists. In particular, this place preserves many precious works by famous artists such as Nguyen Gia Tri, Tran Van Can, Nguyen Phan Chanh... along with a collection of ancient Southern Vietnamese art including wooden statues, ceramics, ritual objects and cultural artifacts of the Khmer and Cham people. The spacious space, with natural light from skylights shining down, creates excellent conditions for visitors to both enjoy art and appreciate the architectural beauty of the building.',
          'Today, the Ho Chi Minh City Fine Arts Museum is not only a destination for art lovers, but also a favorite check-in spot for young people thanks to its ancient architecture, characteristic yellow paint and large windows that carry the breath of old Saigon. In addition, the museum regularly organizes themed exhibitions, introducing contemporary Vietnamese and international art, attracting many visitors. This is one of the ideal places to learn about Vietnamese art history, enjoy beauty and experience the artistic space right in the heart of the city.'
        ],
        image: '/fine-arts-museum-vietnam-interior-gallery.jpg',
        images: [
          '/fine-arts-museum-vietnam-interior-gallery.jpg',
          '/BTMT2.jpg',
          '/BTMT3.jpg',
          '/BTMT4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/NWHnuG5d4KRqVSnN8'
      },
      {
        name: 'Reunification Palace',
        nameEnglish: 'Dinh Độc Lập',
        location: '135 Nam Ky Khoi Nghia Street, District 1, Ho Chi Minh City',
        description: 'The Reunification Palace, also known as the Independence Palace, is one of the most important historical landmarks in Ho Chi Minh City, closely associated with many major milestones of Vietnam.',
        paragraphs: [
          'The Reunification Palace, also known as the Independence Palace, is one of the most important historical landmarks in Ho Chi Minh City, closely associated with many major milestones of Vietnam. Located at 135 Nam Ky Khoi Nghia Street, District 1, the Palace sits in the bustling city center but maintains its majestic and tranquil appearance within a large, tree-shaded compound.',
          'The current structure was built from 1962 to 1966, designed by architect Ngo Viet Thu, the first Vietnamese to win the prestigious Grand Prix de Rome. The Palace\'s architecture features a unique combination of modern and traditional Asian elements, reflected in bamboo motifs, Eastern patterns, and open spatial layouts, creating an elegant yet approachable appearance.',
          'Inside the Reunification Palace, there are over 100 rooms with various functions, all arranged and decorated in the luxurious style of the 1960s–1970s. Visitors can tour important rooms such as: the Cabinet Meeting Room, the Reception Hall, the Presidential Office, the Guest Reception Room, the Credentials Presentation Room… Each room has been preserved with its original interior, furnishings, communication equipment, and even military maps, helping viewers visualize the political and military life of the Republic of Vietnam before 1975. Another attraction is the underground bunker area with bomb shelters, radio communication rooms, where command activities took place during wartime. This is an area that many visitors particularly love because it preserves almost intact the historical atmosphere.',
          'The Reunification Palace is the site of the symbolic event of April 30, 1975, when Tank 390 crashed through the main gate, marking the fall of the Saigon regime and the end of the war, unifying the country. Therefore, this place is seen as a symbol of peace and freedom for the Vietnamese people, and is also the most visited tourist attraction by international visitors when coming to Saigon. With its unique architecture, cool green space and profound historical value, the Reunification Palace is not only a structure from the past but also a place that helps the younger generation better understand the arduous but heroic journey of the country.'
        ],
        image: '/saigon-independence-palace-vietnam-historic.jpg',
        images: [
          '/saigon-independence-palace-vietnam-historic.jpg',
          '/Dinh2.jpg',
          '/Dinh3.jpg',
          '/Dinh4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/chtCBPrWWow9uW8s8'
      },
      {
        name: 'War Remnants Museum',
        nameEnglish: 'Bảo tàng Chứng Tích Chiến Tranh',
        location: '28 Vo Van Tan Street, District 3, Ho Chi Minh City',
        description: 'The Ho Chi Minh City War Remnants Museum (War Remnants Museum), located at 28 Vo Van Tan Street, District 3, is one of the most important and attractive tourist attractions in the city.',
        paragraphs: [
          'The Ho Chi Minh City War Remnants Museum (War Remnants Museum), located at 28 Vo Van Tan Street, District 3, is one of the most important and attractive tourist attractions in the city, especially for international visitors who want to learn about Vietnam\'s war history. Originating in 1975, the museum was established to preserve and display artifacts, images, and documents reflecting the consequences of war as well as the indomitable fighting spirit of the Vietnamese people. The museum\'s architectural space is simple and modern, but the content inside is profound, with strong educational value about the importance of peace.',
          'Inside the museum, there are many themed exhibition areas such as: the "Crimes of Aggressive War" room, the "Consequences of Agent Orange/Dioxin" room, the "Con Dao Prison Miniature" room, and the exhibition room of images about the anti-war movement around the world. One of the most impressive areas is the Agent Orange evidence area, which displays images and artifacts about dioxin victims – heartbreaking but truthful evidence of the consequences that war has left for many generations. In addition, visitors can also view international documents, press photos by many famous photographers who have won Pulitzer Prizes, providing an objective perspective on the Vietnam War.',
          'The outdoor area of the museum is particularly attractive with many real aircraft, helicopters, tanks, cannons, and bombs and mines that were used in the war. Models such as "tiger cages" – French-style and American-style prisons – recreate the harsh detention methods of wartime, helping visitors better visualize the brutality that prisoners had to endure. Despite its heavy content, the War Remnants Museum remains an important place that helps people understand the value of peace and the sacrifices of the nation. This place is not only a tourist attraction, but also a profound reminder of the past, so that today\'s and future generations will cherish more the free and peaceful life we have.'
        ],
        image: '/war-remnants-museum-vietnam-saigon.jpg',
        mapUrl: 'https://maps.app.goo.gl/1wMS3vZso8VZrNDs5'
      },
      {
        name: 'Cu Chi Tunnels',
        nameEnglish: 'Địa đạo Củ Chi',
        location: 'Cu Chi, Ho Chi Minh City (approximately 70 km northwest of Ho Chi Minh City center)',
        description: 'The Cu Chi Tunnels are one of Vietnam\'s most famous historical sites, located approximately 70 km northwest of Ho Chi Minh City center.',
        paragraphs: [
          'The Cu Chi Tunnels are one of Vietnam\'s most famous historical sites, located approximately 70 km northwest of Ho Chi Minh City center. This is a unique underground tunnel system that was closely associated with the anti-American resistance, described as the "underground city" of Cu Chi soldiers and people. The tunnels began to be dug in the 1940s during the anti-French resistance, and by the anti-American period, they were expanded and reinforced, becoming a solid network stretching over 200 km, connecting through many communes, linking shelters, meeting rooms, weapon depots and underground medical stations.',
          'The most special feature of the tunnel system is its sophisticated design, completely manual but extremely effective. The tunnels are only about 80–100 cm high and 70–80 cm wide, forcing people to crouch or crawl to move. Inside, the tunnels are divided into multiple levels with natural collapse-resistant layers, and a ventilation system cleverly disguised as termite mounds or bushes, making it nearly impossible for American soldiers to detect. In addition, Cu Chi people and soldiers also arranged hundreds of types of bamboo traps, spike pits, secret bunkers… creating a natural defense system that terrified the enemy. Thanks to the tunnels, the liberation forces could hide, live, fight, and then suddenly appear to attack without leaving traces.',
          'Today, the Cu Chi Tunnels have become a famous historical tourist destination, attracting many domestic and international visitors. Here, you will watch documentary films, listen to explanations about life during the war, visit tunnels expanded to accommodate international visitors, see models of Hoang Cam kitchens, meeting bunkers, combat tunnels and areas recreating the old battlefield. An interesting experience is crawling through tunnels 20–100 m long, helping visitors feel somewhat the hardships of the soldiers of the past. In addition, the tourist area also has a defense sports shooting range, where visitors can try shooting AK, M16, Rulo guns… under safe guidance. The Cu Chi Tunnels are not only a unique heritage of Vietnamese military engineering, but also a vivid testament to the indomitable spirit, creativity and patriotism of the people during wartime.'
        ],
        image: '/dd.jpg',
        images: [
          '/dd.jpg',
          '/dd2.jpg',
          '/dd3.jpg',
          '/dd4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/hciUndXHfZHdkraC9'
      },
      {
        name: 'Central Post Office',
        nameEnglish: 'Bưu điện Trung tâm',
        location: '2 Cong Xa Paris Street, District 1, Ho Chi Minh City',
        description: 'The Central Post Office of Ho Chi Minh City is one of the most classic and prominent architectural works in Saigon, located right next to Notre-Dame Cathedral at 2 Cong Xa Paris Street, District 1.',
        paragraphs: [
          'The Central Post Office of Ho Chi Minh City is one of the most classic and prominent architectural works in Saigon, located right next to Notre-Dame Cathedral at 2 Cong Xa Paris Street, District 1. Built in the late 19th century, around 1886–1891, the structure was designed by French architects in a European architectural style combined with Eastern elements, creating a work that is not only aesthetically beautiful but also deeply imbued with the city\'s historical imprint.',
          'The post office facade stands out with its classic yellow color scheme, arched windows, decorative columns and intricate details in French architectural style. Above the main gate is a large clock – a familiar symbol of the post office for over a century. When stepping inside, visitors will be impressed by the vast arched space like a European train station, combined with an industrial steel frame structure, reminiscent of architect Gustave Eiffel\'s style. On both walls hang ancient maps such as "Saigon and Surrounding Areas 1892" and "Vietnam – Cambodia Telegraph Line 1936", which are valuable documents about the history of transportation and telecommunications during the Indochina period.',
          'The Central Post Office is not only a beautiful structure but also a place that still functions properly. Visitors can send postcards, buy stamps, or visit small souvenir stalls inside to buy handicrafts, paintings, or Saigon postcards. One of the familiar images is the long wooden tables – where post office employees once worked – now preserved as part of the memory. The space here is always bustling, with streams of visitors and photographers, especially during holidays and Tet.',
          'Today, the Central Post Office is seen as a cultural – historical symbol of Saigon, where visitors can feel the intersection between past and present. The ancient architecture, characteristic yellow color and location in the heart of the city make this an indispensable stop on any Saigon tour, especially when combined with Notre-Dame Cathedral and Nguyen Van Binh Book Street right next door. This is not only a telecommunications facility, but also a witness to the flow of history and the development of the city over more than 130 years.'
        ],
        image: '/bd.jpg',
        images: [
          '/bd.jpg',
          '/bd2.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/VSp7uD4kJ5qyPJWz8'
      },
      {
        name: 'Landmark 81',
        nameEnglish: 'Landmark 81',
        location: 'Vinhomes Central Park Urban Area, Binh Thanh District, Ho Chi Minh City',
        description: 'Landmark 81 is the tallest building in Vietnam and was once among the top tallest buildings in Asia, located in the Vinhomes Central Park urban area, Binh Thanh District, right on the banks of the Saigon River.',
        paragraphs: [
          'Landmark 81 is the tallest building in Vietnam and was once among the top tallest buildings in Asia, located in the Vinhomes Central Park urban area, Binh Thanh District, right on the banks of the Saigon River. Completed in 2018, the structure quickly became the new modern symbol of Ho Chi Minh City, representing the city\'s dynamic development. With a total height of 461.2 meters and 81 floors, Landmark 81 is not just a building, but an international-class architectural – entertainment – commercial complex.',
          'The architecture of Landmark 81 is inspired by the image of a bundle of bamboo – a symbol of the unity and strength of the Vietnamese people. The building features glass facades that reflect the entire cityscape, especially dazzling at night. Inside is a complex of premium amenities including Vincom Center Landmark 81 shopping mall, Vinpearl Luxury 5-star apartment – hotel, luxury restaurants, cinemas, ice skating rink, children\'s play area and a skybar system on the upper floors.',
          'The most prominent feature that visitors always want to experience is the Landmark 81 SkyView Observatory located on floors 79–81. From here, you can enjoy panoramic views of Ho Chi Minh City from a height of nearly 400 meters, with a view that embraces the Saigon River and central districts. The observatory area also features the SkyTouch glass bridge, where visitors can "touch the sky" and take stunning virtual photos. Stepping onto the highest floors of the building brings an overwhelming feeling when seeing Saigon miniaturized beneath your feet.',
          'Not just a tourist attraction, Landmark 81 is also an ideal place for shopping, dining and entertainment. In the evening at the riverside park area, you can stroll, admire the sparkling building, or enjoy the romantic light reflecting on the water surface. With modern design, premium services and prime location, Landmark 81 has today become an important part of the city\'s "skyline" – a new symbol of vitality, energy and stature of 21st century Saigon.'
        ],
        image: '/lm1.jpg',
        images: [
          '/lm1.jpg',
          '/lm2.jpg',
          '/lm3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/fmd4N6SNmDGreA957'
      },
      {
        name: 'Nguyen Hue Walking Street',
        nameEnglish: 'Phố đi bộ Nguyễn Huệ',
        location: 'District 1, Ho Chi Minh City (from Ho Chi Minh City People\'s Committee Building to Bach Dang Wharf)',
        description: 'Nguyen Hue Walking Street is located right in the center of District 1, connecting from the Ho Chi Minh City People\'s Committee Building to Bach Dang Wharf, and is one of the most vibrant and beautiful public spaces in Saigon.',
        paragraphs: [
          'Nguyen Hue Walking Street is located right in the center of District 1, connecting from the Ho Chi Minh City People\'s Committee Building to Bach Dang Wharf, and is one of the most vibrant and beautiful public spaces in Saigon. The street was converted into a walking street in 2015 and quickly became a favorite place for recreation, strolling and photography for both locals and tourists. The space here is spacious, fully paved with granite, with a water music system, LED lights and trees on both sides, creating a modern, youthful street that still retains the characteristic features of Saigon.',
          'One of the most prominent features when visiting Nguyen Hue Walking Street is the bustling scene every evening and weekend. Hundreds of young people gather to perform street art: guitar playing, dancing, singing, rollerblading, skateboarding… creating a very dynamic atmosphere. Along both sides of the street are buildings with classic European architecture, especially the City People\'s Committee Building with its magnificent appearance when lit up. From here, you can easily see the towering Bitexco Tower – a modern highlight of central Saigon.',
          'The walking street is also associated with the image of 42 Nguyen Hue Apartment Building, which houses dozens of cafes, fashion stores, and virtual living studios overlooking the street. This is where visitors often stop to drink coffee and take photos on the balcony with a panoramic view of the walking street. During major holidays such as Lunar New Year, the street becomes even more brilliant when it becomes Nguyen Hue Flower Street, decorated with thousands of flowers and artistic models themed for each year, attracting many visitors.',
          'Today, Nguyen Hue Walking Street is not only a beautiful, modern street, but also the heart of community activities: from festivals, art performances, New Year countdowns to cultural – entertainment activities of the city. This is an ideal place to stroll in the evening, take photos, enjoy nearby cuisine, or simply feel the dynamic rhythm of Saigon life. If you want to see a youthful, bustling and vibrant Saigon, Nguyen Hue Walking Street is definitely a must-visit destination.'
        ],
        image: '/nh1.jpg',
        images: [
          '/nh1.jpg',
          '/nh2.jpg',
          '/nh3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/rL5zZxobU93PMZpY9'
      },
      {
        name: 'Turtle Lake',
        nameEnglish: 'Hồ Con Rùa',
        location: 'Intersection of Pham Ngoc Thach – Vo Van Tan – Tran Cao Van, District 3, Ho Chi Minh City',
        description: 'Turtle Lake is one of the familiar and iconic landmarks of Saigon, located right at the intersection of Pham Ngoc Thach – Vo Van Tan – Tran Cao Van in District 3, just a few minutes from the city center.',
        paragraphs: [
          'Turtle Lake is one of the familiar and iconic landmarks of Saigon, located right at the intersection of Pham Ngoc Thach – Vo Van Tan – Tran Cao Van in District 3, just a few minutes from the city center. Although the lake has been renovated quite a bit compared to the old days, the name "Turtle Lake" is still kept by the people as a special part of memory. This area is both a place for young people to relax and meet up, and a space associated with many interesting historical stories.',
          'The name "Turtle Lake" originates from a turtle-shaped sculpture that once stood in the middle of the lake in the 1960s–1970s. According to documents, this area was once a roundabout with a large fountain, and in the center there was a metal turtle statue carrying a stone stele carved with images of 5 mythical generals in legend. However, this structure was destroyed in the late 1970s, and today only the small lake and modern fountain remain. Nevertheless, Saigon people still call this place by its old name, as a way to preserve the cultural – historical beauty of the city.',
          'What makes Turtle Lake a favorite spot for young people is the cool atmosphere, lots of green trees, and very pleasant open space, especially in the evening. Around the lake there are many famous snack shops such as mixed rice paper, grilled rice paper, skewers, milk tea… creating a true "snack paradise". In the evening, this area is very bustling with groups of friends gathering to chat, take photos, or simply sit around the lake watching the traffic pass by – a scene that embodies the essence of Saigon street life.',
          'In addition to its youthful vibe, Turtle Lake is also located among many beautiful structures of Saigon such as Tan Dinh Church, Reunification Palace, and is just a few minutes\' walk from other bustling neighborhoods. With its convenient location, pleasant space, and beauty that blends nostalgia with modernity, Turtle Lake has become a familiar destination for locals and tourists who want to experience the daily rhythm of the city. This is an ideal place to rest, relax, enjoy snacks and feel the dynamic, youthful energy that is very characteristic of Saigon.'
        ],
        image: '/cr1.jpg',
        images: [
          '/cr1.jpg',
          '/cr2.jpg',
          '/cr3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/Go6AwH86oyuBu3xj8'
      }
    ]
  },
  zh: {
    title: '胡志明市地标',
    subtitle: '探索胡志明市最著名景点的美丽和历史意义',
    viewDetail: '查看详情',
    backToList: '返回列表',
    imageGallery: '图片库',
    landmarks: [
      {
        name: '西贡圣母院',
        nameEnglish: 'Saigon Notre-Dame Cathedral',
        location: '胡志明市第一郡巴黎公社街1号',
        description: '西贡圣母院，全称为西贡圣母无原罪圣殿主教座堂，位于第一郡中心巴黎公社街1号，被视为这座城市最古老、最突出的象征。',
        paragraphs: [
          '西贡圣母院，全称为西贡圣母无原罪圣殿主教座堂，位于第一郡中心巴黎公社街1号，被视为这座城市最古老、最突出的象征。',
          '由法国建筑师朱尔斯·布哈德于1877年开始建造，1880年落成，所有材料包括砖块、钢材、玻璃均从法国运来，在西贡市中心打造出一座具有浓厚欧洲罗马-哥特式风格的建筑。',
          '最显著的特征是两座近60米高的钟楼，以及红色马赛砖外墙，历经一百多年仍保持原色。此外，教堂正面的彩色玻璃窗由法国洛林工坊制造，曾是其中最美丽的特色之一，尽管经过战争许多已损坏，仅保留了一部分。',
          '教堂前是和平圣母雕像，由意大利大理石制成，高4.6米，1959年安装，已成为游客和西贡当地人熟悉的打卡点。',
          '教堂周围总是热闹非凡，年轻人聚集喝地摊咖啡，游客漫步到阮文平书街或参观对面的城市邮局。',
          '尽管教堂目前正在翻修（自2017年起），游客仍可参观外部并在旁边的礼拜堂参加弥撒。',
          '拥有140多年的历史，圣母院不仅是宗教建筑，更是历史见证者，保存着西贡各个时期的记忆层次，同时也是市民的骄傲和文化象征。'
        ],
        image: '/saigon-notre-dame-cathedral-magnificent-architectu.jpg',
        images: [
          '/saigon-notre-dame-cathedral-magnificent-architectu.jpg',
          '/saigon-notre-dame-cathedral-night-aerial.jpg',
          '/saigon-notre-dame-cathedral-interior.jpg',
          '/saigon-notre-dame-cathedral-night-view.jpg',
          '/saigon-notre-dame-cathedral-night-front.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/Dvb9W4Z29KxRZevV7'
      },
      {
        name: '美术博物馆',
        nameEnglish: 'Fine Arts Museum',
        location: '胡志明市第一郡富德正街97A号',
        description: '胡志明市美术博物馆位于第一郡富德正街97A号，是西贡最美丽、最古老的建筑之一。',
        paragraphs: [
          '胡志明市美术博物馆位于第一郡富德正街97A号，是西贡最美丽、最古老的建筑之一，同时也是保存越南多样化艺术宝藏的地方，特别是南越艺术。',
          '该建筑建于1929年，采用东西方融合的建筑风格，由一位富有的华商许本和为其家族建造的别墅。因此，博物馆内仍保留许多特色细节，如宽阔的楼梯、装饰艺术风格的弯曲栏杆、彩色玻璃窗、古董花砖，以及独特的通风系统和天窗。建筑由三座明亮的黄色建筑组成，宽敞且呈U形布局，营造出既古典又优雅的感觉。',
          '博物馆内展示数千件文物：从油画、丝绸画、木版画、雕塑到越南艺术家的许多当代艺术作品。特别是，这里保存了许多著名艺术家的珍贵作品，如阮嘉智、陈文瑾、阮潘正等，以及南越古代艺术收藏，包括木雕、陶瓷、祭祀用品和高棉、占族的文化文物。宽敞的空间，从天窗洒下的自然光线，为游客欣赏艺术和欣赏建筑之美创造了绝佳的条件。',
          '如今，胡志明市美术博物馆不仅是艺术爱好者的目的地，也是年轻人喜爱的打卡地，这要归功于其古老的建筑、特色的黄色油漆和承载着旧西贡气息的大窗户。此外，博物馆定期举办主题展览，介绍当代越南和国际艺术，吸引众多游客。这是了解越南艺术史、欣赏美并在城市中心体验艺术空间的理想场所之一。'
        ],
        image: '/fine-arts-museum-vietnam-interior-gallery.jpg',
        images: [
          '/fine-arts-museum-vietnam-interior-gallery.jpg',
          '/BTMT2.jpg',
          '/BTMT3.jpg',
          '/BTMT4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/NWHnuG5d4KRqVSnN8'
      },
      {
        name: '统一宫',
        nameEnglish: 'Reunification Palace',
        location: '胡志明市第一郡南圻起义街135号',
        description: '统一宫，又称独立宫，是胡志明市最重要的历史地标之一，与越南的许多重大里程碑密切相关。',
        paragraphs: [
          '统一宫，又称独立宫，是胡志明市最重要的历史地标之一，与越南的许多重大里程碑密切相关。位于第一郡南圻起义街135号，统一宫坐落在繁华的市中心，但在一个大型、绿树成荫的庭院中仍保持着庄严、宁静的外观。',
          '现在的建筑建于1962年至1966年，由建筑师吴日树设计，他是第一位获得著名罗马大奖的越南人。统一宫的建筑融合了现代和传统亚洲元素，体现在竹纹、东方图案和开放的空间布局中，营造出优雅而平易近人的外观。',
          '统一宫内有100多个具有不同功能的房间，均按照1960-1970年代的奢华风格进行布置和装饰。游客可以参观重要房间，如：内阁会议室、接待大厅、总统办公室、宾客接待室、国书递交室等。每个房间都保留了原始的内饰、家具、通信设备，甚至军事地图，帮助参观者想象1975年之前越南共和国的政治和军事生活。另一个吸引人的地方是地下掩体区，有防空洞、无线电通信室，战时曾在这里进行指挥活动。这是许多游客特别喜爱的区域，因为它几乎完整地保留了历史氛围。',
          '统一宫是1975年4月30日象征性事件的发生地，当时390号坦克撞开正门，标志着西贡政权的垮台和战争的结束，国家统一。因此，这个地方被视为越南人民和平与自由的象征，也是国际游客到西贡时最常参观的旅游景点。凭借其独特的建筑、凉爽的绿色空间和深刻的历史价值，统一宫不仅是过去的建筑，也是帮助年轻一代更好地了解国家艰难而英勇历程的地方。'
        ],
        image: '/saigon-independence-palace-vietnam-historic.jpg',
        images: [
          '/saigon-independence-palace-vietnam-historic.jpg',
          '/Dinh2.jpg',
          '/Dinh3.jpg',
          '/Dinh4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/chtCBPrWWow9uW8s8'
      },
      {
        name: '战争遗迹博物馆',
        nameEnglish: 'War Remnants Museum',
        location: '胡志明市第三郡武文探街28号',
        description: '胡志明市战争遗迹博物馆（War Remnants Museum）位于第三郡武文探街28号，是该市最重要和最吸引人的旅游景点之一。',
        paragraphs: [
          '胡志明市战争遗迹博物馆（War Remnants Museum）位于第三郡武文探街28号，是该市最重要和最吸引人的旅游景点之一，特别是对于想了解越南战争历史的国际游客。该博物馆起源于1975年，旨在保存和展示反映战争后果以及越南人民不屈不挠斗争精神的文物、图像和文件。博物馆的建筑空间简单现代，但内部内容深刻，对和平价值具有强烈的教育意义。',
          '博物馆内有许多主题展览区，如："侵略战争罪行"室、"橙剂/二恶英后果"室、"昆岛监狱缩影"室，以及展示世界各地反战运动图像的展览室。最令人印象深刻的区域之一是橙剂证据区，展示关于二恶英受害者的图像和文物——这是战争给多代人留下的令人心碎但真实的证据。此外，游客还可以查看国际文件、曾获得普利策奖的许多著名摄影记者的新闻照片，提供对越南战争的客观视角。',
          '博物馆的户外区域特别吸引人，有许多真实的飞机、直升机、坦克、大炮和战争中使用的炸弹和地雷。诸如"虎笼"——法式和美式监狱——等模型重现了战时的严酷监禁方式，帮助游客更好地想象囚犯必须忍受的残酷。尽管内容沉重，战争遗迹博物馆仍然是一个重要的地方，帮助人们理解和平的价值和民族的牺牲。这个地方不仅是旅游景点，也是对过去的深刻提醒，让今天和未来的世代更加珍惜我们所拥有的自由、和平的生活。'
        ],
        image: '/war-remnants-museum-vietnam-saigon.jpg',
        mapUrl: 'https://maps.app.goo.gl/1wMS3vZso8VZrNDs5'
      },
      {
        name: '古芝地道',
        nameEnglish: 'Cu Chi Tunnels',
        location: '胡志明市古芝（距离胡志明市中心约70公里，西北方向）',
        description: '古芝地道是越南最著名的历史遗迹之一，位于胡志明市中心西北约70公里处。',
        paragraphs: [
          '古芝地道是越南最著名的历史遗迹之一，位于胡志明市中心西北约70公里处。这是一个独特的地下隧道系统，与抗美战争密切相关，被称为古芝军民的地下城市。地道始于1940年代抗法时期，到抗美时期得到扩建和加固，成为一个坚固的网络，延伸超过200公里，通过多个公社相互连接，连接着避难所、会议室、武器库和地下医疗站。',
          '隧道系统最特别的特点是设计精巧，完全手工制作但极其有效。隧道只有约80-100厘米高，70-80厘米宽，迫使人们必须弯腰或爬行才能移动。内部，地道被分成多层，具有天然防塌层，通风系统巧妙地伪装成白蚁丘或灌木丛，使美军几乎无法发现。此外，古芝人民和战士还布置了数百种竹陷阱、尖刺坑、秘密掩体等，形成了一个令敌人恐惧的天然防御系统。由于地道，解放力量可以隐藏、生活、战斗，然后突然出现攻击而不留下痕迹。',
          '如今，古芝地道已成为著名的历史旅游目的地，吸引了许多国内外游客。在这里，您将观看纪录片，聆听关于战争时期生活的讲解，参观为适应国际游客而扩建的隧道，观看黄琴厨房模型、会议掩体、战斗隧道和重现旧战场的区域。一个有趣的体验是爬行20-100米长的隧道，帮助游客感受过去士兵的艰辛。此外，旅游区还有一个国防体育射击场，游客可以在安全指导下尝试射击AK、M16、Rulo等枪支。古芝地道不仅是越南军事工程的独特遗产，也是战时人民不屈不挠精神、创造力和爱国主义的生动见证。'
        ],
        image: '/dd.jpg',
        images: [
          '/dd.jpg',
          '/dd2.jpg',
          '/dd3.jpg',
          '/dd4.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/hciUndXHfZHdkraC9'
      },
      {
        name: '中央邮局',
        nameEnglish: 'Central Post Office',
        location: '胡志明市第一郡巴黎公社街2号',
        description: '胡志明市中央邮局是西贡最经典、最突出的建筑之一，位于第一郡巴黎公社街2号，紧邻圣母院。',
        paragraphs: [
          '胡志明市中央邮局是西贡最经典、最突出的建筑之一，位于第一郡巴黎公社街2号，紧邻圣母院。建于19世纪末，约1886-1891年，该建筑由法国建筑师设计，采用欧洲建筑风格结合东方元素，不仅美观，而且深深烙印着城市的历史印记。',
          '邮局正面以经典的黄色色调、拱形窗户、装饰柱和精致的法式建筑风格细节而突出。正门上方是一个大钟——邮局一个多世纪以来熟悉的象征。走进内部，游客会被像欧洲火车站一样的巨大拱形空间所震撼，结合工业钢架结构，让人想起建筑师古斯塔夫·埃菲尔的设计风格。两侧墙壁上悬挂着古老的地图，如"1892年西贡及周边地区"和"1936年越南-柬埔寨电报线路"，这些是关于印度支那时期交通和电信历史的珍贵文献。',
          '中央邮局不仅是一座美丽的建筑，而且仍然正常运作。游客可以寄明信片、买邮票，或参观内部的小纪念品摊位购买手工艺品、绘画或西贡明信片。熟悉的景象之一是长木桌——邮局员工曾经工作的地方——现在被保留作为记忆的一部分。这里的空间总是热闹非凡，人流如织，拍照者络绎不绝，尤其是在节假日和春节期间。',
          '如今，中央邮局被视为西贡的文化-历史象征，游客可以感受到过去与现在的交汇。古老的建筑、特色的黄色和位于城市中心的位置，使其成为任何西贡之旅不可或缺的停靠点，特别是与紧邻的圣母院和阮文平书街结合时。这不仅是一个电信设施，也是130多年来城市历史流动和发展的见证。'
        ],
        image: '/bd.jpg',
        images: [
          '/bd.jpg',
          '/bd2.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/VSp7uD4kJ5qyPJWz8'
      },
      {
        name: '地标塔81',
        nameEnglish: 'Landmark 81',
        location: '胡志明市平盛郡Vinhomes中央公园都市区',
        description: '地标塔81是越南最高的建筑，曾位列亚洲最高建筑之一，位于平盛郡Vinhomes中央公园都市区，紧邻西贡河畔。',
        paragraphs: [
          '地标塔81是越南最高的建筑，曾位列亚洲最高建筑之一，位于平盛郡Vinhomes中央公园都市区，紧邻西贡河畔。该建筑于2018年完工，迅速成为胡志明市的新现代象征，代表着城市的活力发展。总高度461.2米，共81层，地标塔81不仅是一座建筑，更是一个国际级的建筑-娱乐-商业综合体。',
          '地标塔81的建筑灵感来自竹束的形象——象征着越南人民的团结和力量。建筑采用玻璃幕墙，反射整个城市景观，夜晚尤其璀璨。内部是一个高端设施综合体，包括Vincom Center地标塔81购物中心、Vinpearl Luxury五星级公寓-酒店、豪华餐厅、电影院、溜冰场、儿童游乐区和位于高层的天空酒吧系统。',
          '游客最想体验的亮点是位于79-81层的Landmark 81 SkyView观景台。从这里，您可以从近400米的高度欣赏胡志明市的全景，视野拥抱西贡河和中央各区。观景台区域还设有SkyTouch玻璃桥，游客可以"触摸天空"并拍摄令人惊叹的虚拟照片。踏上建筑的最高层，当看到西贡在脚下缩小，会带来一种震撼的感觉。',
          '不仅是旅游景点，地标塔81还是购物、餐饮和娱乐的理想场所。晚上在河滨公园区域，您可以漫步，欣赏璀璨的建筑，或享受浪漫的灯光反射在水面上的景象。凭借现代设计、高端服务和黄金位置，地标塔81如今已成为城市"天际线"的重要组成部分——21世纪西贡活力、能量和规模的象征。'
        ],
        image: '/lm1.jpg',
        images: [
          '/lm1.jpg',
          '/lm2.jpg',
          '/lm3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/fmd4N6SNmDGreA957'
      },
      {
        name: '阮惠步行街',
        nameEnglish: 'Nguyen Hue Walking Street',
        location: '胡志明市第一郡（从胡志明市人民委员会大楼到白藤码头）',
        description: '阮惠步行街位于第一郡中心，连接胡志明市人民委员会大楼和白藤码头，是西贡最热闹、最美丽的公共空间之一。',
        paragraphs: [
          '阮惠步行街位于第一郡中心，连接胡志明市人民委员会大楼和白藤码头，是西贡最热闹、最美丽的公共空间之一。这条街于2015年改造成步行街，迅速成为当地人和游客喜爱的娱乐、散步和拍照地点。这里的空间宽敞，全部铺有花岗岩，配有音乐喷泉系统、LED灯和两侧的绿树，营造出一条现代、年轻但仍保留西贡特色的街道。',
          '参观阮惠步行街最突出的特点之一是每个晚上和周末的热闹景象。数百名年轻人聚集表演街头艺术：弹吉他、跳舞、唱歌、轮滑、滑板等，营造出非常活跃的氛围。街道两侧是具有经典欧洲风格的建筑，特别是市人民委员会大楼在灯光照射下显得格外壮丽。从这里，您可以轻松看到高耸的Bitexco塔——西贡中心的现代亮点。',
          '步行街还与42阮惠公寓楼的形象联系在一起，这里聚集了数十家咖啡馆、时装店和面向街道的虚拟生活工作室。这是游客经常光顾的地方，可以在阳台上喝咖啡和拍照，欣赏步行街的全景。在重大节日如农历新年期间，这条街变得更加绚丽，成为阮惠花街，装饰着数千种花卉和每年主题的艺术模型，吸引大量游客前来参观。',
          '如今，阮惠步行街不仅是一条美丽、现代的街道，更是社区活动的中心：从节日、艺术表演、新年倒计时到城市的文化-娱乐活动。这是晚上散步、拍照、享受附近美食或简单感受西贡生活活力的理想场所。如果您想看到一个年轻、热闹、充满活力的西贡，阮惠步行街绝对是不可错过的目的地。'
        ],
        image: '/nh1.jpg',
        images: [
          '/nh1.jpg',
          '/nh2.jpg',
          '/nh3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/rL5zZxobU93PMZpY9'
      },
      {
        name: '龟湖',
        nameEnglish: 'Turtle Lake',
        location: '胡志明市第三郡范玉石-武文探-陈高云十字路口',
        description: '龟湖是西贡熟悉且具有标志性的地标之一，位于第三郡范玉石-武文探-陈高云的十字路口，距离市中心仅几分钟路程。',
        paragraphs: [
          '龟湖是西贡熟悉且具有标志性的地标之一，位于第三郡范玉石-武文探-陈高云的十字路口，距离市中心仅几分钟路程。虽然这个湖与旧时相比已经进行了相当多的改造，但"龟湖"这个名字仍然被人们保留作为特殊的记忆。这个区域既是年轻人纳凉、聚会的地方，也是一个与许多有趣历史故事相关的空间。',
          '"龟湖"这个名字来源于1960-1970年代曾经位于湖中央的一个乌龟形状雕塑。根据文献资料，这个区域曾经是一个带有大型喷泉的环形交叉路口，中央有一个金属乌龟雕像，背负着刻有传说中5位神话将军形象的石碑。然而，这座建筑在1970年代末被摧毁，如今只剩下小湖和现代喷泉。尽管如此，西贡人仍然习惯用旧名字称呼这个地方，以此保存城市的文历史之美。',
          '使龟湖成为年轻人喜爱地点的原因是凉爽的氛围、大量的绿树和非常宜人的开放空间，尤其是在晚上。湖周围有许多著名的小吃店，如混合米纸、烤米纸、串烧、奶茶等，创造了一个真正的"小吃天堂"。晚上，这个区域非常热闹，朋友们聚在一起聊天、拍照，或者简单地坐在湖边观看过往的交通——一个体现西贡街头生活精髓的场景。',
          '除了年轻的氛围，龟湖还位于西贡许多美丽建筑之间，如新定教堂、统一宫，并且只需步行几分钟即可到达其他繁华的街区。凭借其便利的位置、宜人的空间以及融合怀旧与现代的美感，龟湖已成为想要体验城市日常生活节奏的当地人和游客的熟悉目的地。这是一个理想的休息、纳凉、享受小吃和感受西贡特有的充满活力、年轻能量的地方。'
        ],
        image: '/cr1.jpg',
        images: [
          '/cr1.jpg',
          '/cr2.jpg',
          '/cr3.jpg'
        ],
        mapUrl: 'https://maps.app.goo.gl/Go6AwH86oyuBu3xj8'
      }
    ]
  }
};

export function getTranslations(language: Language): Translations {
  return translations[language];
}

export function getLandmarkById(language: Language, id: number): Landmark | null {
  const t = translations[language];
  if (id >= 0 && id < t.landmarks.length) {
    return t.landmarks[id];
  }
  return null;
}

export function getAllLandmarkIds(): number[] {
  // All languages have the same number of landmarks
  return translations.vi.landmarks.map((_, index) => index);
}
