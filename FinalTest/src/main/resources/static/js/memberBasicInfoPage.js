window.onload = function () {

	   let districtData = {
	     台北市: ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
	     新北市: ['板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '樹林區', '鶯歌區', '三峽區', '淡水區', '瑞芳區', '土城區', '蘆洲區', '五股區', '泰山區', '林口區', '深坑區', '石碇區', '坪林區', '三芝區', '石門區', '八里區', '平溪區', '雙溪區', '貢寮區', '金山區', '萬里區', '烏來區'],
	     桃園市: ['桃園區', '中壢區', '大溪區', '楊梅區', '蘆竹區', '大園區', '龜山區', '八德區', '龍潭區', '平鎮區', '新屋區', '觀音區', '復興區'],
	     台中市: ['中區', '東區', '南區', '西區', '北區', '西屯區', '南屯區', '北屯區', '豐原區', '大里區', '太平區', '清水區', '沙鹿區', '大甲區', '東勢區', '梧棲區', '烏日區', '神岡區', '大肚區', '大雅區', '后里區', '霧峰區', '潭子區', '龍井區', '外埔區', '和平區', '石岡區', '大安區', '新社區'],
	     台南市: ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '新市區', '仁德區', '柳營區', '麻豆區', '佳里區', '善化區', '安定區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '楠西區', '南化區', '山上區', '左鎮區', '玉井區', '龍崎區', '官田區', '大內區'],
	     高雄市: ['楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏區'],
	     基隆市: ['仁愛區', '信義區', '中正區', '中山區', '安樂區', '暖暖區', '七堵區'],
	     新竹縣: ['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '湖口鄉', '新豐鄉', '芎林鄉', '橫山鄉', '北埔鄉', '寶山鄉', '峨眉鄉', '尖石鄉', '五峰鄉'],
	     新竹市: ['東區', '北區', '香山區'],
	     苗栗縣: ['苗栗市', '苑裡鎮', '通霄鎮', '竹南鎮', '頭份市', '後龍鎮', '卓蘭鎮', '大湖鄉', '公館鄉', '銅鑼鄉', '南庄鄉', '頭屋鄉', '三義鄉', '西湖鄉', '造橋鄉', '三灣鄉', '獅潭鄉', '泰安鄉'],
	     彰化縣: ['彰化市', '鹿港鎮', '和美鎮', '線西鄉', '伸港鄉', '福興鄉', '秀水鄉', '花壇鄉', '芬園鄉', '大村鄉', '埔鹽鄉', '埔心鄉', '永靖鄉', '社頭鄉', '二水鄉', '北斗鎮', '二林鎮', '田中鎮', '田尾鄉', '埤頭鄉', '芳苑鄉', '大城鄉', '竹塘鄉', '溪州鄉', '溪湖鎮', '大溪鄉'],
	     南投縣: ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
	     雲林縣: ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '古坑鄉', '大埤鄉', '莿桐鄉', '林內鄉', '二崙鄉', '崙背鄉', '麥寮鄉', '東勢鄉', '褒忠鄉', '台西鄉', '元長鄉', '四湖鄉', '口湖鄉', '水林鄉'],
	     嘉義縣: ['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'],
	     嘉義市: ['東區', '西區'],
	     屏東縣: ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '三地門鄉', '霧台鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉'],
	     宜蘭縣: ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
	     花蓮縣: ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '富里鄉', '秀林鄉', '萬榮鄉', '卓溪鄉'],
	     台東縣: ['台東市', '成功鎮', '關山鎮', '卑南鄉', '鹿野鄉', '池上鄉', '東河鄉', '長濱鄉', '太麻里鄉', '大武鄉', '綠島鄉', '海端鄉', '延平鄉', '金峰鄉', '達仁鄉', '蘭嶼鄉'],
	     澎湖縣: ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
	     金門縣: ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
	     連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']
	   };

	   let taiwanZipCodes = {

	     '中正區': '100', '大同區': '103', '中山區': '104', '松山區': '105', '大安區': '106',
	     '萬華區': '108', '信義區': '110', '士林區': '111', '北投區': '112', '內湖區': '114',
	     '南港區': '115', '文山區': '116',
	     
	   
	     '板橋區': '220', '新莊區': '242', '中和區': '235', '永和區': '234', '土城區': '236',
	     '樹林區': '238', '三峽區': '237', '鶯歌區': '239', '三重區': '241', '蘆洲區': '247',
	     '五股區': '248', '泰山區': '243', '林口區': '244', '八里區': '249', '淡水區': '251',
	     '三芝區': '252', '石門區': '253', '金山區': '208', '萬里區': '207', '汐止區': '221',
	     '瑞芳區': '224', '貢寮區': '228', '平溪區': '226', '雙溪區': '227', '新店區': '231',
	     '深坑區': '222', '石碇區': '223', '坪林區': '232', '烏來區': '233',
	     
	   
	     '桃園區': '330', '中壢區': '320', '平鎮區': '324', '八德區': '334', '楊梅區': '326',
	     '蘆竹區': '338', '大溪區': '335', '龍潭區': '325', '龜山區': '333', '大園區': '337',
	     '觀音區': '328', '新屋區': '327', '復興區': '336',
	   
	   
	     '中區': '400', '東區': '401', '南區': '402', '西區': '403', '北區': '404',
	     '西屯區': '407', '南屯區': '408', '北屯區': '406', '豐原區': '420', '大里區': '412',
	     '太平區': '411', '清水區': '436', '沙鹿區': '433', '大甲區': '437', '東勢區': '423',
	     '梧棲區': '435', '烏日區': '414', '神岡區': '429', '大肚區': '432', '大雅區': '428',
	     '后里區': '421', '霧峰區': '413', '潭子區': '427', '龍井區': '434', '外埔區': '438',
	     '和平區': '424', '石岡區': '422', '大安區': '439', '新社區': '426',
	     
	    
	     '中西區': '700', '東區': '701', '南區': '702', '北區': '704', '安平區': '708',
	     '安南區': '709', '永康區': '710', '歸仁區': '711', '新化區': '712', '新市區': '744',
	     '仁德區': '717', '柳營區': '736', '麻豆區': '721', '佳里區': '722', '善化區': '741',
	     '安定區': '745', '西港區': '723', '七股區': '724', '將軍區': '725', '學甲區': '726',
	     '北門區': '727', '新營區': '730', '後壁區': '731', '白河區': '732', '東山區': '733',
	     '六甲區': '734', '下營區': '735', '楠西區': '715', '南化區': '716', '山上區': '743',
	     '左鎮區': '713', '玉井區': '714', '龍崎區': '719', '官田區': '720', '大內區': '742',
	     
	     
	     '楠梓區': '811', '左營區': '813', '鼓山區': '804', '三民區': '807', '鹽埕區': '803',
	     '前金區': '801', '新興區': '800', '苓雅區': '802', '前鎮區': '806', '小港區': '812',
	     '旗津區': '805', '鳳山區': '830', '大寮區': '831', '鳥松區': '833', '林園區': '832',
	     '仁武區': '814', '大樹區': '840', '大社區': '815', '岡山區': '820', '路竹區': '821',
	     '橋頭區': '825', '梓官區': '826', '彌陀區': '827', '永安區': '828', '燕巢區': '824',
	     '田寮區': '823', '阿蓮區': '822', '茄萣區': '852', '湖內區': '829', '旗山區': '842',
	     '美濃區': '843', '內門區': '845', '杉林區': '846', '甲仙區': '847', '六龜區': '844',
	     '茂林區': '851', '桃源區': '848', '那瑪夏區': '849',
	    
	   
	     '仁愛區': '200', '信義區': '201', '中正區': '202', '中山區': '203', '安樂區': '204',
	     '暖暖區': '205', '七堵區': '206',
	     
	   
	     '竹北市': '302', '竹東鎮': '310', '新埔鎮': '305', '關西鎮': '306', '湖口鄉': '303',
	     '新豐鄉': '304', '芎林鄉': '307', '橫山鄉': '312', '北埔鄉': '314', '寶山鄉': '308',
	     '峨眉鄉': '315', '尖石鄉': '313', '五峰鄉': '311',
	     
	   
	     '東區': '300', '北區': '300', '香山區': '300',
	     
	    
	     '苗栗市': '360', '苑裡鎮': '358', '通霄鎮': '357', '竹南鎮': '350', '頭份市': '351',
	     '後龍鎮': '356', '卓蘭鎮': '369', '大湖鄉': '364', '公館鄉': '363', '銅鑼鄉': '366',
	     '南庄鄉': '353', '頭屋鄉': '362', '三義鄉': '367', '西湖鄉': '368', '造橋鄉': '361',
	     '三灣鄉': '352', '獅潭鄉': '354', '泰安鄉': '365',
	     
	     
	     '彰化市': '500', '鹿港鎮': '505', '和美鎮': '508', '線西鄉': '507', '伸港鄉': '509',
	     '福興鄉': '506', '秀水鄉': '504', '花壇鄉': '503', '芬園鄉': '502', '大村鄉': '515',
	     '埔鹽鄉': '516', '埔心鄉': '513', '永靖鄉': '512', '社頭鄉': '511', '二水鄉': '530',
	     '北斗鎮': '521', '二林鎮': '526', '田中鎮': '520', '田尾鄉': '522', '埤頭鄉': '523',
	     '芳苑鄉': '528', '大城鄉': '527', '竹塘鄉': '525', '溪州鄉': '524', '溪湖鎮': '514',
	     
	    
	     '南投市': '540', '埔里鎮': '545', '草屯鎮': '542', '竹山鎮': '557', '集集鎮': '552',
	     '名間鄉': '551', '鹿谷鄉': '558', '中寮鄉': '541', '魚池鄉': '555', '國姓鄉': '544',
	     '水里鄉': '553', '信義鄉': '556', '仁愛鄉': '546',
	     
	   
	     '斗六市': '640', '斗南鎮': '630', '虎尾鎮': '632', '西螺鎮': '648', '土庫鎮': '633',
	     '北港鎮': '651', '古坑鄉': '646', '大埤鄉': '631', '莿桐鄉': '647', '林內鄉': '643',
	     '二崙鄉': '649', '崙背鄉': '637', '麥寮鄉': '638', '東勢鄉': '635', '褒忠鄉': '634',
	     '台西鄉': '636', '元長鄉': '655', '四湖鄉': '654', '口湖鄉': '653', '水林鄉': '652',
	     
	   
	     '太保市': '612', '朴子市': '613', '布袋鎮': '625', '大林鎮': '622', '民雄鄉': '621',
	     '溪口鄉': '623', '新港鄉': '616', '六腳鄉': '615', '東石鄉': '614', '義竹鄉': '624',
	     '鹿草鄉': '611', '水上鄉': '608', '中埔鄉': '606', '竹崎鄉': '604', '梅山鄉': '603',
	     '番路鄉': '602', '大埔鄉': '607', '阿里山鄉': '605',
	   
	     '東區': '600', '西區': '600',
	     
	   
	     '屏東市': '900', '潮州鎮': '920', '東港鎮': '928', '恆春鎮': '946', '萬丹鄉': '913',
	     '長治鄉': '908', '麟洛鄉': '909', '九如鄉': '904', '里港鄉': '905', '鹽埔鄉': '907',
	     '高樹鄉': '906', '萬巒鄉': '923', '內埔鄉': '912', '竹田鄉': '911', '新埤鄉': '925',
	     '枋寮鄉': '940', '新園鄉': '932', '崁頂鄉': '924', '林邊鄉': '927', '南州鄉': '926',
	     '佳冬鄉': '931', '琉球鄉': '929', '車城鄉': '944', '滿州鄉': '947', '枋山鄉': '941',
	     '三地門鄉': '901', '霧臺鄉': '902', '瑪家鄉': '903', '泰武鄉': '921', '來義鄉': '922',
	     '春日鄉': '942', '獅子鄉': '943', '牡丹鄉': '945',
	    
	     '宜蘭市': '260', '羅東鎮': '265', '蘇澳鎮': '270', '頭城鎮': '261', '礁溪鄉': '262',
	     '壯圍鄉': '263', '員山鄉': '264', '冬山鄉': '269', '五結鄉': '268', '三星鄉': '266',
	     '大同鄉': '267', '南澳鄉': '272',
	     
	   
	     '花蓮市': '970', '鳳林鎮': '975', '玉里鎮': '981', '新城鄉': '971', '吉安鄉': '973',
	     '壽豐鄉': '974', '光復鄉': '976', '豐濱鄉': '977', '瑞穗鄉': '978', '富里鄉': '983',
	     '秀林鄉': '972', '萬榮鄉': '979', '卓溪鄉': '982',
	   
	     '台東市': '950', '成功鎮': '961', '關山鎮': '956', '卑南鄉': '954', '鹿野鄉': '955',
	     '池上鄉': '958', '東河鄉': '959', '長濱鄉': '962', '太麻里鄉': '963', '大武鄉': '965',
	     '綠島鄉': '951', '海端鄉': '957', '延平鄉': '953', '金峰鄉': '964', '達仁鄉': '966',
	     '蘭嶼鄉': '952',
	     
	   
	     '馬公市': '880', '湖西鄉': '885', '白沙鄉': '884', '西嶼鄉': '881', '望安鄉': '882',
	     '七美鄉': '883',
	     
	   
	     '金城鎮': '893', '金湖鎮': '891', '金沙鎮': '890', '金寧鄉': '892', '烈嶼鄉': '894', '烏坵鄉': '896',
	   
	     '南竿鄉': '209', '北竿鄉': '210', '莒光鄉': '211', '東引鄉': '212'
	   }
	   
	   let userId = null;
	   let password = '';
	   

	   


	   document.getElementById("county").addEventListener('change', (event) => {
	     let county = event.target.value;
		 populateDistrictOptions(county);
	   });

	   document.getElementById("district").addEventListener('change', (event) => {
	     let district = event.target.value;
	     let zipInput = document.getElementById("zipCode");
	     let zipCode = taiwanZipCodes[district];  
	     zipInput.value = zipCode;
	   });


	    let populateDistrictOptions = (county) =>  {
			let districtSelect = document.getElementById("district");
			districtSelect.innerHTML = '<option value="">選擇市/區</option>';
			if (districtData[county]) {
				districtData[county].forEach((district) => {
					let option = document.createElement('option');
					option.value = district;
					option.textContent = district;
					districtSelect.appendChild(option);
				});
			}
		}

	   fetch('/users/userAllInfo',{
	     method : 'GET'
	   }).then(response => {
	     if(!response.ok){
	       console.log('查詢會員失敗')
	     }
	     return response.json();
	   }).then(data => {
	     userId = data.userId;
	     document.getElementById("userName").value = data.username;
	     document.getElementById("email").value = data.email;
	     document.getElementById("telephone").value = data.phoneNumber;
	     document.getElementById("firstName").value = data.firstName;
	     document.getElementById("lastName").value = data.lastName;
	     document.getElementById("address").value = data.address;
	     document.getElementById("county").value = data.county;
		 populateDistrictOptions(data.county);
	     document.getElementById("district").value = data.district;
	     document.getElementById("zipCode").value = data.postalCode;
	     document.getElementById("birthday").value = data.birthday;
	   }).catch(error => {
	     console.log('error', error)
	   });




	   document.getElementById("updateButton").addEventListener("click", () => {
	     let userName = document.getElementById("userName").value;
	     let email = document.getElementById("email").value;
	     let telephone = document.getElementById("telephone").value;
	     let firstName = document.getElementById("firstName").value;
	     let lastName = document.getElementById("lastName").value;
	     let address = document.getElementById("address").value;
	     let county = document.getElementById("county").value;
	     let district = document.getElementById("district").value;
	     let zipCode = document.getElementById("zipCode").value;
	     let birthday = document.getElementById("birthday").value;
	    
	     fetch('/users/update',{
	       method : 'POST',
	       headers : {'Content-Type' : 'application/json'},
	       body : JSON.stringify({
	         userId : userId,
	         username : userName,
	         email : email,
	         password : password,
	         phoneNumber : telephone,
	         firstName : firstName,
	         lastName : lastName,
	         address : address,
	         postalCode : zipCode,
	         county : county,
	         district : district,
	         birthday : birthday
	       })
	     }).then(response => {
	       if(!response.ok){
			throw new Error('Error:');
		   }
		   return response.json();
	     }).then(data => {
			if(data){
				alert('會員資料更新成功');
				fetch('/users/userAllInfo',{
					method : 'GET'
				  }).then(response => {
					if(!response.ok){
					  console.log('查詢會員失敗')
					}
					return response.json();
				  }).then(data => {
					userId = data.userId;
					document.getElementById("userName").value = data.username;
					document.getElementById("email").value = data.email;
					document.getElementById("telephone").value = data.phoneNumber;
					document.getElementById("firstName").value = data.firstName;
					document.getElementById("lastName").value = data.lastName;
					document.getElementById("address").value = data.address;
					document.getElementById("county").value = data.county;
					document.getElementById("district").value = data.district;
					document.getElementById("zipCode").value = data.postalCode;
					document.getElementById("birthday").value = data.birthday;
					window.location.href = '/memberBasicInfoPage';
				  }).catch(error => {
					console.log('error', error)
				  });

			}else{
				alert('會員資料更新失敗,請稍後在試!!');
			}
		 })
	     
	   });

	 document.getElementById('deleteButton').addEventListener("click", () => {
		fetch('/users/deleteUser',{
			method : 'GET',
		}).then(response => {
			if(!response.ok){
				throw new Error('Error:');
			}
			return response.json();
		}).then(data => {
			console.log('返回的int:' + data);
			if(data > 0){
				alert('成功刪除');
				window.location.href = '/enjoyum';
			}
		}).catch(error => {
			console.log('error:', error);
		})
	 });
   
   };
