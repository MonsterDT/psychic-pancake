

  // ============================================================
  // MakeupPal Demo Data (V3.0 瀹屾暣鐗?- 12澶фā鍧?
  // ============================================================
  /**
   * ============================================================
   * 濡嗕即 MakeupPal Demo 绀轰緥璧勬枡搴?   * 鐗堟湰: v3.4
   * 鐢ㄩ€? 鎻愪緵 MakeupPal App 鎵€鏈夋ā鍧楃殑瀹屾暣婕旂ず鏁版嵁
   * 浣跨敤鏂瑰紡:
   *   1. 娴忚鍣ㄧ幆澧? <script src="makeuppal-demo-data.js"><\/script>
   *      鐩存帴浣跨敤鍏ㄥ眬鍙橀噺 MakeupPalData
   *   2. Node 鐜: const MakeupPalData = require('./makeuppal-demo-data.js');
   * ============================================================
   */

  const MakeupPalData = {

    // ============================================================
    // 1. libraryFeed 鈥?棰滃簱鐎戝竷娴佸唴瀹癸紙V3.0 涓冧釜瀛愮被鐩級
    // ============================================================
    libraryFeed: {

      // 1.1 杈句汉绮鹃€?      creators: [
        { id: 'c001', title: '鏃╁叓閫氬嫟濡?鍒嗛挓鎼炲畾', coverImage: 'coverCreator1', creatorName: '灏忛箍缇庡', creatorAvatar: 'coverCreator1', likes: 12800, collections: 3400, category: '鏃ュ父濡?, tag: '閫氬嫟' },
        { id: 'c002', title: '娴撻绯诲崈閲戝', coverImage: 'coverCreator2', creatorName: '闃跨传鐨勭編瀛︽棩璁?, creatorAvatar: 'coverCreator2', likes: 25600, collections: 8900, category: '鏅氬濡?, tag: '鍗冮噾' },
        { id: 'c003', title: '绾鐧藉紑姘村', coverImage: 'coverCreator3', creatorName: '妗冨瓙杞硸', creatorAvatar: 'coverCreator3', likes: 45200, collections: 15600, category: '鏃ュ父濡?, tag: '绾' },
        { id: 'c004', title: '閽撶郴寰″濡?, coverImage: 'coverCreator4', creatorName: 'Vivi makeup', creatorAvatar: 'coverCreator4', likes: 18900, collections: 5200, category: '杞荤啛濡?, tag: '寰″' },
        { id: 'c005', title: '闊╃郴濂抽珮濡?, coverImage: 'coverCreator5', creatorName: '姗欏瓙姘旀场姘?, creatorAvatar: 'coverCreator5', likes: 32100, collections: 11200, category: '瀛﹂櫌濡?, tag: '闊╃郴' },
        { id: 'c006', title: '缇庢媺寰风鍐', coverImage: 'coverCreator6', creatorName: '绉嬬缇庡', creatorAvatar: 'coverCreator6', likes: 21500, collections: 7800, category: '瀛ｈ妭濡?, tag: '缇庢媺寰? },
        { id: 'c007', title: 'Clean Makeup 娓呴€忚８濡?, coverImage: 'coverCreator7', creatorName: 'Minimal Beauty', creatorAvatar: 'coverCreator7', likes: 16700, collections: 4500, category: '瑁稿', tag: 'clean' },
        { id: 'c008', title: '鏂颁腑寮忔竻鍐峰', coverImage: 'coverCreator8', creatorName: '闈掔摲缇庡', creatorAvatar: 'coverCreator8', likes: 28900, collections: 9800, category: '鍥介濡?, tag: '鏂颁腑寮? },
        { id: 'c009', title: '娓澶嶅彜濡?, coverImage: 'coverCreator9', creatorName: '鐜懓涓庨粍鏄?, creatorAvatar: 'coverCreator9', likes: 19800, collections: 6700, category: '澶嶅彜濡?, tag: '娓' },
        { id: 'c010', title: '娉板紡娴撻濡?, coverImage: 'coverCreator10', creatorName: '娉板叞寰峰コ瀛?, creatorAvatar: 'coverCreator10', likes: 14500, collections: 4100, category: '杞荤啛濡?, tag: '娉板紡' },
        { id: 'c011', title: '鏃ユ潅鎰熼€忔槑濡?, coverImage: 'coverCreator11', creatorName: '妫粯濂?, creatorAvatar: 'coverCreator11', likes: 23400, collections: 8900, category: '瑁稿', tag: '鏃ユ潅' },
        { id: 'c012', title: 'Y2K鍗冪Η濡?, coverImage: 'coverCreator12', creatorName: 'CyberPink', creatorAvatar: 'coverCreator12', likes: 31200, collections: 13400, category: '鍒涙剰濡?, tag: 'Y2K' },
        { id: 'c013', title: '鑺暰灏戝コ濡?, coverImage: 'coverCreator13', creatorName: '澶╅箙缁?, creatorAvatar: 'coverCreator13', likes: 27600, collections: 10200, category: '鐢滅編濡?, tag: '鑺暰' },
        { id: 'c014', title: '鑰侀挶闈欏ア濡?, coverImage: 'coverCreator14', creatorName: 'OldMoney缇庡', creatorAvatar: 'coverCreator14', likes: 13400, collections: 3800, category: '杞荤啛濡?, tag: '闈欏ア' },
        { id: 'c015', title: '澶氬反鑳哄厓姘斿', coverImage: 'coverCreator15', creatorName: '褰╄櫣绯?, creatorAvatar: 'coverCreator15', likes: 38900, collections: 16700, category: '鍒涙剰濡?, tag: '澶氬反鑳? },
        { id: 'c016', title: '灏忕儫鐔忚交娆х編濡?, coverImage: 'coverCreator16', creatorName: 'NANA Makeup', creatorAvatar: 'coverCreator16', likes: 22100, collections: 7600, category: '杞荤啛濡?, tag: '杞绘缇? },
        { id: 'c017', title: '娣￠绯荤櫧寮€姘?.0', coverImage: 'coverCreator3', creatorName: '鐧藉紑姘村コ瀛?, creatorAvatar: 'coverCreator3', likes: 19800, collections: 6500, category: '鏃ュ父濡?, tag: '娣￠' },
        { id: 'c018', title: '姘旇鎰熶笢鏂瑰', coverImage: 'coverCreator8', creatorName: '涓滄柟鑼夎帀', creatorAvatar: 'coverCreator8', likes: 25600, collections: 9200, category: '鍥介濡?, tag: '姘旇鎰? }
      ],

      // 1.2 灞€閮ㄦ媶瑙?      tutorials: [
        { id: 't001', title: '鏂版墜蹇呭鐨?绉嶇溂绾跨敾娉?, coverImage: 'coverTutorial1', category: '鐪煎', difficulty: 2, duration: '5鍒嗛挓', suitableFor: ['鏂版墜', '鎵嬫畫鍏?], effect: '鑷劧鏀惧ぇ鍙岀溂', likes: 18900, tag: '鐪肩嚎' },
        { id: 't002', title: '鍗曠溂鐨秷鑲跨溂褰卞叕寮?, coverImage: 'coverTutorial2', category: '鐪煎', difficulty: 3, duration: '8鍒嗛挓', suitableFor: ['鍗曠溂鐨?, '鑲跨溂娉?], effect: '娑堣偪娣遍們', likes: 23400, tag: '鐪煎奖' },
        { id: 't003', title: '濡堢敓鎰熷崸铓曠敾娉?, coverImage: 'coverTutorial3', category: '鐪煎', difficulty: 2, duration: '4鍒嗛挓', suitableFor: ['鍏ㄨ偆璐?, '鏂版墜'], effect: '骞兼€佸噺榫?, likes: 31200, tag: '鍗ц殨' },
        { id: 't004', title: '澶槼鑺辩潾姣涙暀绋?, coverImage: 'coverTutorial4', category: '鐪煎', difficulty: 3, duration: '10鍒嗛挓', suitableFor: ['鐭潾姣?, '涓嬪瀭鐪?], effect: '鏍规牴鍒嗘槑鍗风繕', likes: 27600, tag: '鐫瘺' },
        { id: 't005', title: '楠ㄧ浉淇娉?, coverImage: 'coverTutorial5', category: '淇', difficulty: 4, duration: '12鍒嗛挓', suitableFor: ['鍦嗚劯', '鏂硅劯'], effect: '绔嬩綋灏忚劯', likes: 19800, tag: '淇' },
        { id: 't006', title: '绾鍢熷槦鍞囨暀绋?, coverImage: 'coverTutorial6', category: '鍞囧', difficulty: 2, duration: '5鍒嗛挓', suitableFor: ['钖勫攪', '鏂版墜'], effect: '楗辨弧姘存鼎', likes: 28900, tag: '鍞囧' },
        { id: 't007', title: '閲庣敓鐪夌敾娉?, coverImage: 'coverTutorial7', category: '鐪夊舰', difficulty: 3, duration: '8鍒嗛挓', suitableFor: ['鐪夋瘺绋€鐤?, '鏃犵湁鏄熶汉'], effect: '姣涙祦鎰熻嚜鐒?, likes: 24500, tag: '鐪夋瘺' },
        { id: 't008', title: '姘涘洿鎰熻叜绾㈡墦娉?, coverImage: 'coverTutorial8', category: '鑵孩', difficulty: 2, duration: '5鍒嗛挓', suitableFor: ['鍏ㄨ劯鍨?], effect: '濂芥皵鑹叉皼鍥?, likes: 16700, tag: '鑵孩' },
        { id: 't009', title: '榛戠溂鍦堟唱娌熼伄鐟曟湳', coverImage: 'coverTutorial9', category: '搴曞', difficulty: 4, duration: '10鍒嗛挓', suitableFor: ['鐔鍏?, '榛戠溂鍦堥噸'], effect: '鐪煎懆骞插噣骞虫暣', likes: 35600, tag: '閬憰' },
        { id: 't010', title: '闆舵瘺瀛斿簳濡嗙绫?, coverImage: 'coverTutorial10', category: '搴曞', difficulty: 3, duration: '12鍒嗛挓', suitableFor: ['娌圭毊', '姣涘瓟绮楀ぇ'], effect: '鏌旂劍纾ㄧ毊', likes: 21300, tag: '搴曞' },
        { id: 't011', title: '鐪肩潙涓嬭嚦鏀惧ぇ鏈?, coverImage: 'coverTutorial1', category: '鐪煎', difficulty: 3, duration: '7鍒嗛挓', suitableFor: ['灏忕溂鐫?, '鐪艰窛瀹?], effect: '绾靛悜鏀惧ぇ鍙岀溂', likes: 19800, tag: '鐪煎' },
        { id: 't012', title: '3鍒嗛挓蹇€熷嚭闂ㄥ', coverImage: 'coverTutorial10', category: '搴曞', difficulty: 1, duration: '3鍒嗛挓', suitableFor: ['涓婄彮鏃?, '瀛︾敓鍏?], effect: '鎻愭皵鑹蹭吉绱犻', likes: 42300, tag: '蹇€熷' },
        { id: 't013', title: '闊╁姘村厜鑲岀璇€', coverImage: 'coverTutorial10', category: '搴曞', difficulty: 3, duration: '10鍒嗛挓', suitableFor: ['骞茬毊', '娣峰悎鐨?], effect: '閫忎寒姘村厜鎰?, likes: 26700, tag: '姘村厜鑲? },
        { id: 't014', title: '鎴柇寮忔缇庣溂濡?, coverImage: 'coverTutorial2', category: '鐪煎', difficulty: 5, duration: '20鍒嗛挓', suitableFor: ['鍙岀溂鐨?, '鐜╁鍏?], effect: '娣遍們鎴柇杞粨', likes: 14500, tag: '鎴柇寮? },
        { id: 't015', title: '鍑忛緞鑻规灉鑲岄珮鍏?, coverImage: 'coverTutorial5', category: '淇', difficulty: 2, duration: '4鍒嗛挓', suitableFor: ['闈腑鍑归櫡', '闀胯劯'], effect: '楗辨弧骞磋交鎬?, likes: 18900, tag: '楂樺厜' },
        { id: 't016', title: '鏌旈浘鎰熷攪濡嗙敾娉?, coverImage: 'coverTutorial6', category: '鍞囧', difficulty: 2, duration: '5鍒嗛挓', suitableFor: ['娣卞攪', '鍞囩汗鏄庢樉'], effect: '鏌旈浘鏄剧櫧', likes: 15600, tag: '鍞囨偿' },
        { id: 't017', title: '鏂版墜淇湁鎸囧崡', coverImage: 'coverTutorial7', category: '鐪夊舰', difficulty: 1, duration: '6鍒嗛挓', suitableFor: ['鏂版墜', '鏉傜湁'], effect: '鐪夊舰骞插噣瀵圭О', likes: 28900, tag: '淇湁' },
        { id: 't018', title: '鍐呭弻鑲跨溂娉＄溂绾挎硶', coverImage: 'coverTutorial1', category: '鐪煎', difficulty: 3, duration: '8鍒嗛挓', suitableFor: ['鍐呭弻', '鑲跨溂娉?], effect: '闅愬舰鏈夌', likes: 32100, tag: '鍐呭弻' }
      ],

      // 1.3 缇庡闂瓟
      qa: [
        { id: 'q001', question: '娌圭毊澶忓ぉ鎬庝箞瀹氬涓嶈劚濡嗭紵', summary: '鎺ф补濡嗗墠+鐑樼剻瀹氬+瀹氬鍠烽浘涓夋娉?, coverImage: 'coverTutorial10', answerCount: 156, viewCount: 128000, category: '搴曞', authorName: '娌圭毊鏁戞槦', authorAvatar: 'coverTutorial10' },
        { id: 'q002', question: '鏁忔劅鑲岃兘鐢ㄤ粈涔堢編鐧界簿鍗庯紵', summary: '鎺ㄨ崘娓╁拰VC琛嶇敓鐗╁拰浼犳槑閰告垚鍒?, coverImage: 'coverCreator7', answerCount: 89, viewCount: 76000, category: '鎶よ偆', authorName: '鎴愬垎鍏氬皬缇?, authorAvatar: 'coverCreator7' },
        { id: 'q003', question: '鑲跨溂娉￠€傚悎浠€涔堢溂褰遍鑹诧紵', summary: '鍝戝厜澶у湴鑹叉秷鑲匡紝閬垮厤鐝犲厜鍜屽ぇ浜墖', coverImage: 'coverTutorial2', answerCount: 234, viewCount: 198000, category: '鐪煎', authorName: '鐪煎鐮旂┒鎵€', authorAvatar: 'coverTutorial2' },
        { id: 'q004', question: '瀛︾敓鍏氱涓€濂楀寲濡嗗搧鎬庝箞閫夛紵', summary: '棰勭畻500鍏冨唴鍏ㄥ鎼厤鏂规', coverImage: 'coverCreator5', answerCount: 567, viewCount: 345000, category: '鏂版墜', authorName: '鐪侀挶灏忚兘鎵?, authorAvatar: 'coverCreator5' },
        { id: 'q005', question: '骞茬毊绮夊簳娑叉€绘槸鍗＄矇鎬庝箞鍔烇紵', summary: '濡嗗墠淇濇箍+绮炬补娣峰悎+婀跨矇鎵戜笂濡?, coverImage: 'coverTutorial10', answerCount: 312, viewCount: 256000, category: '搴曞', authorName: '骞茬毊瀹堟姢鑰?, authorAvatar: 'coverTutorial10' },
        { id: 'q006', question: '榛勭毊娑備粈涔堝彛绾㈡渶鏄剧櫧锛?, summary: '姗樿皟绾㈡銆佽摑璋冩绾㈡樉鐧戒笉韪╅浄', coverImage: 'coverTutorial6', answerCount: 445, viewCount: 412000, category: '鍞囧', authorName: '鍙ｇ孩璇曡壊鍛?, authorAvatar: 'coverTutorial6' },
        { id: 'q007', question: '姣涘瓟绮楀ぇ鑳介潬鍖栧閬綇鍚楋紵', summary: '纭呯被濡嗗墠+绮夊簳娑查€嗗悜娑傛姽+灞€閮ㄩ伄鐟?, coverImage: 'coverTutorial9', answerCount: 198, viewCount: 167000, category: '搴曞', authorName: '姣涘瓟闅愬舰甯?, authorAvatar: 'coverTutorial9' },
        { id: 'q008', question: '鏂版墜鎬庝箞鐢荤湁姣涘绉帮紵', summary: '涓夌偣瀹氫綅娉?鐪夌矇濉厖+鐪夌瑪琛ユ瘺娴?, coverImage: 'coverTutorial7', answerCount: 276, viewCount: 223000, category: '鐪夊舰', authorName: '瀵圭О寮鸿揩鐥?, authorAvatar: 'coverTutorial7' },
        { id: 'q009', question: '娉曚护绾规繁鎬庝箞閬憰涓嶅崱绾癸紵', summary: '杞昏杽閬憰娑?鍨傜洿杞绘媿+瀹氬鍠烽浘', coverImage: 'coverTutorial9', answerCount: 134, viewCount: 98000, category: '閬憰', authorName: '閫嗛緞榄旀硶甯?, authorAvatar: 'coverTutorial9' },
        { id: 'q010', question: '鍗稿娌瑰拰鍗稿鑶忓摢涓洿濂斤紵', summary: '娴撳閫夊嵏濡嗘补锛屾棩甯搁€夊嵏濡嗚啅锛屾晱鎰熻倢閬垮紑棣欑簿', coverImage: 'coverCreator7', answerCount: 189, viewCount: 145000, category: '鎶よ偆', authorName: '娓呮磥涓撳', authorAvatar: 'coverCreator7' },
        { id: 'q011', question: '鐫瘺鑶忔€绘槸鏅曟煋鍒颁笅鐪肩毊锛?, summary: '鐫瘺澶圭繕+鐫瘺鎵撳簳+闃叉按鐫瘺鑶?鐑樼剻瀹氬', coverImage: 'coverTutorial4', answerCount: 245, viewCount: 189000, category: '鐪煎', authorName: '鎶楁檿鏌撴垬澹?, authorAvatar: 'coverTutorial4' },
        { id: 'q012', question: '娣锋补鐨甌鍖烘补涓ら骞叉€庝箞涓婂锛?, summary: '鍒嗗尯鎶ょ悊+涓嶅悓绮夊簳娑叉贩鍚?鍒嗗尯瀹氬', coverImage: 'coverTutorial10', answerCount: 167, viewCount: 134000, category: '搴曞', authorName: '娣峰悎鐨晳鏄?, authorAvatar: 'coverTutorial10' },
        { id: 'q013', question: '鍗曠溂鐨€庝箞鐢荤溂褰变笉鏄捐剰锛?, summary: '娴呰壊澶ч潰绉摵搴?娣辫壊浠呭姞娣辩溂灏?閬垮厤娣辫壊涓婄溂绐?, coverImage: 'coverTutorial2', answerCount: 298, viewCount: 234000, category: '鐪煎', authorName: '鍗曠溂鐨崥涓?, authorAvatar: 'coverTutorial2' },
        { id: 'q014', question: '鏁ｇ矇鍜岀矇楗煎摢涓畾濡嗗ソ锛?, summary: '鏁ｇ矇杞昏杽鑷劧锛岀矇楗奸伄鐟曞姏寮猴紝娌圭毊涓よ€呭彔鍔?, answerCount: 356, viewCount: 278000, category: '搴曞', authorName: '瀹氬澶у笀', authorAvatar: 'coverTutorial10' },
        { id: 'q015', question: '鏂版墜闇€瑕佷拱鍖栧鍒峰悧锛?, summary: '蹇呭4鎶婏細绮夊簳鍒枫€佺溂褰卞埛銆佽叜绾㈠埛銆佹暎绮夊埛', coverImage: 'coverCreator5', answerCount: 412, viewCount: 312000, category: '鏂版墜', authorName: '宸ュ叿鎺?, authorAvatar: 'coverCreator5' }
      ],

      // 1.4 鍥介涓撳尯
      guofeng: [
        { id: 'g001', title: '鍞愬锛氳姳閽胯创闈紝澶ф皵闆嶅', coverImage: 'coverGuofeng1', dynasty: '鍞愪唬', technique: '鑺遍捒銆佹枩绾€侀潰闈?, description: '浠ラ闂磋姳閽夸负鐐圭潧涔嬬瑪锛岄厤鍚堝ぇ闈㈢Н鑵孩涓庢祿榛戠湁褰紝灞曠幇澶у攼鐩涗笘鐨勯鍗庣粷浠ｃ€?, likes: 18900, tag: '鍞愬' },
        { id: 'g002', title: '瀹嬪锛氱弽鐝犲闈ワ紝娓呴泤鍚搫', coverImage: 'coverGuofeng2', dynasty: '瀹嬩唬', technique: '鐝嶇彔璐撮潰銆佺粏鐪夈€佹贰濡?, description: '瀹嬩唬濂冲瓙浠ョ礌闆呬负缇庯紝鐝嶇彔鐐圭紑闈㈤锛岀粏寮湁濡傝繙灞卞惈榛涳紝灏芥樉鏂囦汉闆呰叮銆?, likes: 15600, tag: '瀹嬪' },
        { id: 'g003', title: '鏁︾厡椋炲ぉ濡嗭細閲戠當璐撮潰锛屽紓鍩熼鎯?, coverImage: 'coverGuofeng3', dynasty: '鏁︾厡', technique: '閲戠當銆佸僵缁樸€侀珮鍙戦', description: '鐏垫劅婧愯嚜鏁︾厡澹佺敾椋炲ぉ绁炲コ锛岄噾绠旇创闈㈤厤閲嶅僵鐪煎锛屼粰姘旈椋樸€?, likes: 23400, tag: '鏁︾厡' },
        { id: 'g004', title: '鎴忔洸闈掕。濡嗭細姘磋。姘磋锛岀湁鐪间紶鎯?, coverImage: 'coverGuofeng4', dynasty: '鎴忔洸', technique: '鍚婄湁銆佸嚖鐪笺€佽创鐗?, description: '浜墽闈掕。缁忓吀濡嗗锛屽悐鐪夊嚖鐪兼樉鑻辨皵锛屾按琚栬交鎵棿灏芥樉涓滄柟绁為煹銆?, likes: 12300, tag: '鎴忔洸' },
        { id: 'g005', title: '鏄庡锛氭鑺卞闈紝绔簞绉€涓?, coverImage: 'coverGuofeng5', dynasty: '鏄庝唬', technique: '妗冭姳濡嗐€佹煶鍙剁湁銆佺偣鍞?, description: '鏄庝唬濂冲瓙鍋忓ソ妗冭姳鑹查潰棰婏紝鏌冲彾缁嗙湁閰嶆ū妗冨皬鍙ｏ紝绔簞鍙堜笉澶卞▏濯氥€?, likes: 14500, tag: '鏄庡' },
        { id: 'g006', title: '榄忔檵椋庨锛氭竻鏃烽閫革紝绱犻潰鏈濆ぉ', coverImage: 'coverGuofeng6', dynasty: '榄忔檵', technique: '绱犻銆佸箍鐪夈€佺櫧濡?, description: '榄忔檵鍚嶅＋宕囧皻鑷劧锛屽コ瀛愬瀹逛篃浠ョ礌闆呬负涓伙紝骞跨湁鐧藉灏芥樉椋橀€搁楠ㄣ€?, likes: 11200, tag: '榄忔檵' },
        { id: 'g007', title: '姹変唬绾㈠锛氳儹鑴傛暦闈紝鍞囪嫢鏈变腹', coverImage: 'coverGuofeng7', dynasty: '姹変唬', technique: '鑳剛銆佹湵鐮傚攪銆佹剚鐪?, description: '姹変唬濂冲瓙浠ョ孩濡嗕负缇庯紝鑳剛鏁烽潰閰嶆湵鐮傜孩鍞囷紝鎰佺湁寰箼妤氭鍔ㄤ汉銆?, likes: 9800, tag: '姹夊' },
        { id: 'g008', title: '鑻楃枂灏戝コ濡嗭細閾堕グ鍙綋锛岀湁鐪煎鐢?, coverImage: 'coverGuofeng8', dynasty: '鑻楁棌', technique: '娴撶湁銆佺孩鍞囥€侀摱楗?, description: '鑻楁棌灏戝コ濡嗗浠ユ祿鐪夌孩鍞囦负鐗硅壊锛岄厤鍚堥摱楗板彯褰擄紝鐏靛姩鍙堢绉樸€?, likes: 16700, tag: '鑻楃枂' },
        { id: 'g009', title: '娓呮眽濂冲锛氭煶鍙剁粏鐪夛紝娣￠泤娓╁', coverImage: 'coverGuofeng2', dynasty: '娓呬唬', technique: '鏌冲彾鐪夈€佹贰闆呯溂褰便€佽杽鍞?, description: '娓呬唬姹夋棌濂冲瓙濡嗗瓒嬩簬娣￠泤锛屾煶鍙剁粏鐪夐厤娴呰壊鐪煎奖锛屾俯濠夊姘淬€?, likes: 13400, tag: '娓呮眽' },
        { id: 'g010', title: '鏂颁腑寮忔按澧ㄥ锛氬ⅷ鑹叉檿鏌擄紝鎰忓鎮犺繙', coverImage: 'coverGuofeng1', dynasty: '鐜颁唬', technique: '姘村ⅷ鐪煎奖銆佹笎鍙樺攪銆佸啓鎰忕湁', description: '灏嗘按澧ㄧ敾鎰忓铻嶅叆濡嗗锛屽ⅷ鑹茬溂褰辨檿鏌撻厤娓愬彉鍞囷紝涓滄柟缇庡鏂拌癄閲娿€?, likes: 28900, tag: '鏂颁腑寮? },
        { id: 'g011', title: '姹夋湇鑺辩濡嗭細鍗佷簩鑺辩锛屽悇棰嗛楠?, coverImage: 'coverGuofeng5', dynasty: '浼犵粺', technique: '鑺遍捒銆佽姳鐡ｅ攪銆佷富棰橀厤鑹?, description: '浠ュ崄浜岃姳绁炰负鐏垫劅锛屾瘡鏈堜竴绉嶈姳鍗変富棰樺瀹癸紝浠欐皵椋橀鍥介婊℃弧銆?, likes: 21300, tag: '鑺辩' },
        { id: 'g012', title: '灞辨捣缁忕簿鎬锛氬骞荤懓涓斤紝寮傚吔鎷熶汉', coverImage: 'coverGuofeng3', dynasty: '绁炶瘽', technique: '褰╃粯銆佽创鐗囥€佸垱鎰忕溂濡?, description: '浠ャ€婂北娴风粡銆嬪紓鍏戒负鐏垫劅锛屽垱鎰忓僵濡嗗睍鐜板骞讳笢鏂圭璇濅笘鐣屻€?, likes: 19800, tag: '灞辨捣缁? }
      ],

      // 1.5 閾跺彂涓撳尯
      silver: [
        { id: 's001', title: '閾跺彂鏃ュ父鐒曟柊锛氭皵鑹叉彁鍗囦笁姝ユ硶', coverImage: 'coverSilver1', scene: '鏃ュ父', description: '绠€鍗曚笁姝ユ彁鍗囨皵鑹诧紝璁╂瘡涓€澶╅兘绮剧楗辨弧锛岃交鏉惧嚭闂ㄣ€?, likes: 8900, tag: '鏃ュ父', skinFriendly: true },
        { id: 's002', title: '50+鑱氫細浜锛氫紭闆呬笉澶稿紶', coverImage: 'coverSilver2', scene: '鑱氫細', description: '鑱氫細鍦哄悎鐨勪紭闆呭瀹癸紝鏃㈡湁姘斿満鍙堜笉鏄惧じ寮狅紝寰椾綋澶ф柟銆?, likes: 12300, tag: '鑱氫細', skinFriendly: true },
        { id: 's003', title: '鑱屽満骞茬粌濡嗭細绮剧鑷俊', coverImage: 'coverSilver3', scene: '鑱屽満', description: '鑱屽満閾跺彂鏃忕殑骞茬粌濡嗗锛岀簿绁炵剷鍙戣嚜淇℃弧婊★紝涓撲笟褰㈣薄鍔犲垎銆?, likes: 7600, tag: '鑱屽満', skinFriendly: true },
        { id: 's004', title: '鏃呰闃叉檼濡嗭細娓呯埥鎸佷箙', coverImage: 'coverSilver4', scene: '鏃呰', description: '鏃呰蹇呭鐨勬竻鐖介槻鏅掑瀹癸紝鎸佷箙涓嶈劚濡嗭紝鎷嶇収缇庣編鍝掋€?, likes: 10200, tag: '鏃呰', skinFriendly: true },
        { id: 's005', title: '閾跺彂鏂板濡嗭細宀佹湀娌夋穩鐨勪紭闆?, coverImage: 'coverSilver5', scene: '濠氱ぜ', description: '閾跺彂鏂板鐨勪笓灞炲瀹癸紝宀佹湀娌夋穩鐨勪紭闆咃紝浜虹敓绗簩鏄ョ殑缁芥斁銆?, likes: 15600, tag: '濠氱ぜ', skinFriendly: true },
        { id: 's006', title: '瀛欒緢婊℃湀瀹达細鎱堢埍娓╁濡?, coverImage: 'coverSilver6', scene: '瀹跺', description: '瀛欒緢婊℃湀瀹寸殑鎱堢埍濡嗗锛屾俯濠夊ぇ鏂癸紝鍏ㄥ鍚堝奖C浣嶆媴褰撱€?, likes: 6800, tag: '瀹跺', skinFriendly: true },
        { id: 's007', title: '鑰佸勾澶у婕斿嚭濡嗭細鑸炲彴浜溂', coverImage: 'coverSilver2', scene: '婕斿嚭', description: '鑰佸勾澶у鑸炲彴婕斿嚭濡嗭紝鐏厜涓嬩緷鐒跺厜褰╃収浜猴紝涓嶈緭缁欏勾杞讳汉銆?, likes: 5400, tag: '婕斿嚭', skinFriendly: true },
        { id: 's008', title: '鏅ㄧ粌澶瀬濡嗭細鑷劧濂芥皵鑹?, coverImage: 'coverSilver1', scene: '杩愬姩', description: '鏅ㄧ粌澶瀬鏃剁殑鑷劧濡嗗锛岃交钖勯€忔皵锛岃繍鍔ㄥ悗渚濈劧姘旇壊鍦ㄧ嚎銆?, likes: 4300, tag: '杩愬姩', skinFriendly: true },
        { id: 's009', title: '閾跺彂鏃楄濡嗭細鍙ゅ吀闊靛懗', coverImage: 'coverSilver3', scene: '鏃楄', description: '閰嶆棗琚嶇殑鍙ゅ吀濡嗗锛岄摱鍙戦厤鏃楄鍒湁闊靛懗锛屼笢鏂圭編浜虹殑浼橀泤銆?, likes: 11200, tag: '鏃楄', skinFriendly: true },
        { id: 's010', title: '閲嶉槼鑺傛暚鑰佸锛氱搴勫枩搴?, coverImage: 'coverSilver2', scene: '鑺傛棩', description: '閲嶉槼鑺傛暚鑰佹椿鍔ㄧ殑绔簞濡嗗锛屽枩搴嗕笉娴じ锛岀簿绁炵煃閾勩€?, likes: 6700, tag: '鑺傛棩', skinFriendly: true },
        { id: 's011', title: '閾跺彂鏌撳彂鎼厤濡嗭細鍙戣壊濡嗗鍗忚皟', coverImage: 'coverSilver1', scene: '鏃ュ父', description: '閾跺彂鏌撳彂鍚庣殑濡嗗鎼厤鎶€宸э紝鍙戣壊涓庡瀹瑰拰璋愮粺涓€銆?, likes: 8900, tag: '鏌撳彂', skinFriendly: true },
        { id: 's012', title: '鏅氬勾绾︿細濡嗭細娓╂煍娴极', coverImage: 'coverSilver6', scene: '绾︿細', description: '閾跺彂鏃忔氮婕害浼氱殑娓╂煍濡嗗锛屾櫄骞寸埍鎯呭悓鏍风敎铚滃姩浜恒€?, likes: 9800, tag: '绾︿細', skinFriendly: true }
      ],

      // 1.6 澶х墝绮鹃€?      brands: [
        { id: 'b001', title: 'YSL 缁濊壊绾㈠攪濡?, coverImage: 'coverBrand1', brandName: 'YSL', brandLogo: 'coverBrand1', templateCount: 28, rating: 4.8, priceGP: 120, isOfficial: true, tag: '绾㈠攪' },
        { id: 'b002', title: 'Dior 鑺辨季鐢滃績濡?, coverImage: 'coverBrand2', brandName: 'Dior', brandLogo: 'coverBrand2', templateCount: 22, rating: 4.7, priceGP: 110, isOfficial: true, tag: '鐢滅編' },
        { id: 'b003', title: 'Chanel 娉曞紡浼橀泤濡?, coverImage: 'coverBrand3', brandName: 'Chanel', brandLogo: 'coverBrand3', templateCount: 18, rating: 4.9, priceGP: 150, isOfficial: true, tag: '浼橀泤' },
        { id: 'b004', title: 'Lanc么me 鎸佸鏃犵憰濡?, coverImage: 'coverBrand4', brandName: 'Lanc么me', brandLogo: 'coverBrand4', templateCount: 25, rating: 4.6, priceGP: 100, isOfficial: true, tag: '鎸佸' },
        { id: 'b005', title: 'MAC 涓撲笟鐜╄壊濡?, coverImage: 'coverBrand5', brandName: 'MAC', brandLogo: 'coverBrand5', templateCount: 35, rating: 4.5, priceGP: 80, isOfficial: true, tag: '鐜╄壊' },
        { id: 'b006', title: 'Tom Ford 濂㈤噾鐑熺啅濡?, coverImage: 'coverBrand1', brandName: 'Tom Ford', brandLogo: 'coverBrand1', templateCount: 15, rating: 4.9, priceGP: 180, isOfficial: true, tag: '鐑熺啅' },
        { id: 'b007', title: '鑺辫タ瀛?涓滄柟闆呰嚧濡?, coverImage: 'coverBrand3', brandName: '鑺辫タ瀛?, brandLogo: 'coverBrand3', templateCount: 20, rating: 4.4, priceGP: 60, isOfficial: true, tag: '鍥介' },
        { id: 'b008', title: '瀹岀編鏃ヨ 鍔ㄧ墿鐪煎奖濡?, coverImage: 'coverBrand5', brandName: '瀹岀編鏃ヨ', brandLogo: 'coverBrand5', templateCount: 30, rating: 4.3, priceGP: 45, isOfficial: true, tag: '鐪煎奖' },
        { id: 'b009', title: '姗樻湹 鐢滅郴灏戝コ濡?, coverImage: 'coverBrand2', brandName: '姗樻湹', brandLogo: 'coverBrand2', templateCount: 24, rating: 4.5, priceGP: 40, isOfficial: true, tag: '灏戝コ' },
        { id: 'b010', title: 'Colorkey 涓濈粧鍞囬噳濡?, coverImage: 'coverBrand4', brandName: 'Colorkey', brandLogo: 'coverBrand4', templateCount: 18, rating: 4.4, priceGP: 35, isOfficial: true, tag: '涓濈粧' },
        { id: 'b011', title: '3CE 闊╃郴姘涘洿濡?, coverImage: 'coverBrand5', brandName: '3CE', brandLogo: 'coverBrand5', templateCount: 26, rating: 4.6, priceGP: 70, isOfficial: true, tag: '闊╃郴' },
        { id: 'b012', title: 'NARS 楂樻疆鑵孩濡?, coverImage: 'coverBrand4', brandName: 'NARS', brandLogo: 'coverBrand4', templateCount: 19, rating: 4.7, priceGP: 95, isOfficial: true, tag: '鑵孩' },
        { id: 'b013', title: 'Estee Lauder 闆呰瘲鍏伴粵绮捐嚧濡?, coverImage: 'coverBrand3', brandName: 'Estee Lauder', brandLogo: 'coverBrand3', templateCount: 21, rating: 4.6, priceGP: 130, isOfficial: true, tag: '绮捐嚧' },
        { id: 'b014', title: 'Gucci 澶嶅彜鍗庡僵濡?, coverImage: 'coverBrand2', brandName: 'Gucci', brandLogo: 'coverBrand2', templateCount: 12, rating: 4.5, priceGP: 160, isOfficial: true, tag: '澶嶅彜' },
        { id: 'b015', title: '闃跨帥灏?鏉冨姏搴曞濡?, coverImage: 'coverBrand1', brandName: 'Armani', brandLogo: 'coverBrand1', templateCount: 23, rating: 4.8, priceGP: 140, isOfficial: true, tag: '搴曞' }
      ],

      // 1.7 鏄庢槦鍚屾
      celebrities: [
        { id: 'ce001', title: '璧甸湶鎬濆悓娆剧敎缇庤湝妗冨', coverImage: 'coverCelebrity1', celebrityName: '璧甸湶鎬?, celebrityPhoto: 'coverCelebrity1', category: '鐢滅編濡?, similarity: 92, likes: 45600, tag: '铚滄濡? },
        { id: 'ce002', title: '铏炰功娆ｅ悓娆鹃挀绯诲皬鐚', coverImage: 'coverCelebrity2', celebrityName: '铏炰功娆?, celebrityPhoto: 'coverCelebrity2', category: '杞荤啛濡?, similarity: 89, likes: 38900, tag: '灏忕尗濡? },
        { id: 'ce003', title: '杩附鐑反鍚屾娴撻濂崇濡?, coverImage: 'coverCelebrity3', celebrityName: '杩附鐑反', celebrityPhoto: 'coverCelebrity3', category: '濂崇濡?, similarity: 90, likes: 52300, tag: '娴撻' },
        { id: 'ce004', title: 'Jennie鍚屾鎱垫噿鐚郴濡?, coverImage: 'coverCelebrity2', celebrityName: 'Jennie', celebrityPhoto: 'coverCelebrity2', category: '杞荤啛濡?, similarity: 88, likes: 61200, tag: '鐚郴' },
        { id: 'ce005', title: '寮犲厓鑻卞悓娆鹃煩绯绘按鍏夊', coverImage: 'coverCelebrity4', celebrityName: '寮犲厓鑻?, celebrityPhoto: 'coverCelebrity4', category: '闊╃郴濡?, similarity: 91, likes: 47800, tag: '姘村厜' },
        { id: 'ce006', title: '闉犲┃绁庡悓娆炬竻鍐风牬纰庡', coverImage: 'coverCelebrity5', celebrityName: '闉犲┃绁?, celebrityPhoto: 'coverCelebrity5', category: '娓呭喎濡?, similarity: 93, likes: 56700, tag: '鐮寸鎰? },
        { id: 'ce007', title: '鍒樹害鑿插悓娆句粰姘旇８濡?, coverImage: 'coverCelebrity6', celebrityName: '鍒樹害鑿?, celebrityPhoto: 'coverCelebrity6', category: '瑁稿', similarity: 85, likes: 73400, tag: '浠欐皵' },
        { id: 'ce008', title: '鏉ㄥ箓鍚屾寰″绾㈠攪濡?, coverImage: 'coverCelebrity7', celebrityName: '鏉ㄥ箓', celebrityPhoto: 'coverCelebrity7', category: '杞荤啛濡?, similarity: 87, likes: 41200, tag: '绾㈠攪' },
        { id: 'ce009', title: '鐧介箍鍚屾闊╃郴濂抽珮濡?, coverImage: 'coverCelebrity4', celebrityName: '鐧介箍', celebrityPhoto: 'coverCelebrity4', category: '瀛﹂櫌濡?, similarity: 90, likes: 34500, tag: '濂抽珮' },
        { id: 'ce010', title: '鏉ㄧ传鍚屾閭诲鐢滃濡?, coverImage: 'coverCelebrity1', celebrityName: '鏉ㄧ传', celebrityPhoto: 'coverCelebrity1', category: '鐢滅編濡?, similarity: 88, likes: 29800, tag: '鐢滃' },
        { id: 'ce011', title: 'Lisa鍚屾閰烽娆х編濡?, coverImage: 'coverCelebrity3', celebrityName: 'Lisa', celebrityPhoto: 'coverCelebrity3', category: '娆х編濡?, similarity: 86, likes: 68900, tag: '閰烽' },
        { id: 'ce012', title: 'IU鍚屾娓呴€忔灉姹佸', coverImage: 'coverCelebrity1', celebrityName: 'IU', celebrityPhoto: 'coverCelebrity1', category: '鐢滅編濡?, similarity: 89, likes: 45600, tag: '鏋滄眮濡? },
        { id: 'ce013', title: '鍊Ξ鍚屾楂樼骇鎰熻８濡?, coverImage: 'coverCelebrity6', celebrityName: '鍊Ξ', celebrityPhoto: 'coverCelebrity6', category: '瑁稿', similarity: 91, likes: 38900, tag: '楂樼骇鎰? },
        { id: 'ce014', title: '鍛ㄤ篃鍚屾娓呭喎鏍¤姳濡?, coverImage: 'coverCelebrity5', celebrityName: '鍛ㄤ篃', celebrityPhoto: 'coverCelebrity5', category: '娓呭喎濡?, similarity: 92, likes: 33400, tag: '鏍¤姳' },
        { id: 'ce015', title: '鐜嬪績鍑屽悓娆剧敎蹇冩暀涓诲', coverImage: 'coverCelebrity1', celebrityName: '鐜嬪績鍑?, celebrityPhoto: 'coverCelebrity1', category: '鐢滅編濡?, similarity: 88, likes: 41200, tag: '鐢滃績' }
      ]
    },

    // ============================================================
    // 2. products 鈥?鍟嗗煄鍟嗗搧SKU锛?0鏉★級
    // ============================================================
    products: [
      // 搴曞
      { id: 'p001', name: 'YSL 鎭掍箙鏃犵憰鎸佸绮夊簳娑?, brand: 'YSL', category: '搴曞', price: 620, originalPrice: 680, rating: 4.7, skinTypes: ['娌规€?, '娣峰悎'], image: 'assets/images/products/p001.jpg', description: '24灏忔椂鎸佸涓嶆殫娌夛紝杞昏杽閬憰锛屾补鐨翰濡?, tags: ['鎸佸', '閬憰', '娌圭毊'] },
      { id: 'p002', name: '鍏拌敾鎸佸杞婚€忕矇搴曟恫 PO-01', brand: 'Lanc么me', category: '搴曞', price: 450, originalPrice: 520, rating: 4.6, skinTypes: ['娣峰悎', '涓€?], image: 'assets/images/products/p002.jpg', description: '杞荤泩 breathable 璐ㄥ湴锛屾寔濡嗕笉闂风棙锛岃嚜鐒舵煍鐒?, tags: ['鎸佸', '杞昏杽', '閫忔皵'] },
      { id: 'p003', name: '闃跨帥灏兼潈鍔涚矇搴曟恫 2鍙?, brand: 'Armani', category: '搴曞', price: 600, originalPrice: 650, rating: 4.8, skinTypes: ['娌规€?, '娣峰悎'], image: 'assets/images/products/p003.jpg', description: '楂橀伄鐟曞己鎸佸锛屼笣缁掑搼鍏夊鏁堬紝鐟曠柕鐨繀澶?, tags: ['楂橀伄鐟?, '鍝戝厜', '鏉冨姏'] },
      { id: 'p004', name: '鑺辫タ瀛愮帀瀹规皵鍨?N20', brand: '鑺辫タ瀛?, category: '搴曞', price: 199, originalPrice: 259, rating: 4.3, skinTypes: ['骞叉€?, '涓€?], image: 'assets/images/products/p004.jpg', description: '涓滄柟鍏昏偆姘斿灚锛屾按娑﹂€忎寒锛岄€傚悎骞茬毊鍜屾贩骞?, tags: ['鍏昏偆', '姘村厜', '鍥介'] },
      { id: 'p005', name: '闆呰瘲鍏伴粵DW鎸佸绮夊簳娑?1W1', brand: 'Estee Lauder', category: '搴曞', price: 420, originalPrice: 480, rating: 4.7, skinTypes: ['娌规€?, '娣峰悎'], image: 'assets/images/products/p005.jpg', description: '娌圭毊鏁戞槦锛屾寔濡嗗ぇ鐜嬶紝瓒婂瓒婄編涓?, tags: ['鎸佸', '娌圭毊鏁戞槦', '缁忓吀'] },
      { id: 'p006', name: 'NARS浜噰鏌旀粦閬憰鑶?Vanilla', brand: 'NARS', category: '搴曞', price: 300, originalPrice: 350, rating: 4.6, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p006.jpg', description: '濂舵补璐ㄥ湴涓嶅崱绾癸紝榛戠溂鍦堢棙鍗颁竴绗旈殣褰?, tags: ['閬憰', '濂舵补', '涓嶅共'] },
      { id: 'p007', name: '绾⒌甯屽洓瀹牸鏁ｇ矇 1鍙?, brand: 'Givenchy', category: '搴曞', price: 590, originalPrice: 620, rating: 4.8, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p007.jpg', description: '缁忓吀鍥涜壊瀹氬锛屾煍鐒︽彁浜紝鎺ф补鎸佸', tags: ['瀹氬', '鍥涘鏍?, '缁忓吀'] },
      // 鐪煎
      { id: 'p008', name: '瀹岀編鏃ヨ鎺㈤櫓瀹跺崄浜岃壊鐪煎奖鐩?灏忕尗鐩?, brand: '瀹岀編鏃ヨ', category: '鐪煎', price: 129, originalPrice: 199, rating: 4.4, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p008.jpg', description: '澶у湴鑹茬郴鐧炬惌娑堣偪锛屾柊鎵嬪弸濂斤紝涓€鐩樻悶瀹氭棩甯?, tags: ['澶у湴鑹?, '娑堣偪', '鏂版墜'] },
      { id: 'p009', name: '3CE涔濆鏍肩溂褰辩洏 Overtake', brand: '3CE', category: '鐪煎', price: 245, originalPrice: 299, rating: 4.7, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p009.jpg', description: '姗樻璋冪粡鍏哥洏锛屼寒鐗囩粷缇庯紝闊╃郴鐪煎蹇呭', tags: ['姗樻', '浜墖', '闊╃郴'] },
      { id: 'p010', name: 'Tom Ford鍥涜壊鐪煎奖鐩?20 Disco Dust', brand: 'Tom Ford', category: '鐪煎', price: 720, originalPrice: 800, rating: 4.9, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p010.jpg', description: '铚滄妫曠粡鍏搁厤鑹诧紝绮夎川缁嗚吇锛岃吹濡囩骇鐪煎奖', tags: ['铚滄', '璐靛', '缁嗚吇'] },
      { id: 'p011', name: 'Kiss Me姊﹀够娉溂闃叉按鐪肩嚎娑茬瑪 榛戣壊', brand: 'Kiss Me', category: '鐪煎', price: 68, originalPrice: 88, rating: 4.6, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p011.jpg', description: '鏋佺粏绗斿皷锛岄槻姘撮槻姹椾笉鏅曟煋锛屾柊鎵嬩篃鑳界敾濂界溂绾?, tags: ['闃叉按', '鏋佺粏', '涓嶆檿鏌?] },
      { id: 'p012', name: '缇庡疂鑾茬航绾︽瀬缁嗛槻鏅曠溂绾跨瑪', brand: 'Maybelline', category: '鐪煎', price: 79, originalPrice: 99, rating: 4.3, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p012.jpg', description: '骞充环濂界敤锛岄『婊戞樉鑹诧紝鎸佷箙涓嶆檿鏌?, tags: ['骞充环', '椤烘粦', '鏄捐壊'] },
      { id: 'p013', name: '鑹炬潨绾辩潾姣涙墦搴曡啅 榛戣壊', brand: 'Ettusais', category: '鐪煎', price: 89, originalPrice: 110, rating: 4.8, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p013.jpg', description: '鏍规牴鍒嗘槑鍗风繕涓€鏁村ぉ锛岀潾姣涗笉濉岀殑绉樺瘑姝﹀櫒', tags: ['鎵撳簳', '鍗风繕', '鎸佷箙'] },
      { id: 'p014', name: '鑺辫タ瀛愯灪榛涚敓鑺辩湁绗?05鐏版', brand: '鑺辫タ瀛?, category: '鐪煎', price: 69, originalPrice: 89, rating: 4.4, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p014.jpg', description: '鏋佺粏涓夎绗旇姱锛岀敾鍑烘牴鏍瑰垎鏄庨噹鐢熺湁', tags: ['鏋佺粏', '閲庣敓鐪?, '鍥介'] },
      // 鍞囧
      { id: 'p015', name: 'YSL灏忛噾鏉＄粏绠″彛绾?21', brand: 'YSL', category: '鍞囧', price: 390, originalPrice: 450, rating: 4.8, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p015.jpg', description: '澶嶅彜钃濊皟姝ｇ孩锛屾樉鐧戒笉鎸戠毊锛屾皵鍦哄叏寮€', tags: ['姝ｇ孩', '鏄剧櫧', '姘斿満'] },
      { id: 'p016', name: 'Dior鐑堣壋钃濋噾鍞囪啅 999鍝戝厜', brand: 'Dior', category: '鍞囧', price: 380, originalPrice: 420, rating: 4.7, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p016.jpg', description: '缁忓吀姝ｇ孩鑹诧紝姣忎釜濂充汉閮藉簲璇ユ嫢鏈夌殑涓€鏀彛绾?, tags: ['缁忓吀', '姝ｇ孩', '鐧炬惌'] },
      { id: 'p017', name: 'Colorkey绌烘皵鍞囬噳 R608', brand: 'Colorkey', category: '鍞囧', price: 49, originalPrice: 69, rating: 4.5, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p017.jpg', description: '涓濈粧闆鹃潰璐ㄥ湴锛岀劍绯栫孩妫曟樉鐧斤紝骞充环鎴樻枟鏈?, tags: ['涓濈粧', '绾㈡', '骞充环'] },
      { id: 'p018', name: 'MAC瀛愬脊澶村彛绾?Chili', brand: 'MAC', category: '鍞囧', price: 190, originalPrice: 220, rating: 4.6, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p018.jpg', description: '缁忓吀灏忚荆妞掕壊锛岄粍鐨翰濡堬紝鏄剧櫧涓嶅嚭閿?, tags: ['灏忚荆妞?, '榛勭毊浜插', '缁忓吀'] },
      { id: 'p019', name: '3CE涓濈粧鍞囬噳 Taupe', brand: '3CE', category: '鍞囧', price: 110, originalPrice: 140, rating: 4.6, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p019.jpg', description: '鐮栫孩鑹插鍙ゆ樉鐧斤紝涓濈粧璐ㄥ湴涓嶆嫈骞?, tags: ['鐮栫孩', '澶嶅彜', '涓嶆嫈骞?] },
      { id: 'p020', name: '瀹岀編鏃ヨ鍚嶇墖鍞囬噳 002鏃犺姳鏋滅矇', brand: '瀹岀編鏃ヨ', category: '鍞囧', price: 59, originalPrice: 79, rating: 4.3, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p020.jpg', description: '杞昏杽鍚嶇墖璁捐锛屾棤鑺辨灉绮夋俯鏌旀棩甯?, tags: ['杞昏杽', '娓╂煍', '鏃ュ父'] },
      // 淇
      { id: 'p021', name: 'NARS鑵孩 Orgasm', brand: 'NARS', category: '淇', price: 300, originalPrice: 350, rating: 4.8, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p021.jpg', description: '铚滄閲戝亸鍏夛紝鑷甫楂樺厜鏁堟灉锛屽厓姘旀弧婊?, tags: ['铚滄', '鍋忓厜', '鍏冩皵'] },
      { id: 'p022', name: '姗樻湹鍗曡壊鑵孩 06鏉忓瓙鑹?, brand: '姗樻湹', category: '淇', price: 29, originalPrice: 39, rating: 4.5, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p022.jpg', description: '娓╂煍鏉忓瓙鑹诧紝鏃ユ潅鎰熸弧婊★紝鏂版墜涓嶅嚭閿?, tags: ['鏉忓瓙', '鏃ユ潅', '骞充环'] },
      { id: 'p023', name: 'MAC鐢熷楂樺厜 Double Gleam', brand: 'MAC', category: '淇', price: 360, originalPrice: 400, rating: 4.7, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p023.jpg', description: '姘村厜鎰熼妲熻壊楂樺厜锛岃嚜鐒堕€忎寒涓嶆樉姣涘瓟', tags: ['姘村厜', '棣欐', '涓嶆樉姣涘瓟'] },
      { id: 'p024', name: 'Too Cool For School涓夎壊淇鐩?, brand: 'Too Cool For School', category: '淇', price: 89, originalPrice: 119, rating: 4.4, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p024.jpg', description: '涓夎壊娓愬彉淇锛岄蓟褰变晶褰变竴鐩樻悶瀹氾紝鏂版墜鍙嬪ソ', tags: ['涓夎壊', '榧诲奖', '鏂版墜'] },
      // 鎶よ偆
      { id: 'p025', name: 'SK-II绁炰粰姘寸簿鍗庢恫 230ml', brand: 'SK-II', category: '鎶よ偆', price: 1540, originalPrice: 1690, rating: 4.8, skinTypes: ['娌规€?, '娣峰悎'], image: 'assets/images/products/p025.jpg', description: 'PITERA鏍稿績鎴愬垎锛岃皟鐞嗘按娌瑰钩琛★紝鏀瑰杽鑲よ川', tags: ['绁炰粰姘?, '璋冪悊', '缁忓吀'] },
      { id: 'p026', name: '淇附鍙壊淇簿鍗?30ml', brand: 'SkinCeuticals', category: '鎶よ偆', price: 595, originalPrice: 650, rating: 4.7, skinTypes: ['鏁忔劅', '鐥樼棙'], image: 'assets/images/products/p026.jpg', description: '妞嶈悆鑸掔紦淇孩锛屾贰鍖栫棙鍗帮紝鏁忔劅鑲屽畨蹇冪敤', tags: ['淇孩', '鐥樺嵃', '妞嶈悆'] },
      { id: 'p027', name: '鐝傛鼎娑︽蹈淇濇箍婊嬪吇涔抽湝 40g', brand: 'Curel', category: '鎶よ偆', price: 188, originalPrice: 220, rating: 4.6, skinTypes: ['骞叉€?, '鏁忔劅'], image: 'assets/images/products/p027.jpg', description: '绁炵粡閰拌兒淇姢锛屾俯鍜屼繚婀匡紝骞叉晱鑲屾晳鏄?, tags: ['绁炵粡閰拌兒', '淇姢', '娓╁拰'] },
      { id: 'p028', name: '瀹夌儹娌欓噾鐡堕槻鏅掗湝 60ml', brand: 'Anessa', category: '鎶よ偆', price: 228, originalPrice: 298, rating: 4.7, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p028.jpg', description: '閬囨按鍒欏己闃叉檼鎶€鏈紝鎴峰蹇呭锛岄槻姘撮槻姹?, tags: ['闃叉檼', '闃叉按', '鎴峰'] },
      { id: 'p029', name: '娆ц幈闆呭皬閲戠闃叉檼闇?30ml', brand: 'L\'Oreal', category: '鎶よ偆', price: 149, originalPrice: 189, rating: 4.5, skinTypes: ['鍏ㄨ偆璐?], image: 'assets/images/products/p029.jpg', description: '楹﹁壊婊ら槻鏅掔鎶€锛岃交钖勪笉鎼撴偿锛屾棩甯搁€氬嫟', tags: ['闃叉檼', '杞昏杽', '閫氬嫟'] },
      { id: 'p030', name: '钖囪濞滆垝鏁忎繚婀跨壒鎶ら湝 50g', brand: 'Winona', category: '鎶よ偆', price: 268, originalPrice: 320, rating: 4.6, skinTypes: ['鏁忔劅'], image: 'assets/images/products/p030.jpg', description: '椹娇鑻嬭垝缂撲慨鎶わ紝鏁忔劅鑲屾崲瀛ｇ淮绋抽閫?, tags: ['淇姢', '鏁忔劅鑲?, '缁寸ǔ'] }
    ],

    // ============================================================
    // 3. brandPartners 鈥?鍝佺墝鍚堜綔鏂癸紙10鏉★級
    // ============================================================
    brandPartners: [
      { id: 'bp001', name: 'YSL鍦ｇ綏鍏?, nameEn: 'YSL', logo: 'assets/images/brands/ysl.png', description: '娉曞浗濂緢鍝佺墝锛屼互澶ц儐鍓嶅崼鐨勫僵濡嗛鏍艰憲绉帮紝绾㈠攪涓庡簳濡嗙郴鍒楁繁鍙楀叏鐞冩秷璐硅€呭枩鐖便€?, templateCount: 28, rating: 4.8, isOfficial: true, cooperationType: '鍝佺墝鑱斿悕' },
      { id: 'bp002', name: 'Lanc么me鍏拌敾', nameEn: 'Lanc么me', logo: 'assets/images/brands/lancome.png', description: '娆ц幈闆呴泦鍥㈡棗涓嬮珮绔編濡嗗搧鐗岋紝鎸佸绮夊簳娑蹭笌鐫瘺鑶忎负鏄庢槦浜у搧銆?, templateCount: 25, rating: 4.7, isOfficial: true, cooperationType: '瀹樻柟鍏ラ┗' },
      { id: 'bp003', name: 'Dior杩ゥ', nameEn: 'Dior', logo: 'assets/images/brands/dior.png', description: '娉曞浗椤剁骇濂緢鍝佺墝锛?99鍙ｇ孩涓庤姳铚滅郴鍒椾负缁忓吀涔嬩綔锛屼紭闆呬笌濂㈠崕骞跺瓨銆?, templateCount: 22, rating: 4.7, isOfficial: true, cooperationType: '鍝佺墝鑱斿悕' },
      { id: 'bp004', name: 'Chanel棣欏鍎?, nameEn: 'Chanel', logo: 'assets/images/brands/chanel.png', description: '娉曞浗濂緢鍝佺墝浠ｈ〃锛岀畝绾︿紭闆呯殑椋庢牸锛屽弻C鏍囧織涓庡北鑼惰姳鍏冪礌娣卞叆浜哄績銆?, templateCount: 18, rating: 4.9, isOfficial: true, cooperationType: '瀹樻柟鍏ラ┗' },
      { id: 'bp005', name: 'MAC榄呭彲', nameEn: 'MAC', logo: 'assets/images/brands/mac.png', description: '涓撲笟褰╁鍝佺墝锛岃壊鍙蜂赴瀵岋紝鐜╄壊鑷敱锛屾繁鍙楀寲濡嗗笀涓庣編濡嗙埍濂借€呭枩鐖便€?, templateCount: 35, rating: 4.5, isOfficial: true, cooperationType: '瀹樻柟鍏ラ┗' },
      { id: 'bp006', name: '鑺辫タ瀛?, nameEn: 'Florasis', logo: 'assets/images/brands/florasis.png', description: '涓滄柟褰╁鍝佺墝锛屼互鑺卞吇濡嗭紝铻嶅悎浼犵粺宸ヨ壓涓庣幇浠ｇ鎶€锛屽睍鐜颁笢鏂圭編瀛︺€?, templateCount: 20, rating: 4.4, isOfficial: true, cooperationType: '鍥借揣绮鹃€? },
      { id: 'bp007', name: '瀹岀編鏃ヨ', nameEn: 'Perfect Diary', logo: 'assets/images/brands/perfectdiary.png', description: '涓浗鏂伴攼褰╁鍝佺墝锛岄珮鎬т环姣旓紝鍔ㄧ墿鐪煎奖鐩樹笌鍚嶇墖鍞囬噳涓虹垎娆句骇鍝併€?, templateCount: 30, rating: 4.3, isOfficial: true, cooperationType: '鍥借揣绮鹃€? },
      { id: 'bp008', name: '姗樻湹Judydoll', nameEn: 'Judydoll', logo: 'assets/images/brands/judydoll.png', description: '骞充环褰╁鍝佺墝锛岃壊褰╀赴瀵岋紝鑵孩涓庣溂褰辨繁鍙楀鐢熷厷鍠滅埍銆?, templateCount: 24, rating: 4.5, isOfficial: true, cooperationType: '鍥借揣绮鹃€? },
      { id: 'bp009', name: 'Colorkey鐝傛媺鐞?, nameEn: 'Colorkey', logo: 'assets/images/brands/colorkey.png', description: '绌烘皵鍞囬噳寮€鍒涜€咃紝涓濈粧璐ㄥ湴锛屽钩浠烽珮鏄捐壊锛屽勾杞讳汉棣栭€夊攪濡嗗搧鐗屻€?, templateCount: 18, rating: 4.4, isOfficial: true, cooperationType: '鍥借揣绮鹃€? },
      { id: 'bp010', name: '3CE涓夌喒鐜?, nameEn: '3CE', logo: 'assets/images/brands/3ce.png', description: '闊╁浗Stylenanda鏃椾笅褰╁鍝佺墝锛岄煩绯昏壊褰╃編瀛︼紝涔濆鏍肩溂褰变负鏄庢槦浜у搧銆?, templateCount: 26, rating: 4.6, isOfficial: true, cooperationType: '娴峰鍝佺墝' }
    ],

    // ============================================================
    // 4. localProblems 鈥?灞€閮ㄩ棶棰?瑙ｆ硶+姝ラ+浜у搧+閬块浄锛團25/F26/F27锛?    // ============================================================
    localProblems: [
      {
        id: 'lp001', keyword: '鍗ц殨鎬庝箞鐢?, title: '鍗ц殨鎬庝箞鐢绘墠鑷劧涓嶆樉鑴忥紵', category: '鐪煎',
        solutions: [
          {
            id: 'lp001-s1', name: '濡堢敓鎰熼槾褰卞崸铓?, suitable: ['鏂版墜', '鏃ュ父濡?], difficulty: 2, duration: '3鍒嗛挓', effect: '鑷劧骞兼€?, heat: 98, likes: 45200, dislikes: 120,
            steps: [
              { stepNum: 1, description: '寰瑧鎵惧埌鍗ц殨鍑歌捣浣嶇疆锛岀敤娴呮鑹茬湁绗旇交杞荤敾鍑洪槾褰辩嚎', image: 'assets/images/steps/wochan_01.jpg', products: [
                { tier: '楂樼', name: 'Benefit precisely my brow', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愯灪榛涚敓鑺辩湁绗?, brand: '鑺辫タ瀛?, price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鏋佺粏鐪夌瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鐢ㄧ粏鑺傚埛铇稿彇娴呯背鑹茬溂褰憋紝鎻愪寒鍗ц殨鍑歌捣閮ㄤ綅', image: 'assets/images/steps/wochan_02.jpg', products: [
                { tier: '楂樼', name: 'Tom Ford鍥涜壊鐪煎奖鐩?, brand: 'Tom Ford', price: 720, rating: 4.9, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '3CE涔濆鏍肩溂褰辩洏', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹鍗曡壊鐪煎奖', brand: '姗樻湹', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐢ㄦ绛炬垨鏅曟煋鍒峰皢闃村奖绾垮悜涓嬫柟鑷劧鏅曞紑', image: 'assets/images/steps/wochan_03.jpg', products: [
                { tier: '楂樼', name: 'MAC鍙屽ご鐪煎奖鍒?, brand: 'MAC', price: 280, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭溂閮ㄥ鍒?, brand: 'AMORTALS', price: 49, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鏅曟煋鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '瀹氬鍠烽浘杞诲柗锛岃鍗ц殨鏇存寔涔呰嚜鐒?, image: 'assets/images/steps/wochan_04.jpg', products: [
                { tier: '楂樼', name: 'Urban Decay瀹氬鍠烽浘', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '闃村奖绾夸綅缃?, desc: '涓嶈鐢诲湪鐪熸鐨勭溂涓嬬粏绾瑰锛岃鐢诲湪鍗ц殨鍑歌捣鐨勪笅鏂?, source: '涓撲笟鍖栧甯?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'medium' } },
              { tip: '鏂版墜寤鸿閫夋嫨鐏版鑹茶€岄潪娣辨鑹诧紝鏇翠笉瀹规槗鏄捐剰' }
            ]
          },
          {
            id: 'lp001-s2', name: '鐝犲厜鎻愪寒鍗ц殨', suitable: ['娲惧濡?, '涓婇暅濡?], difficulty: 3, duration: '5鍒嗛挓', effect: '闂寒鏈夌', heat: 85, likes: 32100, dislikes: 230,
            steps: [
              { stepNum: 1, description: '鐢ㄩ伄鐟曡啅鎵撳簳鍗ц殨鍖哄煙锛岃鍚庣画鐝犲厜鏇存樉鑹?, image: 'assets/images/steps/wochan2_01.jpg', products: [
                { tier: '楂樼', name: 'NARS閬憰鑶?, brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '涔愬緱閬憰娑?, brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '缇庡疂鑾叉鐨摝閬憰', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '棣欐鑹茬彔鍏夌溂褰辩偣娑傚崸铓曚腑澶?, image: 'assets/images/steps/wochan2_02.jpg', products: [
                { tier: '楂樼', name: 'Bobbi Brown鏈堝厜鐭?, brand: 'Bobbi Brown', price: 360, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹G33鍋忓厜闂墖', brand: '姗樻湹', price: 29, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍗曡壊鐪煎奖', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '灏戦噺浜墖鐐圭紑鐪间腑锛屽鍔犵珛浣撴劅', image: 'assets/images/steps/wochan2_03.jpg', products: [
                { tier: '楂樼', name: '3CE涓€婊存唱', brand: '3CE', price: 89, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹娑蹭綋鐪煎奖', brand: '姗樻湹', price: 35, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧娑蹭綋鐪煎奖', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '杞昏交鎸夊帇鍥哄畾浜墖锛岄槻姝㈤绮?, image: 'assets/images/steps/wochan2_04.jpg', products: [
                { tier: '楂樼', name: 'MAC瀹氬鍠烽浘', brand: 'MAC', price: 240, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '浜墖鐢ㄩ噺', desc: '浜墖涓嶅疁杩囧锛屽惁鍒欏鏄撴樉寰楃溂鐫涙诞鑲?, source: '缇庡鍗氫富', skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鑲跨溂娉″缓璁伩寮€澶т寒鐗囷紝閫夋嫨缁嗚吇鐝犲厜鍗冲彲' }
            ]
          },
          {
            id: 'lp001-s3', name: '鍗ц殨绗旈€熸垚娉?, suitable: ['鎬ユ晳', '鎳掍汉'], difficulty: 1, duration: '1鍒嗛挓', effect: '蹇€熸垚鍨?, heat: 92, likes: 38900, dislikes: 180,
            steps: [
              { stepNum: 1, description: '閫夋嫨鍙屽ご鍗ц殨绗旓紝闃村奖澶寸敾鍑哄崸铓曚笅缂?, image: 'assets/images/steps/wochan3_01.jpg', products: [
                { tier: '楂樼', name: 'Benefit鍗ц殨绗?, brand: 'Benefit', price: 220, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愬崸铓曠瑪', brand: '鑺辫タ瀛?, price: 59, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍙屽ご鍗ц殨绗?, brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鎹㈡彁浜ご娑傛姽鍦ㄥ崸铓曞嚫璧峰', image: 'assets/images/steps/wochan3_02.jpg', products: [
                { tier: '楂樼', name: 'Benefit鍗ц殨绗旀彁浜ご', brand: 'Benefit', price: 220, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愬崸铓曠瑪鎻愪寒澶?, brand: '鑺辫タ瀛?, price: 59, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍙屽ご鍗ц殨绗?, brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐢ㄦ墜鎸囪交杞绘媿寮€杈圭紭锛岃杩囨浮鑷劧', image: 'assets/images/steps/wochan3_03.jpg', products: [
                { tier: '楂樼', name: '缇庡铔嬪瑁?, brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭編濡嗚泲', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧缇庡铔?, brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '妫€鏌ヤ袱杈瑰绉板害锛岄€傚綋琛ュ', image: 'assets/images/steps/wochan3_04.jpg', products: [
                { tier: '楂樼', name: 'MAC灏忛暅瀛?, brand: 'MAC', price: 120, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愰殢韬暅', brand: '鑺辫タ瀛?, price: 39, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鎶樺彔闀?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '瀵圭О搴?, desc: '涓よ竟鍗ц殨楂樺害瑕佷竴鑷达紝鍚﹀垯浼氬鑷村ぇ灏忕溂', source: '鍖栧甯堝缓璁?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鐢讳箣鍓嶅厛瀵圭潃闀滃瓙寰瑧锛屾壘鍒版渶閫傚悎鑷繁鐨勫崸铓曚綅缃? }
            ]
          },
          {
            id: 'lp001-s4', name: '缁撴瀯寮忓崸铓曟硶', suitable: ['杩涢樁', '娆х編濡?], difficulty: 4, duration: '8鍒嗛挓', effect: '绔嬩綋娣遍們', heat: 72, likes: 19800, dislikes: 340,
            steps: [
              { stepNum: 1, description: '鐢ㄤ慨瀹圭矇鍦ㄧ溂涓嬬敾鍑洪槾褰辫疆寤?, image: 'assets/images/steps/wochan4_01.jpg', products: [
                { tier: '楂樼', name: 'MAC Omega淇', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Too Cool For School淇', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹淇鐩?, brand: '姗樻湹', price: 45, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鐢ㄩ珮鍏夌矇鎻愪寒鍗ц殨鍑歌捣鍜岀溂澶?, image: 'assets/images/steps/wochan4_02.jpg', products: [
                { tier: '楂樼', name: 'MAC鐢熷楂樺厜', brand: 'MAC', price: 360, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愰珮鍏?, brand: '鑺辫タ瀛?, price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹楂樺厜', brand: '姗樻湹', price: 35, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐢ㄧ粏鑺傚埛鍔犳繁鐪煎熬涓夎鍖洪槾褰?, image: 'assets/images/steps/wochan4_03.jpg', products: [
                { tier: '楂樼', name: 'MAC224鏅曟煋鍒?, brand: 'MAC', price: 260, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭粏鑺傚埛', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪煎奖鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '瀹氬鍠烽浘瀹氬锛屾鏌ユ暣浣撴晥鏋?, image: 'assets/images/steps/wochan4_04.jpg', products: [
                { tier: '楂樼', name: 'Urban Decay瀹氬鍠烽浘', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '缁撴瀯鎶婃彙', desc: '闇€瑕佷竴瀹氱殑闈㈤儴缁撴瀯鐞嗚В锛屽惁鍒欏鏄撶敾鎴愮溂琚?, source: '涓撲笟鍖栧甯?, skinRisk: { dry: 'medium', oily: 'low', sensitive: 'low' } },
              { tip: '骞茬毊寤鸿鐢ㄨ啅鐘朵慨瀹癸紝娌圭毊寤鸿鐢ㄧ矇鐘朵慨瀹? }
            ]
          }
        ]
      },
      {
        id: 'lp002', keyword: '鐪肩嚎鎬庝箞鐢?, title: '鐪肩嚎鎬庝箞鐢讳笉鎵嬫姈锛?, category: '鐪煎',
        solutions: [
          {
            id: 'lp002-s1', name: '涓夌偣杩炵嚎娉?, suitable: ['鏂版墜', '鎵嬫畫鍏?], difficulty: 1, duration: '3鍒嗛挓', effect: '鑷劧娴佺晠', heat: 96, likes: 41200, dislikes: 150,
            steps: [
              { stepNum: 1, description: '鍦ㄧ溂灏俱€佺溂涓€佺溂澶村垎鍒偣涓変釜灏忕偣', image: 'assets/images/steps/yanxian_01.jpg', products: [
                { tier: '楂樼', name: 'Kiss Me鐪肩嚎娑茬瑪', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮溂绾挎恫绗?, brand: '鑺辫タ瀛?, price: 59, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎娑茬瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '灏嗕笁涓偣杞昏交杩炶捣鏉ワ紝涓嶈鐢ㄥ姏', image: 'assets/images/steps/yanxian_02.jpg', products: [
                { tier: '楂樼', name: 'Kiss Me鐪肩嚎娑茬瑪', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮溂绾挎恫绗?, brand: '鑺辫タ瀛?, price: 59, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎娑茬瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '涓嶅杩炶疮鐨勫湴鏂圭敤妫夌铇稿嵏濡嗘按淇敼', image: 'assets/images/steps/yanxian_03.jpg', products: [
                { tier: '楂樼', name: '璐濆痉鐜涘嵏濡嗘按', brand: 'Bioderma', price: 158, rating: 4.7, skinMatch: ['鏁忔劅'] },
                { tier: '涓', name: '缇庡疂鑾茬溂鍞囧嵏', brand: 'Maybelline', price: 59, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧妫夌', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐢ㄦ繁鑹茬溂褰卞湪鐪肩嚎涓婃寜鍘嬶紝璁╃溂绾挎洿鎸佷箙', image: 'assets/images/steps/yanxian_04.jpg', products: [
                { tier: '楂樼', name: 'MAC鐪煎奖鐐粦鑹?, brand: 'MAC', price: 160, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鍗曡壊鐪煎奖', brand: '姗樻湹', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪煎奖', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鎵嬭倶鏀拺', desc: '鐢荤溂绾挎椂鎵嬭倶瑕佹湁鏀拺鐐癸紝鎮┖瀹规槗鎵嬫姈', source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鏂版墜寤鸿鍏堢敾鍐呯溂绾匡紝鐔熺粌鍚庡啀鐢诲鐪肩嚎' }
            ]
          },
          {
            id: 'lp002-s2', name: '鑳跺甫杈呭姪娉?, suitable: ['鏂版墜', '娆х編濡?], difficulty: 2, duration: '5鍒嗛挓', effect: '鍒╄惤涓婃壃', heat: 88, likes: 34500, dislikes: 200,
            steps: [
              { stepNum: 1, description: '鍙栦竴灏忔閫忔槑鑳跺甫锛岃创鍦ㄧ溂灏句綔涓哄弬鑰冪嚎', image: 'assets/images/steps/yanxian2_01.jpg', products: [
                { tier: '楂樼', name: '3M缇庣汗绾歌兌甯?, brand: '3M', price: 25, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏅€氶€忔槑鑳跺甫', brand: '寰楀姏', price: 8, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑳跺甫', brand: 'MINISO', price: 5, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '娌跨潃鑳跺甫杈圭紭鐢诲嚭涓婃壃鐪肩嚎', image: 'assets/images/steps/yanxian2_02.jpg', products: [
                { tier: '楂樼', name: 'Kiss Me鐪肩嚎娑茬瑪', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮溂绾挎恫绗?, brand: '鑺辫タ瀛?, price: 59, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎娑茬瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '杞昏交鎾曟帀鑳跺甫锛屾鏌ョ溂绾胯竟缂?, image: 'assets/images/steps/yanxian2_03.jpg', products: [
                { tier: '楂樼', name: 'Benefit鍗稿姘?, brand: 'Benefit', price: 180, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '缇庡疂鑾茬溂鍞囧嵏', brand: 'Maybelline', price: 59, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍗稿宸?, brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐢ㄩ伄鐟曡啅淇暣杈圭紭锛岃鐪肩嚎鏇村埄钀?, image: 'assets/images/steps/yanxian2_04.jpg', products: [
                { tier: '楂樼', name: 'NARS閬憰鑶?, brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '涔愬緱閬憰娑?, brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '缇庡疂鑾叉鐨摝', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鑳跺甫鎾曢櫎', desc: '鎾曡兌甯︽椂瑕佽交鏌旓紝閬垮厤鎷夋壇鐪奸儴鑲岃偆', source: '鎶よ偆涓撳寤鸿', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'high' } },
              { tip: '鏁忔劅鑲屽缓璁娇鐢ㄤ綆绮樻€х編绾圭焊鑳跺甫锛屼笉瑕佺敤寮哄姏鑳跺甫' }
            ]
          },
          {
            id: 'lp002-s3', name: '鐪煎奖鏇夸唬娉?, suitable: ['鏃ュ父濡?, '鍐呭弻'], difficulty: 1, duration: '2鍒嗛挓', effect: '鏌斿拰鑷劧', heat: 90, likes: 37800, dislikes: 110,
            steps: [
              { stepNum: 1, description: '閫夋嫨娣辨鑹茬溂褰憋紝鐢ㄦ枩瑙掑埛铇稿彇', image: 'assets/images/steps/yanxian3_01.jpg', products: [
                { tier: '楂樼', name: 'Tom Ford鍥涜壊鐪煎奖', brand: 'Tom Ford', price: 720, rating: 4.9, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '3CE涔濆鏍肩溂褰?, brand: '3CE', price: 245, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹鍗曡壊鐪煎奖', brand: '姗樻湹', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '娌跨潃鐫瘺鏍归儴鎸夊帇涓婅壊锛屾ā鎷熺溂绾挎晥鏋?, image: 'assets/images/steps/yanxian3_02.jpg', products: [
                { tier: '楂樼', name: 'MAC鏂滆鍒?, brand: 'MAC', price: 240, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭溂绾垮埛', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐪煎熬鍚戝鎷夊嚭涓€鏉¤嚜鐒剁殑寤堕暱绾?, image: 'assets/images/steps/yanxian3_03.jpg', products: [
                { tier: '楂樼', name: 'MAC鏂滆鍒?, brand: 'MAC', price: 240, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭溂绾垮埛', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '瀹氬鍠烽浘瀹氬', image: 'assets/images/steps/yanxian3_04.jpg', products: [
                { tier: '楂樼', name: 'Urban Decay瀹氬鍠烽浘', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鏅曟煋椋庨櫓', desc: '鐪煎奖鐢荤殑鐪肩嚎瀹规槗鏅曟煋锛屾补鐨渶鍋氬ソ鐪奸儴鎵撳簳', source: '娌圭毊鍗氫富', skinRisk: { dry: 'low', oily: 'high', sensitive: 'low' } },
              { tip: '鍐呭弻寤鸿鐢ㄧ溂绾胯啅鎴栫溂绾胯兌绗旓紝姣旂溂褰辨洿鎸佷箙' }
            ]
          },
          {
            id: 'lp002-s4', name: '鐪肩嚎鑳剁瑪濉紳娉?, suitable: ['鍐呭弻', '鑲跨溂娉?], difficulty: 2, duration: '4鍒嗛挓', effect: '闅愬舰鏈夌', heat: 82, likes: 28900, dislikes: 180,
            steps: [
              { stepNum: 1, description: '鐢ㄧ溂绾胯兌绗斿～婊＄潾姣涙牴閮ㄧ┖闅?, image: 'assets/images/steps/yanxian4_01.jpg', products: [
                { tier: '楂樼', name: 'Bobbi Brown鐪肩嚎鑳剁瑪', brand: 'Bobbi Brown', price: 280, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Canmake鐪肩嚎鑳剁瑪', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎鑳剁瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '杞昏交鎻愭媺涓婄溂鐨紝纭繚鍐呯溂绾夸篃濉弧', image: 'assets/images/steps/yanxian4_02.jpg', products: [
                { tier: '楂樼', name: 'Bobbi Brown鐪肩嚎鑳剁瑪', brand: 'Bobbi Brown', price: 280, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Canmake鐪肩嚎鑳剁瑪', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎鑳剁瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐪煎熬鐢ㄨ兌绗旀媺鍑?mm灏忓熬宸?, image: 'assets/images/steps/yanxian4_03.jpg', products: [
                { tier: '楂樼', name: 'Bobbi Brown鐪肩嚎鑳剁瑪', brand: 'Bobbi Brown', price: 280, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Canmake鐪肩嚎鑳剁瑪', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎鑳剁瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '娣辫壊鐪煎奖鍘嬪湪鐪肩嚎涓婂畾濡?, image: 'assets/images/steps/yanxian4_04.jpg', products: [
                { tier: '楂樼', name: 'MAC鐐粦鐪煎奖', brand: 'MAC', price: 160, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鍗曡壊鐪煎奖', brand: '姗樻湹', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪煎奖', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '绗旇姱杞‖搴?, desc: '鑳剁瑪澶蒋瀹规槗鏂紝澶‖浼氭媺鎵溂鐨?, source: '浜у搧娴嬭瘎', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'medium' } },
              { tip: '鐢讳箣鍓嶅厛鍦ㄦ墜涓婄敾鍑犱笅锛岃绗旇姱鍙樺渾娑﹀啀鐢? }
            ]
          }
        ]
      },
      {
        id: 'lp003', keyword: '鍗曠溂鐨溂褰辨€庝箞鐢?, title: '鍗曠溂鐨溂褰辨€庝箞鐢讳笉鏄捐偪锛?, category: '鐪煎',
        solutions: [
          {
            id: 'lp003-s1', name: '绾靛悜娑堣偪娉?, suitable: ['鍗曠溂鐨?, '鑲跨溂娉?], difficulty: 3, duration: '8鍒嗛挓', effect: '娣遍們娑堣偪', heat: 95, likes: 42300, dislikes: 200,
            steps: [
              { stepNum: 1, description: '鍝戝厜娴呯背鑹插ぇ闈㈢Н鎵撳簳鏁翠釜鐪肩獫', image: 'assets/images/steps/danyan_01.jpg', products: [
                { tier: '楂樼', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '3CE鍝戝厜鐪煎奖', brand: '3CE', price: 245, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹鍝戝厜鐪煎奖', brand: '姗樻湹', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鍝戝厜鐏版鑹插姞娣辩溂灏句笁瑙掑尯锛屽悜鍓嶆檿鏌?, image: 'assets/images/steps/danyan_02.jpg', products: [
                { tier: '楂樼', name: 'Tom Ford鐪煎奖鐩?, brand: 'Tom Ford', price: 720, rating: 4.9, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '瀹岀編鏃ヨ鍔ㄧ墿鐩?, brand: '瀹岀編鏃ヨ', price: 129, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹鐪煎奖鐩?, brand: '姗樻湹', price: 55, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐢ㄦ繁鑹茬溂褰变唬鏇跨溂绾匡紝鐢诲嚭鑷劧鐪肩嚎', image: 'assets/images/steps/danyan_03.jpg', products: [
                { tier: '楂樼', name: 'MAC鐐粦鐪煎奖', brand: 'MAC', price: 160, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮溂褰?, brand: '鑺辫タ瀛?, price: 69, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪煎奖', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '涓嬬溂褰变粠鍚庡線鍓嶇敾锛屽姞娣辩溂閮ㄨ疆寤?, image: 'assets/images/steps/danyan_04.jpg', products: [
                { tier: '楂樼', name: 'MAC鐪煎奖鍒峰瑁?, brand: 'MAC', price: 560, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭溂褰卞埛', brand: 'AMORTALS', price: 49, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪煎奖鍒?, brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '閬垮厤鐝犲厜', desc: '鍗曠溂鐨伩鍏嶅ぇ闈㈢Н浣跨敤鐝犲厜鑹诧紝浼氭樉鑲?, source: '鍗曠溂鐨崥涓?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鐪煎奖鑼冨洿涓嶈澶ぇ锛岀潄寮€鐪肩潧鑳界湅鍒伴鑹插嵆鍙? }
            ]
          },
          {
            id: 'lp003-s2', name: '鎴柇寮忕溂濡?, suitable: ['杩涢樁', '鐜╁'], difficulty: 5, duration: '15鍒嗛挓', effect: '娆х編娣遍們', heat: 78, likes: 23400, dislikes: 400,
            steps: [
              { stepNum: 1, description: '娴呰壊閬憰鍦ㄧ溂绐濈敾鍑烘埅鏂嚎', image: 'assets/images/steps/danyan2_01.jpg', products: [
                { tier: '楂樼', name: 'NARS閬憰鑶?, brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '涔愬緱閬憰娑?, brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '缇庡疂鑾叉鐨摝', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鎴柇绾夸互涓婄敤娣辫壊鐪煎奖鏅曟煋', image: 'assets/images/steps/danyan2_02.jpg', products: [
                { tier: '楂樼', name: 'Huda Beauty鐪煎奖鐩?, brand: 'Huda Beauty', price: 450, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '瀹岀編鏃ヨ鍔ㄧ墿鐩?, brand: '瀹岀編鏃ヨ', price: 129, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹鐪煎奖鐩?, brand: '姗樻湹', price: 55, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鎴柇绾夸互鍐呯敤浜墖鑹插～鍏?, image: 'assets/images/steps/danyan2_03.jpg', products: [
                { tier: '楂樼', name: 'Stila娑蹭綋鐪煎奖', brand: 'Stila', price: 220, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '3CE娑蹭綋鐪煎奖', brand: '3CE', price: 89, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧娑蹭綋鐪煎奖', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐢诲嚭涓婃寫鐪肩嚎锛屽己璋冪溂閮ㄨ疆寤?, image: 'assets/images/steps/danyan2_04.jpg', products: [
                { tier: '楂樼', name: 'Kiss Me鐪肩嚎娑茬瑪', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮溂绾挎恫绗?, brand: '鑺辫タ瀛?, price: 59, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎娑茬瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鎴柇浣嶇疆', desc: '鎴柇绾夸綅缃鎵惧噯纭紝澶珮鎴栧お浣庨兘浼氬奖鍝嶆晥鏋?, source: '娆х編濡嗗崥涓?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鏂版墜寤鸿鍏堢敤娴呰壊鐪煎奖鐢绘埅鏂嚎锛岀啛缁冨悗鍐嶇敤閬憰' }
            ]
          },
          {
            id: 'lp003-s3', name: '闊╃郴娓呮贰娉?, suitable: ['鏃ュ父濡?, '瀛︾敓鍏?], difficulty: 2, duration: '5鍒嗛挓', effect: '娓呮柊鑷劧', heat: 91, likes: 36700, dislikes: 130,
            steps: [
              { stepNum: 1, description: '鍝戝厜鏉忚壊澶ч潰绉墦搴?, image: 'assets/images/steps/danyan3_01.jpg', products: [
                { tier: '楂樼', name: '3CE涔濆鏍肩溂褰?, brand: '3CE', price: 245, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鐪煎奖鐩?, brand: '姗樻湹', price: 55, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪煎奖', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鍝戝厜妫曡壊鍔犳繁鐪煎熬', image: 'assets/images/steps/danyan3_02.jpg', products: [
                { tier: '楂樼', name: '3CE涔濆鏍肩溂褰?, brand: '3CE', price: 245, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鐪煎奖鐩?, brand: '姗樻湹', price: 55, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪煎奖', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鍗ц殨鎻愪寒澧炲姞骞兼€佹劅', image: 'assets/images/steps/danyan3_03.jpg', products: [
                { tier: '楂樼', name: 'Bobbi Brown鏈堝厜鐭?, brand: 'Bobbi Brown', price: 360, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹楂樺厜', brand: '姗樻湹', price: 35, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧楂樺厜', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐫瘺澶圭繕鍒风潾姣涜啅', image: 'assets/images/steps/danyan3_04.jpg', products: [
                { tier: '楂樼', name: 'HR鐚庤惫鐫瘺鑶?, brand: 'HR', price: 420, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Kiss Me鐫瘺鑶?, brand: 'Kiss Me', price: 78, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐫瘺鑶?, brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鐫瘺鑶忛€夋嫨', desc: '鍗曠溂鐨鏄撳帇鐫瘺锛屽缓璁€夌氦闀垮瀷鑰岄潪娴撳瘑鍨?, source: '鍗曠溂鐨崥涓?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '澶圭潾姣涙椂鍒嗕笁娈靛す锛屾牴閮?涓儴-姊㈤儴锛屾洿缈樻洿鎸佷箙' }
            ]
          },
          {
            id: 'lp003-s4', name: '鍋囧弻鐪肩毊璐存硶', suitable: ['绾︿細濡?, '涓婇暅濡?], difficulty: 3, duration: '10鍒嗛挓', effect: '鏀惧ぇ鍙岀溂', heat: 86, likes: 31200, dislikes: 280,
            steps: [
              { stepNum: 1, description: '閫夋嫨姗勬鍨嬪弻鐪肩毊璐达紝鏍规嵁鐪煎瀷瑁佸壀', image: 'assets/images/steps/danyan4_01.jpg', products: [
                { tier: '楂樼', name: 'AB Mezical鍙岀溂鐨创', brand: 'AB', price: 68, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '绱犱箣鐒跺弻鐪肩毊璐?, brand: 'Motonozen', price: 35, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍙岀溂鐨创', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '璐村湪鐪肩毊瑜剁毐澶勶紝鐢╕鍨嬪弶杈呭姪瀹氬瀷', image: 'assets/images/steps/danyan4_02.jpg', products: [
                { tier: '楂樼', name: 'AB鍙岀溂鐨创濂楄', brand: 'AB', price: 68, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '绱犱箣鐒跺弻鐪肩毊璐?, brand: 'Motonozen', price: 35, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍙岀溂鐨创', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '璐村ソ鍚庣敤鐪煎奖瑕嗙洊锛岃鍙岀溂鐨创闅愬舰', image: 'assets/images/steps/danyan4_03.jpg', products: [
                { tier: '楂樼', name: 'MAC鐪煎奖', brand: 'MAC', price: 160, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鐪煎奖', brand: '姗樻湹', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪煎奖', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐢荤溂绾垮拰鐫瘺鑶忥紝瀹屾垚鏀惧ぇ鍙岀溂鏁堟灉', image: 'assets/images/steps/danyan4_04.jpg', products: [
                { tier: '楂樼', name: 'Kiss Me鐪肩嚎娑茬瑪', brand: 'Kiss Me', price: 68, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮溂绾挎恫绗?, brand: '鑺辫タ瀛?, price: 59, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪肩嚎娑茬瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鐪奸儴鏁忔劅', desc: '鍙岀溂鐨创鎾曢櫎鏃跺鏄撴媺鎵溂鐨紝闀挎湡浣跨敤鍙兘瀵艰嚧鐪肩毊鏉惧紱', source: '鐨偆绉戜笓瀹?, skinRisk: { dry: 'medium', oily: 'low', sensitive: 'high' } },
              { tip: '寤鸿浣跨敤涓撶敤鍗搁櫎娑诧紝涓嶈鐩存帴鎾曟壇' }
            ]
          }
        ]
      },
      {
        id: 'lp004', keyword: '鏂版墜搴曞鎬庝箞鐢?, title: '鏂版墜搴曞鎬庝箞鐢绘墠鏈嶅笘涓嶅崱绮夛紵', category: '搴曞',
        solutions: [
          {
            id: 'lp004-s1', name: '婀跨編濡嗚泲娉?, suitable: ['鏂版墜', '骞茬毊'], difficulty: 2, duration: '8鍒嗛挓', effect: '鏈嶅笘姘存鼎', heat: 97, likes: 48900, dislikes: 150,
            steps: [
              { stepNum: 1, description: '濡嗗墠淇濇箍锛岀瓑寰呮姢鑲ゅ搧瀹屽叏鍚告敹', image: 'assets/images/steps/dizhuang_01.jpg', products: [
                { tier: '楂樼', name: 'SK-II绁炰粰姘?, brand: 'SK-II', price: 1540, rating: 4.8, skinMatch: ['娌规€?, '娣峰悎'] },
                { tier: '涓', name: '鐝傛鼎淇濇箍涔虫恫', brand: 'Curel', price: 158, rating: 4.6, skinMatch: ['骞叉€?, '鏁忔劅'] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧淇濇箍鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '绮夊簳娑叉尋鍦ㄦ墜鑳岋紝鐢ㄦ寚鑵圭偣娑傚湪鑴镐笂', image: 'assets/images/steps/dizhuang_02.jpg', products: [
                { tier: '楂樼', name: '闆呰瘲鍏伴粵DW绮夊簳娑?, brand: 'Estee Lauder', price: 420, rating: 4.7, skinMatch: ['娌规€?, '娣峰悎'] },
                { tier: '涓', name: '鍏拌敾鎸佸绮夊簳娑?, brand: 'Lanc么me', price: 450, rating: 4.6, skinMatch: ['娣峰悎', '涓€?] },
                { tier: '骞充环', name: '缇庡疂鑾睩itMe绮夊簳娑?, brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '缇庡铔嬫蹈婀挎尋骞诧紝鐢ㄦ寜鍘嬫柟寮忔媿寮€绮夊簳', image: 'assets/images/steps/dizhuang_03.jpg', products: [
                { tier: '楂樼', name: 'Beauty Blender缇庡铔?, brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭編濡嗚泲', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧缇庡铔?, brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鏁ｇ矇杞绘壂瀹氬锛岄噸鐐瑰湪T鍖?, image: 'assets/images/steps/dizhuang_04.jpg', products: [
                { tier: '楂樼', name: '绾⒌甯屽洓瀹牸鏁ｇ矇', brand: 'Givenchy', price: 590, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愭暎绮?, brand: '鑺辫タ瀛?, price: 149, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鏁ｇ矇', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '缇庡铔嬫箍搴?, desc: '缇庡铔嬪お婀夸細绋€閲婄矇搴曪紝澶共浼氬惛璧扮矇搴?, source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '缇庡铔嬫蹈婀垮悗鐢ㄧ焊宸惧寘鐫€鎸ゅ共锛屾箍搴︽渶閫傚疁' }
            ]
          },
          {
            id: 'lp004-s2', name: '绮夊簳鍒?缇庡铔嬬粨鍚堟硶', suitable: ['鐟曠柕鐨?, '楂橀伄鐟?], difficulty: 3, duration: '10鍒嗛挓', effect: '楂橀伄鐟曟湇甯?, heat: 89, likes: 34500, dislikes: 180,
            steps: [
              { stepNum: 1, description: '鐢ㄧ矇搴曞埛灏嗙矇搴曞潎鍖€鍒峰湪鑴镐笂', image: 'assets/images/steps/dizhuang2_01.jpg', products: [
                { tier: '楂樼', name: 'MAC绮夊簳鍒?, brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭矇搴曞埛', brand: 'AMORTALS', price: 39, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧绮夊簳鍒?, brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '缇庡铔嬫寜鍘嬫媿寮€锛岃绮夊簳鏇磋创鍚?, image: 'assets/images/steps/dizhuang2_02.jpg', products: [
                { tier: '楂樼', name: 'Beauty Blender缇庡铔?, brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭編濡嗚泲', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧缇庡铔?, brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '閬憰鑶忕偣娑傜憰鐤靛锛岀編濡嗚泲杈圭紭鎷嶅紑', image: 'assets/images/steps/dizhuang2_03.jpg', products: [
                { tier: '楂樼', name: 'NARS閬憰鑶?, brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '涔愬緱閬憰娑?, brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '缇庡疂鑾叉鐨摝', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '瀹氬鍠烽浘瀹氬', image: 'assets/images/steps/dizhuang2_04.jpg', products: [
                { tier: '楂樼', name: 'Urban Decay瀹氬鍠烽浘', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鍒风棔澶勭悊', desc: '绮夊簳鍒峰鏄撶暀涓嬪埛鐥曪紝蹇呴』鐢ㄧ編濡嗚泲鎷嶅紑', source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '绮夊簳鍒疯椤虹潃姣涘瓟鏂瑰悜鍒凤紝涓嶈鎵撳湀' }
            ]
          },
          {
            id: 'lp004-s3', name: '鍒嗗尯涓婂娉?, suitable: ['娣峰悎鐨?, 'T鍖烘补'], difficulty: 3, duration: '12鍒嗛挓', effect: '鍒嗗尯鎺ф补', heat: 85, likes: 29800, dislikes: 160,
            steps: [
              { stepNum: 1, description: 'T鍖虹敤鎺ф补濡嗗墠涔虫墦搴?, image: 'assets/images/steps/dizhuang3_01.jpg', products: [
                { tier: '楂樼', name: '璐濈幉濡冨弽瀛旂簿鑻?, brand: 'Benefit', price: 280, rating: 4.6, skinMatch: ['娌规€?, '娣峰悎'] },
                { tier: '涓', name: '鑻忚彶濞滄帶娌瑰鍓?, brand: 'Sofina', price: 120, rating: 4.5, skinMatch: ['娌规€?, '娣峰悎'] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧濡嗗墠涔?, brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '涓ら鐢ㄤ繚婀垮鍓嶄钩鎵撳簳', image: 'assets/images/steps/dizhuang3_02.jpg', products: [
                { tier: '楂樼', name: 'Bobbi Brown姗樺瓙闈㈤湝', brand: 'Bobbi Brown', price: 590, rating: 4.8, skinMatch: ['骞叉€?, '娣峰悎'] },
                { tier: '涓', name: '娉曞浗澶у疂濡嗗墠涔?, brand: 'Embryolisse', price: 98, rating: 4.5, skinMatch: ['骞叉€?, '娣峰悎'] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧淇濇箍濡嗗墠', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: 'T鍖鸿杽娑傜矇搴曪紝涓ら姝ｅ父涓婂', image: 'assets/images/steps/dizhuang3_03.jpg', products: [
                { tier: '楂樼', name: '闃跨帥灏兼潈鍔涚矇搴?, brand: 'Armani', price: 600, rating: 4.8, skinMatch: ['娌规€?, '娣峰悎'] },
                { tier: '涓', name: '鍏拌敾鎸佸绮夊簳', brand: 'Lanc么me', price: 450, rating: 4.6, skinMatch: ['娣峰悎', '涓€?] },
                { tier: '骞充环', name: '缇庡疂鑾睩itMe', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: 'T鍖洪噸鐐瑰畾濡嗭紝涓ら杞绘壂', image: 'assets/images/steps/dizhuang3_04.jpg', products: [
                { tier: '楂樼', name: '绾⒌甯屽洓瀹牸鏁ｇ矇', brand: 'Givenchy', price: 590, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愭暎绮?, brand: '鑺辫タ瀛?, price: 149, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鏁ｇ矇', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '濡嗗墠鍐茬獊', desc: '涓嶅悓濡嗗墠涔充笉瑕佹贩鍚堟秱鎶癸紝瑕佸垎鍖轰娇鐢?, source: '鍖栧甯堝缓璁?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'medium' } },
              { tip: '濡嗗墠涔宠绛夊畬鍏ㄥ惛鏀跺啀涓婄矇搴曪紝鍚﹀垯浼氭悡娉? }
            ]
          },
          {
            id: 'lp004-s4', name: '鎵嬩笂濡嗘硶', suitable: ['鎬ユ晳', '鎳掍汉'], difficulty: 1, duration: '3鍒嗛挓', effect: '蹇€熷潎鍖€', heat: 90, likes: 37800, dislikes: 140,
            steps: [
              { stepNum: 1, description: '绮夊簳娑叉尋鍦ㄦ墜蹇冿紝鍙屾墜鎼撳寑', image: 'assets/images/steps/dizhuang4_01.jpg', products: [
                { tier: '楂樼', name: '闆呰瘲鍏伴粵DW', brand: 'Estee Lauder', price: 420, rating: 4.7, skinMatch: ['娌规€?, '娣峰悎'] },
                { tier: '涓', name: '鍏拌敾鎸佸', brand: 'Lanc么me', price: 450, rating: 4.6, skinMatch: ['娣峰悎', '涓€?] },
                { tier: '骞充环', name: '缇庡疂鑾睩itMe', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鍍忔秱闈㈤湝涓€鏍峰皢绮夊簳鎸夊帇涓婅劯', image: 'assets/images/steps/dizhuang4_02.jpg', products: [
                { tier: '楂樼', name: '闆呰瘲鍏伴粵DW', brand: 'Estee Lauder', price: 420, rating: 4.7, skinMatch: ['娌规€?, '娣峰悎'] },
                { tier: '涓', name: '鍏拌敾鎸佸', brand: 'Lanc么me', price: 450, rating: 4.6, skinMatch: ['娣峰悎', '涓€?] },
                { tier: '骞充环', name: '缇庡疂鑾睩itMe', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鎸囪吂鐐规媿涓嶅潎鍖€鐨勫湴鏂?, image: 'assets/images/steps/dizhuang4_03.jpg', products: [
                { tier: '楂樼', name: '闆呰瘲鍏伴粵DW', brand: 'Estee Lauder', price: 420, rating: 4.7, skinMatch: ['娌规€?, '娣峰悎'] },
                { tier: '涓', name: '鍏拌敾鎸佸', brand: 'Lanc么me', price: 450, rating: 4.6, skinMatch: ['娣峰悎', '涓€?] },
                { tier: '骞充环', name: '缇庡疂鑾睩itMe', brand: 'Maybelline', price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '瀹氬鍠烽浘瀹氬', image: 'assets/images/steps/dizhuang4_04.jpg', products: [
                { tier: '楂樼', name: 'Urban Decay瀹氬鍠烽浘', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鍗敓闂', desc: '鎵嬩笂缁嗚弻杈冨锛屽缓璁礂鎵嬪悗鍐嶄笂濡?, source: '鎶よ偆涓撳', skinRisk: { dry: 'low', oily: 'low', sensitive: 'medium' } },
              { tip: '鎵嬩笂濡嗛€傚悎璐ㄥ湴杈冪█鐨勭矇搴曟恫锛屽お绋犵殑涓嶅ソ鎺ㄥ紑' }
            ]
          }
        ]
      },
      {
        id: 'lp005', keyword: '淇鎬庝箞鎵?, title: '淇鎬庝箞鎵撴墠鑷劧涓嶅亣闈紵', category: '淇',
        solutions: [
          {
            id: 'lp005-s1', name: '3瀛椾慨瀹规硶', suitable: ['鍦嗚劯', '鏂硅劯'], difficulty: 2, duration: '5鍒嗛挓', effect: '鑷劧灏忚劯', heat: 94, likes: 43500, dislikes: 170,
            steps: [
              { stepNum: 1, description: '浠庡お闃崇┐寮€濮嬶紝娌垮彂闄呯嚎鐢?瀛楃涓€绗?, image: 'assets/images/steps/xiurong_01.jpg', products: [
                { tier: '楂樼', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹淇', brand: '姗樻湹', price: 45, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '娌块ⅶ楠ㄤ笅鏂圭敾3瀛楃浜岀瑪', image: 'assets/images/steps/xiurong_02.jpg', products: [
                { tier: '楂樼', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹淇', brand: '姗樻湹', price: 45, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '娌夸笅棰岀嚎鐢?瀛楃涓夌瑪', image: 'assets/images/steps/xiurong_03.jpg', products: [
                { tier: '楂樼', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹淇', brand: '姗樻湹', price: 45, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐢ㄥぇ鍙锋檿鏌撳埛灏嗕慨瀹硅嚜鐒舵檿寮€', image: 'assets/images/steps/xiurong_04.jpg', products: [
                { tier: '楂樼', name: 'MAC淇鍒?, brand: 'MAC', price: 420, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勪慨瀹瑰埛', brand: 'AMORTALS', price: 35, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧淇鍒?, brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鏅曟煋鑼冨洿', desc: '淇涓€瀹氳鏅曟煋寮€锛屽惁鍒欎細鏈夋槑鏄捐壊鍧?, source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '淇棰滆壊瑕佹瘮鑲よ壊娣?-2搴︼紝澶繁浼氭樉鑴? }
            ]
          },
          {
            id: 'lp005-s2', name: '榧诲奖C瀛楁硶', suitable: ['濉岄蓟姊?, '瀹介蓟缈?], difficulty: 2, duration: '4鍒嗛挓', effect: '绔嬩綋榧绘', heat: 93, likes: 41200, dislikes: 150,
            steps: [
              { stepNum: 1, description: '浠庣湁澶翠笅鏂瑰紑濮嬬敾C瀛?, image: 'assets/images/steps/xiurong2_01.jpg', products: [
                { tier: '楂樼', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹淇', brand: '姗樻湹', price: 45, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '娌块蓟姊佷袱渚у悜涓嬬敾', image: 'assets/images/steps/xiurong2_02.jpg', products: [
                { tier: '楂樼', name: 'MAC榧诲奖鍒?, brand: 'MAC', price: 260, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勯蓟褰卞埛', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧榧诲奖鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '榧诲皷鐢诲皬V瀛楃缉灏忛蓟澶?, image: 'assets/images/steps/xiurong2_03.jpg', products: [
                { tier: '楂樼', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹淇', brand: '姗樻湹', price: 45, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '榧绘涓ぎ楂樺厜鎻愪寒', image: 'assets/images/steps/xiurong2_04.jpg', products: [
                { tier: '楂樼', name: 'MAC鐢熷楂樺厜', brand: 'MAC', price: 360, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愰珮鍏?, brand: '鑺辫タ瀛?, price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹楂樺厜', brand: '姗樻湹', price: 35, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: 'C瀛楀绉?, desc: '涓よ竟C瀛楄瀵圭О锛屽惁鍒欓蓟姊佷細姝?, source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '灞辨牴澶勪笉瑕佺敾澶锛屽惁鍒欎細鏄惧緱榧绘寰堢矖' }
            ]
          },
          {
            id: 'lp005-s3', name: '棰ч鍐呮帹娉?, suitable: ['楂橀ⅶ楠?, '鑿卞舰鑴?], difficulty: 3, duration: '6鍒嗛挓', effect: '鏌斿拰杞粨', heat: 87, likes: 28900, dislikes: 190,
            steps: [
              { stepNum: 1, description: '鎵惧埌棰ч鏈€楂樼偣锛屼粠鑰冲墠寮€濮嬫枩鍚戠敾', image: 'assets/images/steps/xiurong3_01.jpg', products: [
                { tier: '楂樼', name: 'MAC Omega', brand: 'MAC', price: 160, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Too Cool For School', brand: 'Too Cool For School', price: 89, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹淇', brand: '姗樻湹', price: 45, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鍚戦潰涓柟鍚戞檿鏌擄紝鍒堕€犲唴鎺ㄦ晥鏋?, image: 'assets/images/steps/xiurong3_02.jpg', products: [
                { tier: '楂樼', name: 'MAC淇鍒?, brand: 'MAC', price: 420, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勪慨瀹瑰埛', brand: 'AMORTALS', price: 35, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧淇鍒?, brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '棰ч涓嬫柟鐢ㄥ搼鍏夐珮鍏夋彁浜?, image: 'assets/images/steps/xiurong3_03.jpg', products: [
                { tier: '楂樼', name: 'MAC鍝戝厜楂樺厜', brand: 'MAC', price: 240, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愰珮鍏?, brand: '鑺辫タ瀛?, price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹楂樺厜', brand: '姗樻湹', price: 35, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '妫€鏌ユ暣浣撳绉板害', image: 'assets/images/steps/xiurong3_04.jpg', products: [
                { tier: '楂樼', name: 'MAC鍖栧闀?, brand: 'MAC', price: 120, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愰殢韬暅', brand: '鑺辫タ瀛?, price: 39, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鎶樺彔闀?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '淇鏂瑰悜', desc: '瑕佷粠澶栧悜鍐呮檿鏌擄紝涓嶈妯悜鎵?, source: '鍖栧甯堝缓璁?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鑿卞舰鑴镐慨瀹归噸鐐瑰湪棰ч锛屼笉瑕佸湪澶槼绌寸敾闃村奖' }
            ]
          },
          {
            id: 'lp005-s4', name: '娑蹭綋淇娉?, suitable: ['骞茬毊', '濂舵补鑲?], difficulty: 3, duration: '6鍒嗛挓', effect: '鑷劧铻嶅悎', heat: 84, likes: 26700, dislikes: 200,
            steps: [
              { stepNum: 1, description: '娑蹭綋淇鐐规秱鍦ㄩ渶瑕佷慨楗扮殑浣嶇疆', image: 'assets/images/steps/xiurong4_01.jpg', products: [
                { tier: '楂樼', name: 'Benefit娑蹭綋淇', brand: 'Benefit', price: 280, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愭恫浣撲慨瀹?, brand: '鑺辫タ瀛?, price: 69, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧娑蹭綋淇', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鐢ㄧ編濡嗚泲鎴栧埛瀛愭媿寮€', image: 'assets/images/steps/xiurong4_02.jpg', products: [
                { tier: '楂樼', name: 'Beauty Blender', brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭編濡嗚泲', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧缇庡铔?, brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '娑蹭綋楂樺厜鐐规秱鍦ㄦ彁浜', image: 'assets/images/steps/xiurong4_03.jpg', products: [
                { tier: '楂樼', name: 'Benefit娑蹭綋楂樺厜', brand: 'Benefit', price: 280, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愭恫浣撻珮鍏?, brand: '鑺辫タ瀛?, price: 69, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧娑蹭綋楂樺厜', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '瀹氬鍠烽浘瀹氬', image: 'assets/images/steps/xiurong4_04.jpg', products: [
                { tier: '楂樼', name: 'Urban Decay瀹氬鍠烽浘', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '绮夊簳鍓嶄娇鐢?, desc: '娑蹭綋淇瑕佸湪绮夊簳鍓嶆垨绮夊簳鍚庣珛鍒讳娇鐢紝瀹氬鍚庢棤娉曚娇鐢?, source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '娑蹭綋淇姣旂矇鐘舵洿鑷劧锛屼絾鎸佷箙搴︾◢宸紝闇€瑕佸畾濡? }
            ]
          }
        ]
      },
      {
        id: 'lp006', keyword: '鑵孩鎬庝箞鎵?, title: '鑵孩鎬庝箞鎵撴墠鏄炬皵鑹蹭笉鐚村眮鑲★紵', category: '鑵孩',
        solutions: [
          {
            id: 'lp006-s1', name: '鑻规灉鑲屾墦娉?, suitable: ['鍦嗚劯', '闀胯劯'], difficulty: 1, duration: '2鍒嗛挓', effect: '鍏冩皵鍑忛緞', heat: 95, likes: 45600, dislikes: 120,
            steps: [
              { stepNum: 1, description: '寰瑧鎵惧埌鑻规灉鑲屾渶楂樼偣', image: 'assets/images/steps/saihong_01.jpg', products: [
                { tier: '楂樼', name: 'NARS鑵孩Orgasm', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鍗曡壊鑵孩', brand: '姗樻湹', price: 29, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鑵孩鍒锋墦鍦堝彇绮夛紝鎶栨帀澶氫綑绮夋湯', image: 'assets/images/steps/saihong_02.jpg', products: [
                { tier: '楂樼', name: 'MAC鑵孩鍒?, brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勮叜绾㈠埛', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鍦ㄨ嫻鏋滆倢鏈€楂樼偣鎵撳湀鏅曟煋', image: 'assets/images/steps/saihong_03.jpg', products: [
                { tier: '楂樼', name: 'NARS鑵孩Orgasm', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鍗曡壊鑵孩', brand: '姗樻湹', price: 29, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '杈圭紭鍚戝洓鍛ㄨ嚜鐒惰繃娓?, image: 'assets/images/steps/saihong_04.jpg', products: [
                { tier: '楂樼', name: 'MAC鑵孩鍒?, brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勮叜绾㈠埛', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鍙栫矇閲?, desc: '灏戦噺澶氭锛屾柊鎵嬪畞灏戝嬁澶?, source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鍦嗚劯妯悜鎵紝闀胯劯鏂滃悜鎵? }
            ]
          },
          {
            id: 'lp006-s2', name: '鐪间笅瀹块唹娉?, suitable: ['鏃ョ郴濡?, '鍙埍椋?], difficulty: 2, duration: '4鍒嗛挓', effect: '寰喓鍙埍', heat: 88, likes: 33400, dislikes: 210,
            steps: [
              { stepNum: 1, description: '閫夋嫨绮夊鑹茶叜绾?, image: 'assets/images/steps/saihong2_01.jpg', products: [
                { tier: '楂樼', name: 'NARS鑵孩Deep Throat', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '3CE鑵孩', brand: '3CE', price: 85, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '浠庣溂涓嬪紑濮嬫í鍚戞壂鑵孩', image: 'assets/images/steps/saihong2_02.jpg', products: [
                { tier: '楂樼', name: 'MAC鑵孩鍒?, brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勮叜绾㈠埛', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '杩炴帴榧绘涓锛屽舰鎴愯繛璐壊鍧?, image: 'assets/images/steps/saihong2_03.jpg', products: [
                { tier: '楂樼', name: 'NARS鑵孩', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '3CE鑵孩', brand: '3CE', price: 85, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐢ㄦ暎绮夎交鍘嬭竟缂橈紝妯＄硦杈圭晫', image: 'assets/images/steps/saihong2_04.jpg', products: [
                { tier: '楂樼', name: '绾⒌甯屽洓瀹牸鏁ｇ矇', brand: 'Givenchy', price: 590, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愭暎绮?, brand: '鑺辫タ瀛?, price: 149, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鏁ｇ矇', brand: 'MINISO', price: 25, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鐪间笅缁嗙汗', desc: '鐪间笅鏈夌粏绾圭殑浜鸿閬垮紑缁嗙汗鍖哄煙', source: '鍖栧甯堝缓璁?, skinRisk: { dry: 'medium', oily: 'low', sensitive: 'low' } },
              { tip: '杩欑鎵撴硶閫傚悎鐨偆濂界殑浜猴紝鐟曠柕鐨笉寤鸿' }
            ]
          },
          {
            id: 'lp006-s3', name: '鏂滃悜鎻愭媺娉?, suitable: ['鏂硅劯', '鍦嗚劯'], difficulty: 2, duration: '3鍒嗛挓', effect: '鎻愭媺鐦﹁劯', heat: 91, likes: 38900, dislikes: 140,
            steps: [
              { stepNum: 1, description: '浠庨ⅶ楠ㄤ笅鏂规枩鍚戝お闃崇┐鏂瑰悜鎵?, image: 'assets/images/steps/saihong3_01.jpg', products: [
                { tier: '楂樼', name: 'NARS鑵孩', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鑵孩', brand: '姗樻湹', price: 29, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '棰滆壊浠庢繁鍒版祬杩囨浮', image: 'assets/images/steps/saihong3_02.jpg', products: [
                { tier: '楂樼', name: 'MAC鑵孩鍒?, brand: 'MAC', price: 380, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勮叜绾㈠埛', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '涓嶈浣庝簬榧诲簳绾?, image: 'assets/images/steps/saihong3_03.jpg', products: [
                { tier: '楂樼', name: 'NARS鑵孩', brand: 'NARS', price: 300, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '姗樻湹鑵孩', brand: '姗樻湹', price: 29, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑵孩', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '妫€鏌ヤ袱杈瑰绉?, image: 'assets/images/steps/saihong3_04.jpg', products: [
                { tier: '楂樼', name: 'MAC鍖栧闀?, brand: 'MAC', price: 120, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愰殢韬暅', brand: '鑺辫タ瀛?, price: 39, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鎶樺彔闀?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '浣嶇疆杩囬珮', desc: '浣嶇疆澶珮浼氭樉寰楅ⅶ楠ㄦ洿楂橈紝涓涵鏇撮暱', source: '鍖栧甯堝缓璁?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鍦嗚劯閫傚悎鏂滃悜鎵紝闀胯劯閫傚悎妯悜鎵? }
            ]
          },
          {
            id: 'lp006-s4', name: '鑶忕姸鑵孩娉?, suitable: ['骞茬毊', '姘村厜鑲?], difficulty: 3, duration: '4鍒嗛挓', effect: '鑷劧閫氶€?, heat: 82, likes: 24500, dislikes: 180,
            steps: [
              { stepNum: 1, description: '鎸囪吂娌惧彇鑶忕姸鑵孩', image: 'assets/images/steps/saihong4_01.jpg', products: [
                { tier: '楂樼', name: 'NARS鑶忕姸鑵孩', brand: 'NARS', price: 320, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Canmake鑶忕姸鑵孩', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑶忕姸鑵孩', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鍦ㄦ墜鑳屾媿寮€锛岃棰滆壊鍙樻贰', image: 'assets/images/steps/saihong4_02.jpg', products: [
                { tier: '楂樼', name: 'NARS鑶忕姸鑵孩', brand: 'NARS', price: 320, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Canmake鑶忕姸鑵孩', brand: 'Canmake', price: 58, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鑶忕姸鑵孩', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐢ㄧ編濡嗚泲鎷嶅湪鑻规灉鑲?, image: 'assets/images/steps/saihong4_03.jpg', products: [
                { tier: '楂樼', name: 'Beauty Blender', brand: 'Beauty Blender', price: 180, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭編濡嗚泲', brand: 'AMORTALS', price: 29, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧缇庡铔?, brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '瀹氬鍠烽浘瀹氬', image: 'assets/images/steps/saihong4_04.jpg', products: [
                { tier: '楂樼', name: 'Urban Decay瀹氬鍠烽浘', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '绮夊簳鍓嶄娇鐢?, desc: '鑶忕姸鑵孩瑕佸湪瀹氬鍓嶄娇鐢紝鍚﹀垯鎺ㄤ笉寮€', source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鑶忕姸鑵孩姣旂矇鐘舵洿鑷劧锛屼絾娌圭毊鍙兘瀹规槗鑴卞' }
            ]
          }
        ]
      },
      {
        id: 'lp007', keyword: '鍞囧鎬庝箞鐢?, title: '鍞囧鎬庝箞鐢绘墠楗辨弧涓嶆樉鍞囩汗锛?, category: '鍞囧',
        solutions: [
          {
            id: 'lp007-s1', name: '鍜攪濡嗘硶', suitable: ['钖勫攪', '鏃ュ父濡?], difficulty: 2, duration: '4鍒嗛挓', effect: '娓愬彉鍑忛緞', heat: 93, likes: 41200, dislikes: 150,
            steps: [
              { stepNum: 1, description: '鍞囬儴閬憰鎵撳簳锛屾ā绯婂師鏈夊攪绾?, image: 'assets/images/steps/chun_01.jpg', products: [
                { tier: '楂樼', name: 'NARS閬憰鑶?, brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '涔愬緱閬憰娑?, brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '缇庡疂鑾叉鐨摝', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鍙ｇ孩娑傚湪鍐呬晶1/3澶?, image: 'assets/images/steps/chun_02.jpg', products: [
                { tier: '楂樼', name: 'YSL灏忛噾鏉?, brand: 'YSL', price: 390, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'MAC瀛愬脊澶?, brand: 'MAC', price: 190, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: 'Colorkey鍞囬噳', brand: 'Colorkey', price: 49, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐢ㄥ攪鍒锋垨鎵嬫寚鍚戝鏅曟煋', image: 'assets/images/steps/chun_03.jpg', products: [
                { tier: '楂樼', name: 'MAC鍞囧埛', brand: 'MAC', price: 220, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勫攪鍒?, brand: 'AMORTALS', price: 19, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍞囧埛', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '閫忔槑鍞囪湝鐐规秱涓ぎ', image: 'assets/images/steps/chun_04.jpg', products: [
                { tier: '楂樼', name: 'Dior鍞囪湝', brand: 'Dior', price: 320, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鐝傛媺鐞攪铚?, brand: 'Colorkey', price: 39, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍞囪湝', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鍞囬儴鐘舵€?, desc: '鍞囬儴骞茬嚗璧风毊鏃舵晥鏋滃樊锛岄渶鍏堝幓瑙掕川', source: '鍖栧甯堝缓璁?, skinRisk: { dry: 'high', oily: 'low', sensitive: 'medium' } },
              { tip: '鍜攪濡嗛€傚悎棰滆壊楗卞拰搴﹂珮鐨勫彛绾? }
            ]
          },
          {
            id: 'lp007-s2', name: '婊″攪娉?, suitable: ['鍘氬攪', '姝ｅ紡鍦哄悎'], difficulty: 2, duration: '5鍒嗛挓', effect: '绮捐嚧楗辨弧', heat: 89, likes: 35600, dislikes: 130,
            steps: [
              { stepNum: 1, description: '鍞囩嚎绗斿嬀鍕掑攪褰?, image: 'assets/images/steps/chun2_01.jpg', products: [
                { tier: '楂樼', name: 'MAC鍞囩嚎绗?, brand: 'MAC', price: 170, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愬攪绾跨瑪', brand: '鑺辫タ瀛?, price: 49, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍞囩嚎绗?, brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鍙ｇ孩濉弧鍞囬儴', image: 'assets/images/steps/chun2_02.jpg', products: [
                { tier: '楂樼', name: 'YSL灏忛噾鏉?, brand: 'YSL', price: 390, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'MAC瀛愬脊澶?, brand: 'MAC', price: 190, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: 'Colorkey鍞囬噳', brand: 'Colorkey', price: 49, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐢ㄩ伄鐟曞埛淇暣杈圭紭', image: 'assets/images/steps/chun2_03.jpg', products: [
                { tier: '楂樼', name: 'MAC閬憰鍒?, brand: 'MAC', price: 260, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勯伄鐟曞埛', brand: 'AMORTALS', price: 25, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧閬憰鍒?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '瀹氬鍠烽浘杞诲柗', image: 'assets/images/steps/chun2_04.jpg', products: [
                { tier: '楂樼', name: 'Urban Decay瀹氬鍠烽浘', brand: 'Urban Decay', price: 260, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鏌忕憺缇庡畾濡嗗柗闆?, brand: 'PRAMY', price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧瀹氬鍠烽浘', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鍞囩嚎棰滆壊', desc: '鍞囩嚎绗旈鑹茶鍜屽彛绾㈡帴杩戯紝鍚﹀垯浼氭湁鍒嗗眰鎰?, source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '婊″攪娉曢€傚悎姝ｅ紡鍦哄悎锛屾棩甯稿彲鑳芥樉寰楀お闅嗛噸' }
            ]
          },
          {
            id: 'lp007-s3', name: '鍢熷槦鍞囨硶', suitable: ['钖勫攪', '绾︿細濡?], difficulty: 3, duration: '6鍒嗛挓', effect: '姘存鼎楗辨弧', heat: 90, likes: 38900, dislikes: 160,
            steps: [
              { stepNum: 1, description: '閬憰鎵撳簳鍚庯紝鍙ｇ孩娑傛弧鍞囬儴', image: 'assets/images/steps/chun3_01.jpg', products: [
                { tier: '楂樼', name: 'YSL鍞囬噳', brand: 'YSL', price: 380, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '3CE鍞囬噳', brand: '3CE', price: 110, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: 'Colorkey鍞囬噳', brand: 'Colorkey', price: 49, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鍞囧嘲鍜屽攪涓ぎ鐐规秱楂樺厜', image: 'assets/images/steps/chun3_02.jpg', products: [
                { tier: '楂樼', name: 'MAC鐢熷楂樺厜', brand: 'MAC', price: 360, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愰珮鍏?, brand: '鑺辫タ瀛?, price: 89, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹楂樺厜', brand: '姗樻湹', price: 35, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '閫忔槑鍞囪湝鍘氭秱涓ぎ', image: 'assets/images/steps/chun3_03.jpg', products: [
                { tier: '楂樼', name: 'Dior鍞囪湝', brand: 'Dior', price: 320, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鐝傛媺鐞攪铚?, brand: 'Colorkey', price: 39, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍞囪湝', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鍢磋鐢ㄩ伄鐟曟彁浜紝鍒堕€犲井绗戞劅', image: 'assets/images/steps/chun3_04.jpg', products: [
                { tier: '楂樼', name: 'NARS閬憰鑶?, brand: 'NARS', price: 300, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '涔愬緱閬憰娑?, brand: 'Medicube', price: 79, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '缇庡疂鑾叉鐨摝', brand: 'Maybelline', price: 59, rating: 4.2, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鍞囪湝鐢ㄩ噺', desc: '鍞囪湝澶浼氭祦鍒板攪澶栵紝鏄惧緱娌硅吇', source: '鍖栧甯堝缓璁?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '椋庡惞澶村彂浼氱矘鍒板攪铚滐紝鎴峰娲诲姩鎱庣敤' }
            ]
          },
          {
            id: 'lp007-s4', name: '娓愬彉鍞囨硶', suitable: ['鏃ュ父濡?, '闊╁'], difficulty: 2, duration: '5鍒嗛挓', effect: '鑷劧娓愬彉', heat: 88, likes: 33400, dislikes: 140,
            steps: [
              { stepNum: 1, description: '娴呰壊鍙ｇ孩娑傛弧鍞囬儴鎵撳簳', image: 'assets/images/steps/chun4_01.jpg', products: [
                { tier: '楂樼', name: 'YSL鍦嗙', brand: 'YSL', price: 360, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'MAC瀛愬脊澶?, brand: 'MAC', price: 190, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: 'Colorkey鍞囬噳', brand: 'Colorkey', price: 49, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '娣辫壊鍙ｇ孩鐐规秱鍐呬晶', image: 'assets/images/steps/chun4_02.jpg', products: [
                { tier: '楂樼', name: 'YSL灏忛噾鏉?, brand: 'YSL', price: 390, rating: 4.8, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '3CE鍞囬噳', brand: '3CE', price: 110, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '姗樻湹鍞囬噳', brand: '姗樻湹', price: 39, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐢ㄥ攪鍒峰皢浜ょ晫澶勬檿鏌撳紑', image: 'assets/images/steps/chun4_03.jpg', products: [
                { tier: '楂樼', name: 'MAC鍞囧埛', brand: 'MAC', price: 220, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勫攪鍒?, brand: 'AMORTALS', price: 19, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍞囧埛', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鍞囪湝鐐规秱涓ぎ澧炲姞绔嬩綋鎰?, image: 'assets/images/steps/chun4_04.jpg', products: [
                { tier: '楂樼', name: 'Dior鍞囪湝', brand: 'Dior', price: 320, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鐝傛媺鐞攪铚?, brand: 'Colorkey', price: 39, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鍞囪湝', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '棰滆壊鎼厤', desc: '娣辨祬鑹茶灞炰簬鍚岃壊绯伙紝鎾炶壊浼氭樉鑴?, source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '娴呰壊鍦ㄥ娣辫壊鍦ㄥ唴鏄挰鍞囷紝娣辫壊鍦ㄥ娴呰壊鍦ㄥ唴鏄鍞? }
            ]
          }
        ]
      },
      {
        id: 'lp008', keyword: '鐪夋瘺鎬庝箞鐢?, title: '鐪夋瘺鎬庝箞鐢诲绉板張鑷劧锛?, category: '鐪夊舰',
        solutions: [
          {
            id: 'lp008-s1', name: '涓夌偣瀹氫綅娉?, suitable: ['鏂版墜', '鎵€鏈変汉'], difficulty: 2, duration: '6鍒嗛挓', effect: '瀵圭О鏍囧噯', heat: 96, likes: 47800, dislikes: 130,
            steps: [
              { stepNum: 1, description: '榧荤考鍒扮溂瑙掔殑寤堕暱绾跨‘瀹氱湁澶?, image: 'assets/images/steps/meimao_01.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌瑪', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮湁绗?, brand: '鑺辫タ瀛?, price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '榧荤考鍒扮灣瀛旂殑寤堕暱绾跨‘瀹氱湁宄?, image: 'assets/images/steps/meimao_02.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌瑪', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮湁绗?, brand: '鑺辫タ瀛?, price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '榧荤考鍒扮溂灏剧殑寤堕暱绾跨‘瀹氱湁灏?, image: 'assets/images/steps/meimao_03.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌瑪', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮湁绗?, brand: '鑺辫タ瀛?, price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐢ㄧ湁绗旀垨鐪夌矇杩炴帴涓夌偣骞跺～鍏?, image: 'assets/images/steps/meimao_04.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌矇', brand: 'Benefit', price: 260, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Kate鐪夌矇', brand: 'Kate', price: 79, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌矇', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鐪夊ご浣嶇疆', desc: '鐪夊ご涓嶈澶繎锛屼細鏄惧嚩锛涗篃涓嶈澶繙锛屼細鏄惧偦', source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '涓夌偣瀹氫綅鍚庤交杞荤敾绾匡紝涓嶈鐢ㄥ姏锛屽悗缁彲浠ュ啀璋冩暣' }
            ]
          },
          {
            id: 'lp008-s2', name: '鐪夌矇濉厖娉?, suitable: ['鐪夋瘺绋€鐤?, '鏃ュ父濡?], difficulty: 1, duration: '4鍒嗛挓', effect: '鏌斿拰鑷劧', heat: 92, likes: 38900, dislikes: 110,
            steps: [
              { stepNum: 1, description: '鐪夊埛铇稿彇娴呰壊鐪夌矇锛岀敾鍑虹湁褰㈣疆寤?, image: 'assets/images/steps/meimao2_01.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌矇', brand: 'Benefit', price: 260, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Kate鐪夌矇', brand: 'Kate', price: 79, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌矇', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鐢ㄦ繁鑹茬湁绮夊～鍏呬腑闂村拰灏鹃儴', image: 'assets/images/steps/meimao2_02.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌矇', brand: 'Benefit', price: 260, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Kate鐪夌矇', brand: 'Kate', price: 79, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌矇', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐪夊埛姊崇悊鐪夋瘺锛岃棰滆壊鍧囧寑', image: 'assets/images/steps/meimao2_03.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夊埛', brand: 'Benefit', price: 180, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '灏旀湪钀勭湁鍒?, brand: 'AMORTALS', price: 19, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夊埛', brand: 'MINISO', price: 10, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '鐪夋瘺闆ㄨ。瀹氬瀷', image: 'assets/images/steps/meimao2_04.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夋瘺闆ㄨ。', brand: 'Benefit', price: 200, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '澶у垱鐪夋瘺闆ㄨ。', brand: 'DAISO', price: 15, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夋瘺闆ㄨ。', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鐪夌矇棰滆壊', desc: '鐪夌矇棰滆壊瑕佹瘮澶村彂娴呬竴鍙凤紝澶繁浼氭樉鍋?, source: '鍖栧甯堝缓璁?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鐪夊ご娴呯湁灏炬繁锛屼笂缂樻祬涓嬬紭娣憋紝杩欐牱鏈€鑷劧' }
            ]
          },
          {
            id: 'lp008-s3', name: '閲庣敓鐪夋硶', suitable: ['鐪夋瘺娴撳瘑', '娆х編濡?], difficulty: 3, duration: '8鍒嗛挓', effect: '姣涙祦鎰熷己', heat: 88, likes: 34500, dislikes: 180,
            steps: [
              { stepNum: 1, description: '鐪夌殏鎴栫湁鑳跺皢鐪夋瘺鍚戜笂姊?, image: 'assets/images/steps/meimao3_01.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夎兌', brand: 'Benefit', price: 220, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮湁鑳?, brand: '鑺辫タ瀛?, price: 59, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夎兌', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鏋佺粏鐪夌瑪鐢诲嚭鏍规牴鍒嗘槑鐨勬瘺娴?, image: 'assets/images/steps/meimao3_02.jpg', products: [
                { tier: '楂樼', name: 'Benefit鏋佺粏鐪夌瑪', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愭瀬缁嗙湁绗?, brand: '鑺辫タ瀛?, price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鏋佺粏鐪夌瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐪夌矇濉ˉ绌洪殭', image: 'assets/images/steps/meimao3_03.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌矇', brand: 'Benefit', price: 260, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: 'Kate鐪夌矇', brand: 'Kate', price: 79, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌矇', brand: 'MINISO', price: 19, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '閫忔槑鐪夎兌瀹氬瀷', image: 'assets/images/steps/meimao3_04.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夋瘺闆ㄨ。', brand: 'Benefit', price: 200, rating: 4.6, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '澶у垱鐪夋瘺闆ㄨ。', brand: 'DAISO', price: 15, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夋瘺闆ㄨ。', brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鐪夋瘺闀垮害', desc: '閲庣敓鐪変笉鏄贡鐪夛紝瑕佹湁鍩烘湰鐪夊舰妗嗘灦', source: '鍖栧甯堟妧宸?, skinRisk: { dry: 'low', oily: 'low', sensitive: 'low' } },
              { tip: '鐪夋瘺绋€鐤忕殑浜洪渶瑕佹洿澶氱湁绗旇ˉ鍏咃紝娴撳瘑鐨勪汉鍙渶瀹氬瀷' }
            ]
          },
          {
            id: 'lp008-s4', name: '鐪夌瑪蹇€熸硶', suitable: ['鎬ユ晳', '閫氬嫟'], difficulty: 1, duration: '2鍒嗛挓', effect: '蹇€熸垚鍨?, heat: 94, likes: 42300, dislikes: 120,
            steps: [
              { stepNum: 1, description: '鐪夌瑪浠庣湁澶寸敾鍒扮湁灏撅紝鐢诲嚭鍩烘湰妗嗘灦', image: 'assets/images/steps/meimao4_01.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌瑪', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮湁绗?, brand: '鑺辫タ瀛?, price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 2, description: '鐢ㄧ湁绗斿彟涓€澶寸湁鍒锋⒊鐞嗘檿鏌?, image: 'assets/images/steps/meimao4_02.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌瑪', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮湁绗?, brand: '鑺辫タ瀛?, price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 3, description: '鐪夊熬涓嶅闀跨殑鍦版柟琛ュ嚑绗?, image: 'assets/images/steps/meimao4_03.jpg', products: [
                { tier: '楂樼', name: 'Benefit鐪夌瑪', brand: 'Benefit', price: 235, rating: 4.7, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愮湁绗?, brand: '鑺辫タ瀛?, price: 69, rating: 4.4, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鐪夌瑪', brand: 'MINISO', price: 15, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]},
              { stepNum: 4, description: '妫€鏌ュ绉板害', image: 'assets/images/steps/meimao4_04.jpg', products: [
                { tier: '楂樼', name: 'MAC鍖栧闀?, brand: 'MAC', price: 120, rating: 4.5, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '涓', name: '鑺辫タ瀛愰殢韬暅', brand: '鑺辫タ瀛?, price: 39, rating: 4.3, skinMatch: ['鍏ㄨ偆璐?] },
                { tier: '骞充环', name: '鍚嶅垱浼樺搧鎶樺彔闀?, brand: 'MINISO', price: 12, rating: 4.0, skinMatch: ['鍏ㄨ偆璐?] }
              ]}
            ],
            warnings: [
              { title: '鐪夌瑪纭害', desc: '澶蒋鐨勭湁绗斿鏄撶粨鍧楋紝澶‖鐨勪笉濂戒笂鑹?, source: '浜у搧娴嬭瘎', skinRisk: { dry: 'medium', oily: 'low', sensitive: 'medium' } },
              { tip: '鏂版墜寤鸿閫夎嚜鍔ㄦ棆杞湁绗旓紝涓嶇敤鍓婏紝鏂逛究鎺у埗' }
            ]
          }
        ]
      }
    ],

    // ============================================================
    // 5. hotRanking 鈥?鐑害姒滐紙20鏉★級
    // ============================================================
    hotRanking: [
      { rank: 1, name: '鏃╁叓閫氬嫟濡?鍒嗛挓鎼炲畾', heat: 985000, tag: '閫氬嫟', creatorName: '灏忛箍缇庡', category: '鏃ュ父濡? },
      { rank: 2, name: '绾鐧藉紑姘村', heat: 923000, tag: '绾', creatorName: '妗冨瓙杞硸', category: '鏃ュ父濡? },
      { rank: 3, name: '澶氬反鑳哄厓姘斿', heat: 876000, tag: '澶氬反鑳?, creatorName: '褰╄櫣绯?, category: '鍒涙剰濡? },
      { rank: 4, name: '闊╃郴濂抽珮濡?, heat: 845000, tag: '闊╃郴', creatorName: '姗欏瓙姘旀场姘?, category: '瀛﹂櫌濡? },
      { rank: 5, name: 'Y2K鍗冪Η濡?, heat: 812000, tag: 'Y2K', creatorName: 'CyberPink', category: '鍒涙剰濡? },
      { rank: 6, name: '濡堢敓鎰熷崸铓曠敾娉?, heat: 789000, tag: '鍗ц殨', creatorName: '缇庡鐮旂┒鎵€', category: '鐪煎' },
      { rank: 7, name: '楠ㄧ浉淇娉?, heat: 756000, tag: '淇', creatorName: '淇澶у笀', category: '淇' },
      { rank: 8, name: '鍗曠溂鐨秷鑲跨溂褰卞叕寮?, heat: 734000, tag: '鐪煎奖', creatorName: '鍗曠溂鐨崥涓?, category: '鐪煎' },
      { rank: 9, name: '鏂颁腑寮忔竻鍐峰', heat: 698000, tag: '鏂颁腑寮?, creatorName: '闈掔摲缇庡', category: '鍥介濡? },
      { rank: 10, name: '澶槼鑺辩潾姣涙暀绋?, heat: 678000, tag: '鐫瘺', creatorName: '鐫瘺绮?, category: '鐪煎' },
      { rank: 11, name: '璧甸湶鎬濆悓娆剧敎缇庤湝妗冨', heat: 654000, tag: '鏄庢槦鍚屾', creatorName: '鏄庢槦浠垮', category: '鐢滅編濡? },
      { rank: 12, name: '娓澶嶅彜濡?, heat: 632000, tag: '娓', creatorName: '鐜懓涓庨粍鏄?, category: '澶嶅彜濡? },
      { rank: 13, name: '缇庢媺寰风鍐', heat: 612000, tag: '缇庢媺寰?, creatorName: '绉嬬缇庡', category: '瀛ｈ妭濡? },
      { rank: 14, name: '閲庣敓鐪夌敾娉?, heat: 589000, tag: '鐪夋瘺', creatorName: '鐪夋瘺涓撳', category: '鐪夊舰' },
      { rank: 15, name: '3鍒嗛挓蹇€熷嚭闂ㄥ', heat: 567000, tag: '蹇€熷', creatorName: '鎳掍汉缇庡', category: '搴曞' },
      { rank: 16, name: '閽撶郴寰″濡?, heat: 545000, tag: '寰″', creatorName: 'Vivi makeup', category: '杞荤啛濡? },
      { rank: 17, name: '鍞愬锛氳姳閽胯创闈?, heat: 523000, tag: '鍥介', creatorName: '鍥介缇庡', category: '鍥介濡? },
      { rank: 18, name: '鑺暰灏戝コ濡?, heat: 498000, tag: '鑺暰', creatorName: '澶╅箙缁?, category: '鐢滅編濡? },
      { rank: 19, name: '闊╁姘村厜鑲岀璇€', heat: 476000, tag: '姘村厜鑲?, creatorName: '姘村厜鑲岃揪浜?, category: '搴曞' },
      { rank: 20, name: '鎴柇寮忔缇庣溂濡?, heat: 456000, tag: '鎴柇寮?, creatorName: '娆х編濡嗗崥涓?, category: '鐪煎' }
    ],

    // ============================================================
    // 6. banners 鈥?Banner杞挱锛?鏉★級
    // ============================================================
    banners: [
      { id: 'bn001', title: '鏂版槬闄愬畾', subtitle: '鍥介濡嗗鎸戞垬璧涘紑鍚?, image: 'assets/images/banners/banner_001.jpg', linkType: 'activity', linkTarget: 'challenge-spring', bgGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)' },
      { id: 'bn002', title: '澶х墝鑱斿悕', subtitle: 'YSL绾㈠攪濡嗘ā鏉块檺鏃跺厤璐?, image: 'assets/images/banners/banner_002.jpg', linkType: 'template', linkTarget: 'ysl-red-lip', bgGradient: 'linear-gradient(135deg, #C0392B 0%, #F39C12 100%)' },
      { id: 'bn003', title: '鏂版墜涓撳尯', subtitle: '0鍩虹鍖栧鍏ラ棬鎸囧崡', image: 'assets/images/banners/banner_003.jpg', linkType: 'page', linkTarget: 'beginner-guide', bgGradient: 'linear-gradient(135deg, #3498DB 0%, #9B59B6 100%)' },
      { id: 'bn004', title: '閾跺彂鐒曟柊', subtitle: '50+浼橀泤濡嗗绮鹃€?, image: 'assets/images/banners/banner_004.jpg', linkType: 'category', linkTarget: 'silver-zone', bgGradient: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)' },
      { id: 'bn005', title: '鎴愬垎瀹夊叏', subtitle: '涓€閿壂鎻忓寲濡嗗搧鎴愬垎', image: 'assets/images/banners/banner_005.jpg', linkType: 'feature', linkTarget: 'ingredient-scan', bgGradient: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)' },
      { id: 'bn006', title: '姣忔棩绛惧埌', subtitle: '杩炵画绛惧埌棰咷P濂界ぜ', image: 'assets/images/banners/banner_006.jpg', linkType: 'task', linkTarget: 'daily-checkin', bgGradient: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)' }
    ],

    // ============================================================
    // 7. dailyTasks 鈥?姣忔棩浠诲姟锛?鏉★級
    // ============================================================
    dailyTasks: [
      { id: 'dt001', name: '姣忔棩绛惧埌', description: '姣忔棩鐧诲綍App绛惧埌棰嗗彇GP濂栧姳', rewardGP: 10, totalSteps: 1, icon: 'assets/icons/checkin.png', type: 'checkin' },
      { id: 'dt002', name: '娴忚濡嗗妯℃澘', description: '娴忚5涓瀹规ā鏉垮苟瀹屾垚瑙傜湅', rewardGP: 15, totalSteps: 5, icon: 'assets/icons/browse.png', type: 'browse' },
      { id: 'dt003', name: '鎴愬垎鎵弿', description: '浣跨敤鎴愬垎鎵弿鍔熻兘鎵弿1涓骇鍝?, rewardGP: 20, totalSteps: 1, icon: 'assets/icons/scan.png', type: 'scan' },
      { id: 'dt004', name: '鏀惰棌濡嗗', description: '鏀惰棌3涓枩娆㈢殑濡嗗妯℃澘', rewardGP: 15, totalSteps: 3, icon: 'assets/icons/favorite.png', type: 'favorite' },
      { id: 'dt005', name: '鍒嗕韩濡嗗', description: '灏嗗枩娆㈢殑濡嗗鍒嗕韩鍒扮ぞ浜ゅ钩鍙?, rewardGP: 25, totalSteps: 1, icon: 'assets/icons/share.png', type: 'share' },
      { id: 'dt006', name: '瀹屾垚闀滈潰鍖栧', description: '浣跨敤AR闀滈潰鍔熻兘瀹屾垚涓€娆″寲濡?, rewardGP: 30, totalSteps: 1, icon: 'assets/icons/mirror.png', type: 'mirror' },
      { id: 'dt007', name: '鍙戝竷闂瓟', description: '鍦ㄩ棶绛斿尯鍙戝竷涓€涓編濡嗛棶棰樻垨鍥炵瓟', rewardGP: 20, totalSteps: 1, icon: 'assets/icons/qa.png', type: 'qa' },
      { id: 'dt008', name: '閭€璇峰ソ鍙?, description: '閭€璇?浣嶅ソ鍙嬫敞鍐屽浼碅pp', rewardGP: 50, totalSteps: 1, icon: 'assets/icons/invite.png', type: 'invite' }
    ],

    // ============================================================
    // 8. achievements 鈥?鎴愬氨寰界珷锛?2鏉★級
    // ============================================================
    achievements: [
      { id: 'ac001', name: '鍒濆嚭鑼呭簮', description: '瀹屾垚鏂版墜寮曞锛屽紑鍚編濡嗕箣鏃?, icon: 'assets/icons/achievement_001.png', condition: '瀹屾垚鏂版墜寮曞', rarity: 'common' },
      { id: 'ac002', name: '缇庡杈句汉', description: '绱鏀惰棌50涓瀹规ā鏉?, icon: 'assets/icons/achievement_002.png', condition: '鏀惰棌50涓瀹?, rarity: 'common' },
      { id: 'ac003', name: '鎴愬垎涓撳', description: '绱鎵弿30涓骇鍝佹垚鍒?, icon: 'assets/icons/achievement_003.png', condition: '鎵弿30涓骇鍝?, rarity: 'rare' },
      { id: 'ac004', name: '鍥介浼犳壙鑰?, description: '瀹屾垚5涓浗椋庡瀹瑰涔?, icon: 'assets/icons/achievement_004.png', condition: '瀛︿範5涓浗椋庡', rarity: 'rare' },
      { id: 'ac005', name: '閾跺彂鐒曟柊甯?, description: '涓洪摱鍙戞棌缇ゅ垱寤烘垨鍒嗕韩3涓瀹?, icon: 'assets/icons/achievement_005.png', condition: '鍒嗕韩3涓摱鍙戝', rarity: 'rare' },
      { id: 'ac006', name: '鍓佹墜鐜嬭€?, description: '鍦ㄥ晢鍩庣疮璁′笅鍗?0娆?, icon: 'assets/icons/achievement_006.png', condition: '鍟嗗煄涓嬪崟10娆?, rarity: 'epic' },
      { id: 'ac007', name: '闀滈潰澶у笀', description: '浣跨敤AR闀滈潰鍖栧绱30娆?, icon: 'assets/icons/achievement_007.png', condition: 'AR鍖栧30娆?, rarity: 'rare' },
      { id: 'ac008', name: '鍒嗕韩涔嬫槦', description: '绱鍒嗕韩濡嗗鍒扮ぞ浜ゅ钩鍙?0娆?, icon: 'assets/icons/achievement_008.png', condition: '鍒嗕韩20娆?, rarity: 'common' },
      { id: 'ac009', name: '闂瓟杈句汉', description: '鍦ㄩ棶绛斿尯鑾峰緱100涓禐鍚?, icon: 'assets/icons/achievement_009.png', condition: '鑾疯禐100娆?, rarity: 'rare' },
      { id: 'ac010', name: '绛惧埌鐜嬭€?, description: '杩炵画绛惧埌30澶?, icon: 'assets/icons/achievement_010.png', condition: '杩炵画绛惧埌30澶?, rarity: 'epic' },
      { id: 'ac011', name: '鍝佺墝鎸氬弸', description: '涓?涓搧鐗屽畼鏂硅处鍙蜂簰鍔?, icon: 'assets/icons/achievement_011.png', condition: '浜掑姩3涓搧鐗?, rarity: 'legendary' },
      { id: 'ac012', name: '濡嗕即鍏冭€?, description: '娉ㄥ唽濡嗕即婊?65澶?, icon: 'assets/icons/achievement_012.png', condition: '娉ㄥ唽婊?65澶?, rarity: 'legendary' }
    ],

    // ============================================================
    // 9. levels 鈥?绛夌骇浣撶郴锛?绾э級
    // ============================================================
    levels: [
      { level: 1, name: '閾滃', nameEn: 'Bronze', minGP: 0, maxGP: 99, icon: 'assets/icons/level_bronze.png', benefits: ['姣忔棩绛惧埌1鍊岹P', '鍩虹濡嗗妯℃澘'] },
      { level: 2, name: '閾跺', nameEn: 'Silver', minGP: 100, maxGP: 499, icon: 'assets/icons/level_silver.png', benefits: ['姣忔棩绛惧埌1.2鍊岹P', '瑙ｉ攣杩涢樁濡嗗', '涓撳睘閾跺杈规'] },
      { level: 3, name: '閲戝', nameEn: 'Gold', minGP: 500, maxGP: 1499, icon: 'assets/icons/level_gold.png', benefits: ['姣忔棩绛惧埌1.5鍊岹P', '瑙ｉ攣澶у笀濡嗗', '涓撳睘閲戝杈规', '浼樺厛瀹㈡湇'] },
      { level: 4, name: '閽诲', nameEn: 'Diamond', minGP: 1500, maxGP: 4999, icon: 'assets/icons/level_diamond.png', benefits: ['姣忔棩绛惧埌2鍊岹P', '鍏ㄧ珯妯℃澘鍏嶈垂', '涓撳睘閽诲杈规', '1瀵?缇庡椤鹃棶'] },
      { level: 5, name: '鏄熷', nameEn: 'Star', minGP: 5000, maxGP: 99999, icon: 'assets/icons/level_star.png', benefits: ['姣忔棩绛惧埌3鍊岹P', '涓撳睘鏄熷鏍囪瘑', '绾夸笅娲诲姩閭€璇?, '鍝佺墝鏂板搧璇曠敤', '涓撳睘瀹氬埗濡嗗'] }
    ],

    // ============================================================
    // 10. skinProfile 鈥?鑲よ川/鑴稿瀷/鑲よ壊鏁版嵁
    // ============================================================
    skinProfile: {
      skinTypes: [
        { id: 'st001', name: '骞叉€?, description: '鐨剛鍒嗘硨灏戯紝鐨偆骞茬嚗锛屾槗璧风毊' },
        { id: 'st002', name: '娌规€?, description: '鐨剛鍒嗘硨鏃虹洓锛屾瘺瀛旂矖澶э紝鏄撻暱鐥? },
        { id: 'st003', name: '娣峰悎', description: 'T鍖烘补涓ら骞诧紝闇€瑕佸垎鍖烘姢鐞? },
        { id: 'st004', name: '涓€?, description: '姘存补骞宠　锛岀毊鑲ょ姸鎬佺ǔ瀹? },
        { id: 'st005', name: '鏁忔劅', description: '鐨偆钖勶紝鏄撴硾绾紝闇€娓╁拰鎶ょ悊' }
      ],
      faceShapes: [
        { id: 'fs001', name: '妞渾鑴?, description: '棰濆ご涓庨ⅶ楠ㄥ熀鏈瓑瀹斤紝鑴搁暱绾︿负鑴稿鐨?.5鍊? },
        { id: 'fs002', name: '鍦嗚劯', description: '鑴搁暱涓庤劯瀹芥帴杩戯紝杞粨鍦嗘鼎' },
        { id: 'fs003', name: '鏂硅劯', description: '涓嬮楠ㄦ槑鏄撅紝棰濆ご涓庝笅棰屽搴︽帴杩? },
        { id: 'fs004', name: '闀胯劯', description: '鑴搁暱鏄庢樉澶т簬鑴稿锛屼腑搴緝闀? },
        { id: 'fs005', name: '蹇冨舰鑴?, description: '棰濆ご瀹斤紝涓嬮绐勶紝灏栦笅宸? },
        { id: 'fs006', name: '鑿卞舰鑴?, description: '棰ч鏈€瀹斤紝棰濆ご鍜屼笅棰岃緝绐? }
      ],
      skinTones: [
        { id: 'ton001', name: '鍐风櫧鐨?, description: '鑲よ壊鍋忕櫧锛岃绠″憟钃濈传鑹诧紝閫傚悎閾堕グ' },
        { id: 'ton002', name: '鏆栭粍鐨?, description: '鑲よ壊鍋忛粍锛岃绠″憟缁胯壊锛岄€傚悎閲戦グ' },
        { id: 'ton003', name: '涓€х毊', description: '鑲よ壊鑷劧锛岃绠¤摑缁垮吋鏈夛紝鍐锋殩鐨嗗疁' },
        { id: 'ton004', name: '灏忛害鑹?, description: '鑲よ壊鍋忔繁锛屽仴搴峰厜娉斤紝閫傚悎澶у湴鑹茬郴' },
        { id: 'ton005', name: '娣辫偆鑹?, description: '鑲よ壊杈冩繁锛屽姣斿害寮猴紝閫傚悎楂橀ケ鍜岃壊褰? }
      ]
    },

    // ============================================================
    // 11. onboardingSteps 鈥?Onboarding姝ラ鍐呭
    // ============================================================
    onboardingSteps: [
      {
        stepNum: 1,
        title: '娆㈣繋鏉ュ埌濡嗕即',
        subtitle: '浣犵殑绉佷汉缇庡鍔╂墜',
        description: '濡嗕即MakeupPal涓轰綘鎻愪緵鏅鸿兘濡嗗鎺ㄨ崘銆丄R璇曞銆佹垚鍒嗗垎鏋愮瓑鍏ㄦ柟浣嶇編濡嗘湇鍔°€傝鎴戜滑涓€璧峰紑鍚編涓戒箣鏃呭惂锛?,
        image: 'assets/images/onboarding/step_001.jpg',
        options: []
      },
      {
        stepNum: 2,
        title: '浣犵殑鑲よ川鏄紵',
        subtitle: '璁╂垜浠洿浜嗚В浣?,
        description: '閫夋嫨鏈€绗﹀悎浣犲綋鍓嶇毊鑲ょ姸鍐电殑閫夐」锛屾垜浠皢涓轰綘鎺ㄨ崘鏈€閫傚悎鐨勫瀹瑰拰浜у搧銆?,
        image: 'assets/images/onboarding/step_002.jpg',
        options: [
          { id: 'skin_dry', label: '骞叉€?, icon: 'assets/icons/skin_dry.png', desc: '鐨偆骞茬嚗锛屾槗璧风毊' },
          { id: 'skin_oily', label: '娌规€?, icon: 'assets/icons/skin_oily.png', desc: 'T鍖哄嚭娌癸紝鏄撻暱鐥? },
          { id: 'skin_combo', label: '娣峰悎', icon: 'assets/icons/skin_combo.png', desc: 'T鍖烘补涓ら骞? },
          { id: 'skin_sensitive', label: '鏁忔劅', icon: 'assets/icons/skin_sensitive.png', desc: '鏄撴硾绾紝闇€娓╁拰鎶ょ悊' }
        ]
      },
      {
        stepNum: 3,
        title: 'AI鑲よ川鎵弿',
        subtitle: '绉戞妧璧嬭兘缇庝附',
        description: '浣跨敤鎵嬫満鎽勫儚澶存壂鎻忛潰閮紝AI灏嗘櫤鑳藉垎鏋愪綘鐨勮偆璐ㄣ€佽劯鍨嬪拰鑲よ壊锛屼负浣犵敓鎴愪笓灞炵編濡嗘。妗堛€?,
        image: 'assets/images/onboarding/step_003.jpg',
        options: []
      },
      {
        stepNum: 4,
        title: '浣犲枩娆㈢殑椋庢牸锛?,
        subtitle: '涓€у寲鎺ㄨ崘',
        description: '閫夋嫨浣犳劅鍏磋叮鐨勫瀹归鏍硷紝鎴戜滑灏嗕负浣犲畾鍒朵笓灞炲唴瀹规帹鑽愩€?,
        image: 'assets/images/onboarding/step_004.jpg',
        options: [
          { id: 'style_daily', label: '鏃ュ父閫氬嫟', icon: 'assets/icons/style_daily.png', desc: '绠€绾﹁嚜鐒剁殑鏃ュ父濡嗗' },
          { id: 'style_sweet', label: '鐢滅編鍙埍', icon: 'assets/icons/style_sweet.png', desc: '鍏冩皵婊℃弧鐨勭敎绯婚鏍? },
          { id: 'style_mature', label: '杞荤啛浼橀泤', icon: 'assets/icons/style_mature.png', desc: '鐭ユ€т紭闆呯殑鎴愮啛椋庢牸' },
          { id: 'style_creative', label: '鍒涙剰鐜╁', icon: 'assets/icons/style_creative.png', desc: '澶ц儐鍓嶅崼鐨勫垱鎰忓瀹? }
        ]
      },
      {
        stepNum: 5,
        title: '鏂版墜绀煎寘',
        subtitle: '涓撳睘濂栧姳宸插濂?,
        description: '鎭枩瀹屾垚娉ㄥ唽锛侀€佷綘100GP鏂版墜绉垎鍜?涓笓灞炲瀹规ā鏉匡紝蹇潵浣撻獙濡嗕即鐨勯瓍鍔涘惂锛?,
        image: 'assets/images/onboarding/step_005.jpg',
        options: [],
        rewards: [
          { type: 'gp', amount: 100 },
          { type: 'template', amount: 3 }
        ]
      }
    ],

    // ============================================================
    // 12. ingredientScanResults 鈥?鎴愬垎鎵弿绀轰緥缁撴灉锛?鏉★級
    // ============================================================
    ingredientScanResults: [
      {
        productName: 'SK-II鎶よ偆绮惧崕闇?,
        brand: 'SK-II',
        riskLevel: 'low',
        sensitivityScore: 15,
        safeIngredients: ['PITERA', '涓佷簩閱?, '姘存潹閰搁挔'],
        cautionIngredients: ['闃茶厫鍓?],
        avoidIngredients: [],
        regulationTags: ['娆х洘鍚堣', '缇庡浗FDA璁よ瘉'],
        reportUrl: 'assets/reports/report_sk2.pdf'
      },
      {
        productName: '淇附鍙壊淇簿鍗?,
        brand: 'SkinCeuticals',
        riskLevel: 'low',
        sensitivityScore: 22,
        safeIngredients: ['榛勭摐鎻愬彇鐗?, '楹濋鑽夋彁鍙栫墿', '姗勬鍙舵彁鍙栫墿'],
        cautionIngredients: ['涓欎簩閱?],
        avoidIngredients: [],
        regulationTags: ['娆х洘鍚堣'],
        reportUrl: 'assets/reports/report_skinceuticals.pdf'
      },
      {
        productName: '鏌愮綉绾㈢編鐧界簿鍗?,
        brand: 'X鍝佺墝',
        riskLevel: 'high',
        sensitivityScore: 78,
        safeIngredients: ['鐢樻补'],
        cautionIngredients: ['楂樻祿搴︽灉閰?, '棣欑簿'],
        avoidIngredients: ['姘㈤唽', '姹炲寲鍚堢墿'],
        regulationTags: ['鍚鐢ㄦ垚鍒?, '涓嶅缓璁娇鐢?],
        reportUrl: 'assets/reports/report_warn.pdf'
      },
      {
        productName: '鐝傛鼎娑︽蹈淇濇箍婊嬪吇涔抽湝',
        brand: 'Curel',
        riskLevel: 'low',
        sensitivityScore: 8,
        safeIngredients: ['绁炵粡閰拌兒', '钃濇鍙舵彁鍙栫墿', '灏垮泭绱?],
        cautionIngredients: [],
        avoidIngredients: [],
        regulationTags: ['鏁忔劅鑲屾帹鑽?, '鏃犻绮?],
        reportUrl: 'assets/reports/report_curel.pdf'
      },
      {
        productName: '瀹夌儹娌欓噾鐡堕槻鏅掗湝',
        brand: 'Anessa',
        riskLevel: 'medium',
        sensitivityScore: 45,
        safeIngredients: ['姘у寲閿?, '浜屾哀鍖栭挍'],
        cautionIngredients: ['閰掔簿', '鍖栧闃叉檼鍓?],
        avoidIngredients: [],
        regulationTags: ['闃叉檼鐗硅瘉'],
        reportUrl: 'assets/reports/report_anessa.pdf'
      }
    ]

  }; // End of MakeupPalData





  // Version: 3.4.0 - Added Face Auth Onboarding, Mirror Settings Width Fix, Share Modal, Grid Reference Lines, Follow Makeup Button, Template Detail Action
  console.log('MakeupPal V3.4.0 loaded at', new Date().toISOString());
  let currentTab = 'home';
  let gpBalance = 328;
  let onboardingStep = 0;
  let selectedSkinType = '';
  let selectedStyles = [];
  let selectedRecharge = 360;

  function updateGpDisplay() {
    const gpBalanceEl = document.getElementById('gp-balance');
    if (gpBalanceEl) gpBalanceEl.textContent = gpBalance;
    const profileGp = document.getElementById('profile-gp-num');
    if (profileGp) profileGp.textContent = gpBalance;
    const gpCenter = document.getElementById('gp-center-balance');
    if (gpCenter) gpCenter.textContent = gpBalance + ' GP';
  }

  function openEditProfile() {
    showToast('馃摑 缂栬緫璧勬枡鍔熻兘寮€鍙戜腑');
  }

  function switchTab(tab) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + tab);
    if (page) page.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    const btn = document.querySelector('.tab-btn[data-tab="' + tab + '"]');
    if (btn) btn.classList.add('active');

    currentTab = tab;
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (tab === 'library') {
      renderLibraryWaterfall(currentLibraryCat, '鍏ㄩ儴');
    }
    if (tab === 'mall') {
      renderMarketProducts();
    }
    if (tab === 'cart') {
      renderCart();
    }
    if (tab === 'orders') {
      renderOrdersList('all');
    }
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.classList.remove('show'); }, 2000);
  }

  function claimTask(btn, amount) {
    if (btn.disabled) return;
    gpBalance += amount;
    updateGpDisplay();
    btn.disabled = true;
    btn.textContent = '宸查鍙?;
    btn.classList.remove('gp-task-btn');
    btn.classList.add('gp-task-btn', 'done');
    showToast('+' + amount + ' GP 宸查鍙?);
  }

  // ===== Mirror Mode =====
  function switchMirrorMode(mode) {
    document.querySelectorAll('.mirror-mode-btn-v2').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector('.mirror-mode-btn-v2[data-mode="' + mode + '"]');
    if (activeBtn) activeBtn.classList.add('active');

    const mirrorView = document.getElementById('mirror-view');
    const chatView = document.getElementById('chat-view');
    const bottomBar = document.getElementById('mirrorBottomBar');

    if (mode === 'chat') {
      if (mirrorView) mirrorView.style.display = 'none';
      if (chatView) chatView.style.display = 'flex';
      if (bottomBar) bottomBar.style.display = 'none';
    } else {
      if (mirrorView) mirrorView.style.display = 'flex';
      if (chatView) chatView.style.display = 'none';
      if (bottomBar) bottomBar.style.display = 'flex';
    }
  }

  // ===== Chat =====
  function sendChatMessage() {
    const input = document.getElementById('chatInput');
    if (!input || !input.value.trim()) {
      showToast('璇疯緭鍏ュ唴瀹?);
      return;
    }
    const msg = input.value.trim();
    input.value = '';
    addChatMsg(msg, 'user');
    showToast('AI 姝ｅ湪鎬濊€?..');
    setTimeout(() => {
      const reply = '涓轰綘鎺ㄨ崘銆岃湝妗冨皯濂冲銆嶐煃?娓呴€忓簳濡?+ 绮夎皟鑵孩 + 鐜荤拑鍞囷紝娓╂煍鍙堟湁姘旇壊锛?;
      addChatMsgWithTemplate(reply);
    }, 1000);
  }

  function sendQuickMsg(msg) {
    addChatMsg(msg, 'user');
    showToast('AI 姝ｅ湪鎬濊€?..');
    setTimeout(() => {
      const reply = '鏍规嵁浣犵殑闇€姹傦紝涓轰綘鎺ㄨ崘浠ヤ笅濡嗗鏂规锛?;
      addChatMsgWithTemplate(reply);
    }, 1000);
  }

  function addChatMsg(text, type) {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg ' + type;
    msgDiv.innerHTML = `
      <div class="chat-avatar">${type === 'ai' ? 'AI' : '鎴?}</div>
      <div class="chat-bubble">${text}</div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  }

  function addChatMsgWithTemplate(text) {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg ai';
    msgDiv.innerHTML = `
      <div class="chat-avatar">AI</div>
      <div class="chat-bubble">
        ${text}
        <div class="chat-template-card" onclick="openTemplateDetail('c013')">
          <div class="chat-template-img"><img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cute%20Asian%20woman%20ballet%20girl%20makeup%2C%20soft%20pink%20cheeks%2C%20dewy%20skin%2C%20elegant%20kawaii%20style%2C%20professional%20beauty%20photography&image_size=portrait_4_3" alt="鑺暰灏戝コ濡?></div>
          <div class="chat-template-info">
            <div class="chat-template-name">鑺暰灏戝コ濡?/div>
            <div class="chat-template-desc">L2 绮鹃€?路 10姝ユ暀绋?/div>
            <div class="chat-template-price">鍏嶈垂 鈫?绔嬪嵆璇曞</div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  }

  // ===== Library =====
  // ===== 棰滃簱鐎戝竷娴佹暟鎹?(鍩轰簬 MakeupPalData) =====
  function getLibraryItems(cat, sub) {
    const feed = MakeupPalData.libraryFeed;
    let items = [];
    switch(cat) {
      case 'daren': items = feed.creators; break;
      case 'jubu': items = feed.tutorials; break;
      case 'qa': items = feed.qa; break;
      case 'gufeng': items = feed.guofeng; break;
      case 'yinfa': items = feed.silver; break;
      case 'dapai': items = feed.brands; break;
      case 'star': items = feed.celebrities; break;
      default: items = feed.creators;
    }
    if (sub && sub !== '鍏ㄩ儴') {
      let filtered = [];
      if (cat === 'daren') {
        filtered = items.filter(it => it.category && it.category.includes(sub));
      } else if (cat === 'jubu') {
        filtered = items.filter(it => it.category && it.category.includes(sub));
      } else if (cat === 'qa') {
        filtered = items.filter(it => it.category && it.category.includes(sub));
      } else if (cat === 'gufeng') {
        filtered = items.filter(it => it.dynasty && it.dynasty.includes(sub.replace('濡?,'')));
      } else if (cat === 'yinfa') {
        filtered = items.filter(it => it.scene && it.scene.includes(sub));
      } else if (cat === 'dapai') {
        filtered = items.filter(it => it.brandName && it.brandName.includes(sub));
      } else if (cat === 'star') {
        filtered = items.filter(it => {
          const kw = sub.replace('濡?,'').replace('绯?,'');
          return (it.celebrityName && it.celebrityName.includes(kw)) || 
                 (it.category && it.category.includes(sub));
        });
      }
      if (filtered.length === 0) {
        const kw = sub.replace('濡?,'').replace('鍚屾','').replace('绯?,'');
        filtered = items.filter(it => {
          const fields = [it.tag, it.category, it.scene, it.dynasty, it.brandName, it.celebrityName];
          return fields.some(f => f && f.includes(kw));
        });
      }
      if (filtered.length > 0) items = filtered;
    }
    return items;
  }

  function renderLibraryWaterfall(cat, sub) {
    const items = getLibraryItems(cat, sub);
    const grid = document.getElementById('libraryWaterfall');
    if (!grid) return;
    grid.innerHTML = items.slice(0, 12).map(item => getLibCard(item, cat)).join('');
  }

  function getLibCard(item, cat) {
    const coverKey = item.coverImage || item.cover || '';
    const cover = coverKey ? getImageUrl(coverKey) : '';
    const title = item.title || item.question || '';
    const likes = item.likes || 0;
    const tag = item.tag || '';
    const isBrand = cat === 'dapai';
    const isStar = cat === 'star';
    const isQA = cat === 'qa';
    const creator = item.creatorName || item.authorName || item.brandName || item.celebrityName || '';
    
    let badge = '';
    if (isBrand && item.isOfficial) badge = '<div class="lib-badge-official">瀹樻柟</div>';
    if (isStar && item.similarity) badge = '<div class="lib-badge-similar">鐩镐技搴? + item.similarity + '%</div>';
    
    const bottomRight = isQA 
      ? '<span class="lib-meta">'+ (item.answerCount || 0) + '绛?/span>'
      : '<span class="lib-meta">鈾?' + fmtNum(likes) + '</span>';
    
    const sub = item.dynasty ? item.dynasty + '椋? : 
                item.scene ? item.scene + '濡? :
                item.category || '';
    
    return `
      <div class="lib-card" onclick="openTemplateDetail('${item.id}')">
        <div class="lib-card-img">
          <img src="${cover}" alt="${title}" onerror="this.style.background='#f5f0ea';this.src=''">
          ${badge}
          <div class="lib-tag">${tag}</div>
        </div>
        <div class="lib-card-body">
          <div class="lib-card-title">${title}</div>
          <div class="lib-card-foot">
            <span class="lib-creator">${creator || sub}</span>
            ${bottomRight}
          </div>
        </div>
      </div>
    `;
  }

  function fmtNum(n) {
    if (!n) return '0';
    if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
    return n.toString();
  }

  const librarySubCats = {
    daren: ['鍏ㄩ儴', '鏃ュ父濡?, '绾︿細濡?, '鑱屽満濡?, '娲惧濡?, '澶嶅彜濡?],
    jubu: ['鍏ㄩ儴', '鐪煎', '鐪夊', '鍞囧', '搴曞', '鑵孩'],
    qa: ['鍏ㄩ儴', '搴曞', '鐪煎', '鎶よ偆', '浜у搧娴嬭瘎', '鏂版墜'],
    gufeng: ['鍏ㄩ儴', '鍞愬', '瀹嬪', '鏄庡', '姹夊', '鏁︾厡'],
    yinfa: ['鍏ㄩ儴', '鏃ュ父', '鑱氫細', '鑱屽満', '濠氱ぜ', '瀹跺'],
    dapai: ['鍏ㄩ儴', 'YSL', 'Dior', 'Chanel', 'Lanc么me', 'MAC'],
    star: ['鍏ㄩ儴', '鐢滅編濡?, '杞荤啛濡?, '闊╃郴濡?, '瑁稿', '娓呭喎濡?]
  };
  let currentLibraryCat = 'daren';

  function switchLibraryCat(el, cat) {
    currentLibraryCat = cat;
    document.querySelectorAll('.library-cat-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const subTabs = document.getElementById('librarySubTabs');
    if (subTabs && librarySubCats[cat]) {
      const subs = librarySubCats[cat];
      subTabs.innerHTML = subs.map((s, i) =>
        `<span class="library-sub-tab ${i === 0 ? 'active' : ''}" onclick="switchLibrarySub(this, '${s}')">${s}</span>`
      ).join('');
    }
    renderLibraryWaterfall(cat, '鍏ㄩ儴');
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  function switchLibrarySub(el, sub) {
    document.querySelectorAll('.library-sub-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderLibraryWaterfall(currentLibraryCat, sub);
  }

  function goToLibraryCat(cat) {
    switchTab('library');
    setTimeout(() => {
      const tabs = document.querySelectorAll('.library-cat-tab');
      tabs.forEach(t => {
        if (t.getAttribute('onclick')?.includes(cat)) {
          switchLibraryCat(t, cat);
        }
      });
    }, 50);
  }

  // ===== Profile Sub-pages =====
  function openMyTemplates() { switchTab('my-templates'); }
  function openMyReports() { switchTab('my-reports'); }
  function openToolbox() { switchTab('toolbox'); }
  function openStylePreference() { switchTab('style-pref'); }
  function openStoreMap() { switchTab('store-map'); }
  function openCreatorCenter() { switchTab('creator'); }
  function openFaceProfile() { switchTab('face-profile'); renderFaceProfile(); }
  function refreshFaceProfile() { showToast('闈㈤儴妗ｆ宸叉洿鏂?); renderFaceProfile(); }

  const faceProfileData = {
    name: '灏忕編',
    faceShape: '楣呰泲鑴?,
    skinType: '娣峰悎鎬ц偆璐?,
    undertone: '鏆栬壊璋?,
    scores: { bone: 86, skin: 78, makeup: 82 },
    dimensions: [
      { label: '鑴搁暱姣斾緥', value: 85 },
      { label: '棰濆ご瀹藉害', value: 76 },
      { label: '棰ч楂樺害', value: 72 },
      { label: '涓嬮绾挎潯', value: 88 },
      { label: '榧绘楂樺害', value: 84 },
      { label: '鐪艰窛姣斾緥', value: 80 }
    ],
    traits: ['鍙岀溂鐨?, '楂橀蓟姊?, '妯辨灏忓槾', 'T鍖烘补', '鏁忔劅鑲?, '娉曚护绾硅交'],
    skinDetails: [
      { label: '鑲よ川绫诲瀷', value: '娣峰悎鎬? },
      { label: '鑲よ壊鑹茶皟', value: '鏆栬壊璋? },
      { label: '姣涘瓟鐘舵€?, value: 'T鍖虹暐绮? },
      { label: '鍑烘补鎯呭喌', value: 'T鍖鸿緝娌? },
      { label: '鏁忔劅绋嬪害', value: '杞诲害鏁忔劅' },
      { label: '绱ц嚧绋嬪害', value: '鑹ソ' }
    ],
    makeupRecommendations: [
      { id: 'mk001', title: '鏃ュ父娓呮柊瑁稿', desc: '閫傚悎鏃ュ父閫氬嫟锛岃交钖勮嚜鐒?, tags: ['鏃ュ父', '瑁稿'], img: 'makeup_natural', products: ['base002', 'blush002', 'eye001'] },
      { id: 'mk002', title: '娓╂煍铚滄濡嗗', desc: '鏆栬壊璋冩惌閰嶏紝鐢滅編鍙汉', tags: ['鐢滅編', '铚滄'], img: 'makeup_peach', products: ['lip005', 'blush001', 'eye002'] },
      { id: 'mk003', title: '浼橀泤姘旇川濡?, desc: '鎻愬崌姘斿満锛岀簿鑷村共缁?, tags: ['姘旇川', '鑱屽満'], img: 'makeup_elegant', products: ['lip001', 'base001', 'blush003'] }
    ],
    productRecommendations: [
      { id: 'base002', name: '鍏拌敾鎸佸杞婚€忕矇搴曟恫', price: 450, img: 'foundation2', brand: '鍏拌敾', desc: '杞荤泩閫忔皵' },
      { id: 'skincare001', name: 'SK-II绁炰粰姘寸簿鍗庢恫', price: 1540, img: 'skincare1', brand: 'SK-II', desc: '230ml' },
      { id: 'lip001', name: 'YSL灏忛噾鏉＄粏绠″彛绾?21鍙?, price: 390, img: 'lipstick1', brand: 'YSL', desc: '澶嶅彜钃濊皟姝ｇ孩' },
      { id: 'skincare004', name: '瀹夌儹娌欓噾鐡堕槻鏅掗湝', price: 228, img: 'skincare4', brand: 'Anessa', desc: '60ml' }
    ]
  };

  function renderFaceProfile() {
    const data = faceProfileData;

    document.getElementById('face-detail-subtitle').textContent = data.faceShape + ' 路 ' + data.skinType + ' 路 ' + data.undertone;
    document.getElementById('face-score-bone').textContent = data.scores.bone;
    document.getElementById('face-score-skin').textContent = data.scores.skin;
    document.getElementById('face-score-makeup').textContent = data.scores.makeup;

    const dimGrid = document.getElementById('face-dimension-grid');
    dimGrid.innerHTML = data.dimensions.map(d => `
      <div class="face-dim-item">
        <div class="face-dim-label">${d.label}</div>
        <div class="face-dim-bar"><div class="face-dim-fill" style="width: ${d.value}%"></div></div>
        <div class="face-dim-value">${d.value}</div>
      </div>
    `).join('');

    const traitList = document.getElementById('face-trait-list');
    traitList.innerHTML = data.traits.map(t => `
      <span class="face-trait-tag active">${t}</span>
    `).join('');

    const skinInfo = document.getElementById('face-skin-info');
    skinInfo.innerHTML = data.skinDetails.map(s => `
      <div class="face-skin-row">
        <div class="face-skin-label">${s.label}</div>
        <div class="face-skin-value">${s.value}</div>
      </div>
    `).join('');

    const makeupRec = document.getElementById('face-makeup-recommend');
    makeupRec.innerHTML = data.makeupRecommendations.map(m => `
      <div class="face-makeup-item" onclick="openFaceMakeupDetail('${m.id}')">
        <div class="face-makeup-img">
          <img src="${getImageUrl(m.img)}" alt="${m.title}">
        </div>
        <div class="face-makeup-info">
          <div class="face-makeup-title">${m.title}</div>
          <div class="face-makeup-desc">${m.desc}</div>
          <div class="face-makeup-tags">
            ${m.tags.map(t => `<span class="face-makeup-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    const productRec = document.getElementById('face-product-recommend');
    productRec.innerHTML = data.productRecommendations.map(p => `
      <div class="face-product-item" onclick="openProductDetail('${p.id}')">
        <div class="face-product-img">
          <img src="${getImageUrl(p.img)}" alt="${p.name}">
        </div>
        <div class="face-product-info">
          <div class="face-product-name">${p.name}</div>
          <div class="face-product-price">楼${p.price}</div>
        </div>
      </div>
    `).join('');
  }

  function openFaceMakeupDetail(makeupId) {
    const makeup = faceProfileData.makeupRecommendations.find(m => m.id === makeupId);
    if (!makeup) { showToast('濡嗗涓嶅瓨鍦?); return; }
    showToast('鎺ㄨ崘濡嗗: ' + makeup.title + ' (鍖呭惈' + makeup.products.length + '娆句骇鍝?');
    // 鍙互鎵╁睍涓烘墦寮€濡嗗璇︽儏椤碉紝灞曠ず鍏宠仈浜у搧鍒楄〃
  }

  function switchTemplateTab(el, type) {
    document.querySelectorAll('.template-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    showToast(type === 'fav' ? '宸叉敹钘忕殑妯℃澘' : '宸茶喘涔扮殑妯℃澘');
  }

  function toggleStyleChip(el) {
    el.classList.toggle('active');
  }

  function toggleColorOpt(el) {
    el.classList.toggle('active');
  }

  const reportData = {
    skin: {
      title: '鑲よ川妫€娴嬫姤鍛?,
      html: `
        <div class="report-hero">
          <div class="report-score">82<span style="font-size: 14px;">鍒?/span></div>
          <div class="report-score-label">缁煎悎鑲よ川鍋ュ悍搴?/div>
        </div>
        <div style="padding: var(--spacing-4);">
          <div class="report-section">
            <div class="report-section-title">鑲よ川绫诲瀷</div>
            <div class="report-big-card">
              <div style="font-size: 20px; font-weight: 600; margin-bottom: 8px;">娣峰悎鎬ц偆璐?/div>
              <div style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.6;">T鍖哄亸娌癸紝涓ら鍋忓共銆傚睘浜庢渶甯歌鐨勮偆璐ㄧ被鍨嬶紝鎶よ偆闇€鍒嗗尯鎶ょ悊锛孴鍖烘敞閲嶆帶娌规竻娲侊紝涓ら渚ч噸淇濇箍婊嬫鼎銆?/div>
            </div>
          </div>
          <div class="report-section">
            <div class="report-section-title">鑲岃偆缁村害</div>
            <div class="report-grid">
              <div class="report-dim">
                <div class="dim-label">姘存鼎搴?/div>
                <div class="dim-bar"><div class="dim-fill" style="width: 65%;"></div></div>
                <div class="dim-val">65%</div>
              </div>
              <div class="report-dim">
                <div class="dim-label">娌瑰垎搴?/div>
                <div class="dim-bar"><div class="dim-fill" style="width: 72%; background: var(--color-warning);"></div></div>
                <div class="dim-val">72%</div>
              </div>
              <div class="report-dim">
                <div class="dim-label">寮规€у害</div>
                <div class="dim-bar"><div class="dim-fill" style="width: 80%; background: #52c41a;"></div></div>
                <div class="dim-val">80%</div>
              </div>
              <div class="report-dim">
                <div class="dim-label">鏁忔劅搴?/div>
                <div class="dim-bar"><div class="dim-fill" style="width: 55%; background: var(--color-danger);"></div></div>
                <div class="dim-val">55%</div>
              </div>
            </div>
          </div>
          <div class="report-section">
            <div class="report-section-title">鎶よ偆寤鸿</div>
            <div class="report-tips">
              <div class="tip-item"><div class="tip-icon">馃挧</div><div>鏃╂櫄鍒嗗尯鎶よ偆锛孴鍖虹敤娓呯埥鍨嬶紝涓ら鐢ㄦ粙娑﹀瀷</div></div>
              <div class="tip-item"><div class="tip-icon">鈽€锔?/div><div>涓€骞村洓瀛ｉ兘瑕佸仛濂介槻鏅掞紝绱绾夸細鍔犻噸鍑烘补鍜屾晱鎰?/div></div>
              <div class="tip-item"><div class="tip-icon">馃Т</div><div>姣忓懆1-2娆℃竻娲侀潰鑶滐紝閲嶇偣娓呮磥T鍖洪粦澶?/div></div>
              <div class="tip-item"><div class="tip-icon">馃槾</div><div>瑙勫緥浣滄伅锛屽噺灏戠啲澶滐紝楗灏戣緵杈ｆ补鑵?/div></div>
            </div>
          </div>
        </div>
      `
    },
    face: {
      title: '闈㈤儴鍒嗘瀽鎶ュ憡',
      html: `
        <div class="report-hero">
          <div class="report-score">86<span style="font-size: 14px;">鍒?/span></div>
          <div class="report-score-label">楠ㄧ浉缇庡璇勫垎</div>
        </div>
        <div style="padding: var(--spacing-4);">
          <div class="report-section">
            <div class="report-section-title">鑴稿瀷鍒嗘瀽</div>
            <div class="report-big-card">
              <div style="font-size: 20px; font-weight: 600; margin-bottom: 8px;">楣呰泲鑴?/div>
              <div style="font-size: 13px; color: var(--color-text-secondary); line-height: 1.6;">鑴搁儴杞粨娴佺晠锛岄澶撮ケ婊★紝涓嬮绾挎竻鏅帮紝闀垮姣斾緥鍗忚皟銆傛槸鏈€鐧炬惌鐨勮劯鍨嬶紝澶ч儴鍒嗗瀹归鏍奸兘鑳介┚椹€?/div>
            </div>
          </div>
          <div class="report-section">
            <div class="report-section-title">浜斿畼姣斾緥</div>
            <div class="report-grid">
              <div class="report-dim"><div class="dim-label">鐪艰窛</div><div class="dim-bar"><div class="dim-fill" style="width: 85%;"></div></div><div class="dim-val">鏍囧噯</div></div>
              <div class="report-dim"><div class="dim-label">榧诲瀷</div><div class="dim-bar"><div class="dim-fill" style="width: 88%;"></div></div><div class="dim-val">楂樻尯</div></div>
              <div class="report-dim"><div class="dim-label">鍞囧舰</div><div class="dim-bar"><div class="dim-fill" style="width: 78%;"></div></div><div class="dim-val">楗辨弧</div></div>
              <div class="report-dim"><div class="dim-label">涓夊涵浜旂溂</div><div class="dim-bar"><div class="dim-fill" style="width: 82%;"></div></div><div class="dim-val">鍗忚皟</div></div>
            </div>
          </div>
          <div class="report-section">
            <div class="report-section-title">濡嗗寤鸿</div>
            <div class="report-tips">
              <div class="tip-item"><div class="tip-icon">馃拕</div><div>閫傚悎澶ч儴鍒嗗彛绾㈤鑹诧紝灏ゅ叾鎺ㄨ崘绾㈡銆佽眴娌欍€佺帿绾㈣壊绯?/div></div>
              <div class="tip-item"><div class="tip-icon">馃憗锔?/div><div>鐪煎鍙戞尌绌洪棿澶э紝鍙皾璇曞悇绉嶇溂绾垮拰鐪煎奖鐢绘硶</div></div>
              <div class="tip-item"><div class="tip-icon">鉁?/div><div>楂樺厜鎵撳湪棰ч銆侀蓟姊併€佺湁楠紝绔嬩綋鎰熸洿寮?/div></div>
            </div>
          </div>
        </div>
      `
    },
    makeup: {
      title: '濡嗗閫傞厤鎶ュ憡',
      html: `
        <div class="report-hero" style="background: linear-gradient(135deg, #ff9a9e, #fecfef);">
          <div class="report-score" style="color: #fff;">92<span style="font-size: 14px;">鍒?/span></div>
          <div class="report-score-label" style="color: rgba(255,255,255,0.9);">濡嗗閫傞厤鎸囨暟</div>
        </div>
        <div style="padding: var(--spacing-4);">
          <div class="report-section">
            <div class="report-section-title">鎺ㄨ崘椋庢牸</div>
            <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap;">
              <span class="style-chip active">鏃ュ父閫氬嫟</span>
              <span class="style-chip active">娉曞紡鎱垫噿</span>
              <span class="style-chip active">娓呴€忚嚜鐒?/span>
              <span class="style-chip">鏃ョ郴鐢滅編</span>
              <span class="style-chip">澶嶅彜娓</span>
            </div>
          </div>
          <div class="report-section">
            <div class="report-section-title">鎺ㄨ崘鑹茬郴</div>
            <div class="color-pref">
              <div class="color-opt active"><div class="color-dot" style="background:#D4A574;"></div>鏆栨</div>
              <div class="color-opt active"><div class="color-dot" style="background:#E8B4B8;"></div>鐜懓</div>
              <div class="color-opt active"><div class="color-dot" style="background:#DEB887;"></div>鏉忚壊</div>
            </div>
          </div>
          <div class="report-section">
            <div class="report-section-title">閬垮潙鎻愰啋</div>
            <div class="report-tips">
              <div class="tip-item"><div class="tip-icon">鈿狅笍</div><div>閬垮厤杩囦簬澶稿紶鐨勬缇庢祿濡嗭紝浼氭樉寰楀勾榫勬劅閲?/div></div>
              <div class="tip-item"><div class="tip-icon">馃毇</div><div>鍐疯皟钃濊壊绯荤溂褰卞鏄撴樉鑴忥紝寤鸿閫夋殩妫曡皟</div></div>
              <div class="tip-item"><div class="tip-icon">馃挕</div><div>閲嶇偣绐佸嚭鐪煎鎴栧攪濡嗕竴涓儴浣嶏紝涓嶈鍏ㄨ劯閮芥祿</div></div>
            </div>
          </div>
        </div>
      `
    },
    ingredient: {
      title: '鎴愬垎妫€娴嬫姤鍛?,
      html: `
        <div class="report-hero" style="background: linear-gradient(135deg, #a8edea, #fed6e3);">
          <div class="report-score" style="color: #fff;">65<span style="font-size: 14px;">鍒?/span></div>
          <div class="report-score-label" style="color: rgba(255,255,255,0.9);">浜у搧瀹夊叏鎸囨暟</div>
        </div>
        <div style="padding: var(--spacing-4);">
          <div class="report-section">
            <div class="report-section-title">宸叉娴嬩骇鍝?/div>
            <div style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: var(--spacing-3);">鍏辨娴?12 娆句骇鍝侊紝3 娆鹃渶娉ㄦ剰</div>
            <div class="ingredient-list">
              <div class="ingredient-item good">
                <div class="ing-icon">鉁?/div>
                <div class="ing-info">
                  <div class="ing-name">YSL 鎭掍箙绮夊簳娑?/div>
                  <div class="ing-desc">鎴愬垎瀹夊叏锛屾棤椋庨櫓鎴愬垎</div>
                </div>
                <div class="ing-score good">92</div>
              </div>
              <div class="ing-item warn">
                <div class="ing-icon">鈿狅笍</div>
                <div class="ing-info">
                  <div class="ing-name">鏌愬搧鐗岀簿鍗庢按</div>
                  <div class="ing-desc">鍚绮俱€侀厭绮撅紝鏁忔劅鑲屾厧鐢?/div>
                </div>
                <div class="ing-score warn">58</div>
              </div>
              <div class="ing-item warn">
                <div class="ing-icon">鈿狅笍</div>
                <div class="ing-info">
                  <div class="ing-name">鏌愮綉绾㈤潰鑶?/div>
                  <div class="ing-desc">鍚槻鑵愬墏杈冨锛屼笉寤鸿棰戠箒浣跨敤</div>
                </div>
                <div class="ing-score warn">62</div>
              </div>
            </div>
          </div>
          <div class="report-section">
            <div class="report-section-title">鎴愬垎灏忚创澹?/div>
            <div class="report-tips">
              <div class="tip-item"><div class="tip-icon">馃敩</div><div>鏁忔劅鑲岄伩寮€锛氶厭绮俱€侀绮俱€侀槻鑵愬墏锛堢敳鍩哄紓鍣诲攽鍟夐叜绛夛級</div></div>
              <div class="tip-item"><div class="tip-icon">馃尶</div><div>瀛曞鎱庣敤锛氱淮A閱囥€佹按鏉ㄩ吀銆侀珮娴撳害缁碈</div></div>
              <div class="tip-item"><div class="tip-icon">馃搵</div><div>鎶よ偆鐪嬫垚鍒嗕笉鐪嬪搧鐗岋紝閫傚悎鑷繁鏈€閲嶈</div></div>
            </div>
          </div>
        </div>
      `
    }
  };

  function openReportDetail(type) {
    const data = reportData[type];
    if (!data) return;
    document.getElementById('reportDetailTitle').textContent = data.title;
    document.getElementById('reportDetailContent').innerHTML = data.html;
    switchTab('report-detail');
  }

  // ===== Mirror Settings & Modes =====
  let mirrorMode = 'photo'; // photo | video
  let isRecording = false;
  let filterOn = true;
  let fillLightOn = false;

  function openMirrorSettings() {
    document.getElementById('mirror-settings-modal').classList.add('show');
  }
  function closeMirrorSettings(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('mirror-settings-modal').classList.remove('show');
  }

  function toggleFilterSwitch() {
    filterOn = !filterOn;
    const sw = document.getElementById('filterSwitch');
    const sub = document.getElementById('filterSubOptions');
    sw.classList.toggle('active', filterOn);
    sub.style.display = filterOn ? 'block' : 'none';
    document.getElementById('filterBtn').classList.toggle('active', filterOn);
  }

  function toggleLightSwitch() {
    fillLightOn = !fillLightOn;
    const sw = document.getElementById('lightSwitch');
    const sub = document.getElementById('lightSubOptions');
    sw.classList.toggle('active', fillLightOn);
    sub.style.display = fillLightOn ? 'block' : 'none';
    document.getElementById('lightBtn').classList.toggle('active', fillLightOn);
  }

  function toggleFilter() {
    filterOn = !filterOn;
    document.getElementById('filterBtn').classList.toggle('active', filterOn);
    document.getElementById('filterSwitch').classList.toggle('active', filterOn);
    document.getElementById('filterSubOptions').style.display = filterOn ? 'block' : 'none';
    showToast(filterOn ? '婊ら暅宸插紑鍚? : '婊ら暅宸插叧闂?);
  }

  function toggleFillLight() {
    fillLightOn = !fillLightOn;
    document.getElementById('lightBtn').classList.toggle('active', fillLightOn);
    document.getElementById('lightSwitch').classList.toggle('active', fillLightOn);
    document.getElementById('lightSubOptions').style.display = fillLightOn ? 'block' : 'none';
    showToast(fillLightOn ? '琛ュ厜鐏凡寮€鍚? : '琛ュ厜鐏凡鍏抽棴');
  }

  function setMirrorMode(mode) {
    mirrorMode = mode;
    document.getElementById('modePhoto').classList.toggle('active', mode === 'photo');
    document.getElementById('modeVideo').classList.toggle('active', mode === 'video');
    const shutter = document.getElementById('mirrorShutter');
    shutter.classList.toggle('video-mode', mode === 'video');
    if (isRecording) {
      isRecording = false;
      shutter.classList.remove('recording');
    }
  }

  function doShutter() {
    const shutter = document.getElementById('mirrorShutter');
    if (mirrorMode === 'photo') {
      shutter.style.transform = 'scale(0.9)';
      setTimeout(() => shutter.style.transform = '', 100);
      showToast('鎷嶇収鎴愬姛');
    } else {
      isRecording = !isRecording;
      shutter.classList.toggle('recording', isRecording);
      showToast(isRecording ? '寮€濮嬪綍鍒?..' : '褰曞埗瀹屾垚');
    }
  }

  function selectFilterPreset(el) {
    document.querySelectorAll('.filter-preset').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    showToast('婊ら暅锛? + el.textContent);
  }

  function selectLightPreset(el) {
    document.querySelectorAll('.light-preset').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    showToast('鑹叉俯锛? + el.textContent);
  }

  let isCameraFlipped = false;
  function flipCamera() {
    isCameraFlipped = !isCameraFlipped;
    const faceArea = document.querySelector('.mirror-face-ring-v2');
    if (faceArea) {
      faceArea.style.transform = isCameraFlipped ? 'scaleX(-1)' : 'scaleX(1)';
    }
    showToast(isCameraFlipped ? '鍚庣疆鎽勫儚澶? : '鍓嶇疆鎽勫儚澶?);
  }

  // ===== Market (Mall) =====

  // ===== 鍩轰簬 MakeupPalData 鐨勫晢鍝佹覆鏌?=====
  function getMarketProductsV2(subCat, subSub) {
    const all = MakeupPalData.products;
    let list = [...all];
    if (subCat && subCat !== 'all' && subCat !== '鍏ㄩ儴') {
      const catMap = {
        daren: ['鏃ュ父', '閫氬嫟', '杈句汉', '绾︿細'],
        ziying: ['搴曞', '鎶よ偆', 'YSL', 'Dior', 'Chanel'],
        hot: ['鎸佸', '缁忓吀', '鐑崠', '濂借瘎'],
        gufeng: ['鍥介', '鑺辫タ瀛?, '鍏昏偆'],
        yinfa: ['鎶楄€?, '淇姢', '淇濇箍', '鏁忔劅'],
        star: ['鏄剧櫧', '姝ｇ孩', '姘斿満', '鏄庢槦']
      };
      const kws = catMap[subCat] || [subCat];
      list = all.filter(p => 
        kws.some(kw => 
          p.category.includes(kw) || 
          p.name.includes(kw) ||
          (p.tags && p.tags.some(t => t.includes(kw))) ||
          p.brand.includes(kw)
        )
      );
    }
    if (list.length < 6) list = all.slice(0, 12);
    return list.slice(0, 12);
  }

  function getProductByIdV2(id) {
    return MakeupPalData.products.find(p => p.id === id) || MakeupPalData.products[0];
  }

  function getBrandPartners() {
    return MakeupPalData.brandPartners || [];
  }

  const marketSubCats = {
    kouhong: ['鍏ㄩ儴', '鏂板搧涓婂競', '闄愭椂鐗规儬', '鐖嗘鎺ㄨ崘', '绀肩洅濂楄', '灏忔牱璇曠敤'],
    difen: ['鍏ㄩ儴', '鏂板搧涓婂競', '闄愭椂鐗规儬', '鐖嗘鎺ㄨ崘', '绀肩洅濂楄', '灏忔牱璇曠敤'],
    yanying: ['鍏ㄩ儴', '鏂板搧涓婂競', '闄愭椂鐗规儬', '鐖嗘鎺ㄨ崘', '绀肩洅濂楄', '鏂板搧棣栧彂'],
    saihong: ['鍏ㄩ儴', '鏂板搧涓婂競', '闄愭椂鐗规儬', '鐖嗘鎺ㄨ崘', '绀肩洅濂楄', '灏忔牱璇曠敤'],
    xiaomian: ['鍏ㄩ儴', '鏂板搧涓婂競', '闄愭椂鐗规儬', '鐖嗘鎺ㄨ崘', '绀肩洅濂楄', '鏂板搧棣栧彂'],
    huzhuang: ['鍏ㄩ儴', '鏂板搧涓婂競', '闄愭椂鐗规儬', '鐖嗘鎺ㄨ崘', '绀肩洅濂楄', '鎶よ偆濂楄']
  };

  const marketProducts = {
    kouhong: {
      all: [
        { id: 'lip001', name: 'YSL灏忛噾鏉＄粏绠″彛绾?21鍙?, brand: 'YSL', price: 390, sales: '5.2涓?, img: 'lipstick1', tag: '鐑攢', desc: '澶嶅彜钃濊皟姝ｇ孩' },
        { id: 'lip002', name: 'Dior鐑堣壋钃濋噾鍞囪啅 999鍝戝厜', brand: 'Dior', price: 380, sales: '4.8涓?, img: 'lipstick2', tag: '缁忓吀', desc: '缁忓吀姝ｇ孩鑹? },
        { id: 'lip003', name: 'MAC瀛愬脊澶村彛绾?Chili', brand: 'MAC', price: 190, sales: '8.5涓?, img: 'lipstick3', tag: '', desc: '灏忚荆妞掕壊' },
        { id: 'lip004', name: '3CE涓濈粧鍞囬噳 Taupe', brand: '3CE', price: 110, sales: '3.2涓?, img: 'lipstick4', tag: '', desc: '鐮栫孩鑹插鍙? },
        { id: 'lip005', name: 'Colorkey绌烘皵鍞囬噳 R608', brand: 'Colorkey', price: 49, sales: '12.1涓?, img: 'lipstick5', tag: '鐖嗘', desc: '鐒︾硸绾㈡' },
        { id: 'lip006', name: '瀹岀編鏃ヨ鍚嶇墖鍞囬噳 002', brand: '瀹岀編鏃ヨ', price: 59, sales: '6.7涓?, img: 'lipstick6', tag: '', desc: '鏃犺姳鏋滅矇' },
      ],
      '鏂板搧涓婂競': [
        { id: 'lip007', name: 'NARS鏁㈣€€鍞囪啅 Dragon Girl', brand: 'NARS', price: 300, sales: '2.1涓?, img: 'lipstick7', tag: '鏂板搧', desc: '姗樼孩鑹? },
        { id: 'lip008', name: 'Tom Ford鐠€鐠ㄥ够榄呭攪鑶?16', brand: 'Tom Ford', price: 520, sales: '1.5涓?, img: 'lipstick8', tag: '鏂板搧', desc: 'SCARLET ROUGE' },
      ],
      '闄愭椂鐗规儬': [
        { id: 'lip005', name: 'Colorkey绌烘皵鍞囬噳 R608', brand: 'Colorkey', price: 39, sales: '12.1涓?, img: 'lipstick5', tag: '鐗规儬', desc: '鐒︾硸绾㈡' },
        { id: 'lip006', name: '瀹岀編鏃ヨ鍚嶇墖鍞囬噳 002', brand: '瀹岀編鏃ヨ', price: 49, sales: '6.7涓?, img: 'lipstick6', tag: '鐗规儬', desc: '鏃犺姳鏋滅矇' },
      ],
      '鐖嗘鎺ㄨ崘': [
        { id: 'lip001', name: 'YSL灏忛噾鏉＄粏绠″彛绾?21鍙?, brand: 'YSL', price: 390, sales: '5.2涓?, img: 'lipstick1', tag: '鐑攢', desc: '澶嶅彜钃濊皟姝ｇ孩' },
        { id: 'lip003', name: 'MAC瀛愬脊澶村彛绾?Chili', brand: 'MAC', price: 190, sales: '8.5涓?, img: 'lipstick3', tag: '', desc: '灏忚荆妞掕壊' },
      ],
      '绀肩洅濂楄': [
        { id: 'lip009', name: 'YSL绾㈠攪绀肩洅濂楄', brand: 'YSL', price: 799, sales: '8鍗?, img: 'lipstick9', tag: '绀肩洅', desc: '鍚?鏀瑁? },
      ],
      '灏忔牱璇曠敤': [
        { id: 'lip010', name: 'Dior鍙ｇ孩灏忔牱濂楄', brand: 'Dior', price: 99, sales: '3.5涓?, img: 'lipstick10', tag: '灏忔牱', desc: '3鏀' },
      ],
    },
    difen: {
      all: [
        { id: 'base001', name: 'YSL鎭掍箙鏃犵憰鎸佸绮夊簳娑?, brand: 'YSL', price: 620, sales: '3.8涓?, img: 'foundation1', tag: '鐑攢', desc: '24灏忔椂鎸佸' },
        { id: 'base002', name: '鍏拌敾鎸佸杞婚€忕矇搴曟恫 PO-01', brand: 'Lanc么me', price: 450, sales: '2.9涓?, img: 'foundation2', tag: '', desc: '杞荤泩閫忔皵' },
        { id: 'base003', name: '闃跨帥灏兼潈鍔涚矇搴曟恫 2鍙?, brand: 'Armani', price: 600, sales: '3.2涓?, img: 'foundation3', tag: '', desc: '楂橀伄鐟曞己鎸佸' },
        { id: 'base004', name: '鑺辫タ瀛愮帀瀹规皵鍨?N20', brand: '鑺辫タ瀛?, price: 199, sales: '4.5涓?, img: 'foundation4', tag: '鐖嗘', desc: '涓滄柟鍏昏偆' },
        { id: 'base005', name: '闆呰瘲鍏伴粵DW鎸佸绮夊簳娑?, brand: 'Estee Lauder', price: 420, sales: '5.1涓?, img: 'foundation5', tag: '', desc: '娌圭毊鏁戞槦' },
        { id: 'base006', name: 'NARS浜噰鏌旀粦閬憰鑶?, brand: 'NARS', price: 300, sales: '2.3涓?, img: 'foundation6', tag: '', desc: '濂舵补璐ㄥ湴' },
      ],
      '鏂板搧涓婂競': [
        { id: 'base007', name: 'Chanel鏌斿厜鎸佸绮夊簳娑?, brand: 'Chanel', price: 650, sales: '1.2涓?, img: 'foundation7', tag: '鏂板搧', desc: '鏌斿厜濡嗘晥' },
      ],
      '闄愭椂鐗规儬': [
        { id: 'base004', name: '鑺辫タ瀛愮帀瀹规皵鍨?N20', brand: '鑺辫タ瀛?, price: 159, sales: '4.5涓?, img: 'foundation4', tag: '鐗规儬', desc: '涓滄柟鍏昏偆' },
        { id: 'base005', name: '闆呰瘲鍏伴粵DW鎸佸绮夊簳娑?, brand: 'Estee Lauder', price: 360, sales: '5.1涓?, img: 'foundation5', tag: '鐗规儬', desc: '娌圭毊鏁戞槦' },
      ],
      '鐖嗘鎺ㄨ崘': [
        { id: 'base001', name: 'YSL鎭掍箙鏃犵憰鎸佸绮夊簳娑?, brand: 'YSL', price: 620, sales: '3.8涓?, img: 'foundation1', tag: '鐑攢', desc: '24灏忔椂鎸佸' },
        { id: 'base004', name: '鑺辫タ瀛愮帀瀹规皵鍨?N20', brand: '鑺辫タ瀛?, price: 199, sales: '4.5涓?, img: 'foundation4', tag: '鐖嗘', desc: '涓滄柟鍏昏偆' },
      ],
      '绀肩洅濂楄': [
        { id: 'base008', name: '鍏拌敾搴曞绀肩洅', brand: 'Lanc么me', price: 999, sales: '5鍗?, img: 'foundation8', tag: '绀肩洅', desc: '鍚矇搴?鏁ｇ矇' },
      ],
      '灏忔牱璇曠敤': [
        { id: 'base009', name: '澶х墝绮夊簳灏忔牱濂楄', brand: 'Mix', price: 59, sales: '2.8涓?, img: 'foundation9', tag: '灏忔牱', desc: '5鏀' },
      ],
    },
    yanying: {
      all: [
        { id: 'eye001', name: '瀹岀編鏃ヨ鎺㈤櫓瀹跺崄浜岃壊鐪煎奖鐩?, brand: '瀹岀編鏃ヨ', price: 129, sales: '6.8涓?, img: 'eyeshadow1', tag: '鐑攢', desc: '灏忕尗鐩? },
        { id: 'eye002', name: '3CE涔濆鏍肩溂褰辩洏 Overtake', brand: '3CE', price: 245, sales: '4.2涓?, img: 'eyeshadow2', tag: '', desc: '姗樻璋? },
        { id: 'eye003', name: 'Tom Ford鍥涜壊鐪煎奖鐩?20', brand: 'Tom Ford', price: 720, sales: '1.8涓?, img: 'eyeshadow3', tag: '', desc: '铚滄妫? },
        { id: 'eye004', name: 'Kiss Me闃叉按鐪肩嚎娑茬瑪', brand: 'Kiss Me', price: 68, sales: '9.2涓?, img: 'eyeshadow4', tag: '鐖嗘', desc: '鏋佺粏绗斿皷' },
        { id: 'eye005', name: '鑹炬潨绾辩潾姣涙墦搴曡啅', brand: 'Ettusais', price: 89, sales: '5.6涓?, img: 'eyeshadow5', tag: '', desc: '鏍规牴鍒嗘槑' },
        { id: 'eye006', name: '鑺辫タ瀛愯灪榛涚敓鑺辩湁绗?, brand: '鑺辫タ瀛?, price: 69, sales: '3.4涓?, img: 'eyeshadow6', tag: '', desc: '鏋佺粏涓夎' },
      ],
      '鏂板搧涓婂競': [
        { id: 'eye007', name: 'Urban Decay Naked Heat', brand: 'Urban Decay', price: 480, sales: '1.5涓?, img: 'eyeshadow7', tag: '鏂板搧', desc: '鏋彾鐩? },
      ],
      '闄愭椂鐗规儬': [
        { id: 'eye001', name: '瀹岀編鏃ヨ鎺㈤櫓瀹跺崄浜岃壊鐪煎奖鐩?, brand: '瀹岀編鏃ヨ', price: 89, sales: '6.8涓?, img: 'eyeshadow1', tag: '鐗规儬', desc: '灏忕尗鐩? },
        { id: 'eye004', name: 'Kiss Me闃叉按鐪肩嚎娑茬瑪', brand: 'Kiss Me', price: 48, sales: '9.2涓?, img: 'eyeshadow4', tag: '鐗规儬', desc: '鏋佺粏绗斿皷' },
      ],
      '鐖嗘鎺ㄨ崘': [
        { id: 'eye001', name: '瀹岀編鏃ヨ鎺㈤櫓瀹跺崄浜岃壊鐪煎奖鐩?, brand: '瀹岀編鏃ヨ', price: 129, sales: '6.8涓?, img: 'eyeshadow1', tag: '鐑攢', desc: '灏忕尗鐩? },
        { id: 'eye004', name: 'Kiss Me闃叉按鐪肩嚎娑茬瑪', brand: 'Kiss Me', price: 68, sales: '9.2涓?, img: 'eyeshadow4', tag: '鐖嗘', desc: '鏋佺粏绗斿皷' },
      ],
      '绀肩洅濂楄': [
        { id: 'eye008', name: '3CE鐪煎奖绀肩洅濂楄', brand: '3CE', price: 499, sales: '6鍗?, img: 'eyeshadow8', tag: '绀肩洅', desc: '鍚溂褰?鍞囬噳' },
      ],
      '鏂板搧棣栧彂': [
        { id: 'eye009', name: '瀹岀編鏃ヨ璧ょ嫄鐩?, brand: '瀹岀編鏃ヨ', price: 159, sales: '2.1涓?, img: 'eyeshadow9', tag: '鏂板搧', desc: '璧ょ嫄闄愬畾' },
      ],
    },
    saihong: {
      all: [
        { id: 'blush001', name: 'NARS鑵孩 Orgasm', brand: 'NARS', price: 300, sales: '4.5涓?, img: 'blush1', tag: '鐑攢', desc: '铚滄閲戝亸鍏? },
        { id: 'blush002', name: '姗樻湹鍗曡壊鑵孩 06', brand: '姗樻湹', price: 29, sales: '7.8涓?, img: 'blush2', tag: '鐖嗘', desc: '鏉忓瓙鑹? },
        { id: 'blush003', name: 'MAC鐢熷楂樺厜', brand: 'MAC', price: 360, sales: '3.2涓?, img: 'blush3', tag: '', desc: '棣欐鑹? },
        { id: 'blush004', name: 'Too Cool涓夎壊淇鐩?, brand: 'Too Cool', price: 89, sales: '5.1涓?, img: 'blush4', tag: '', desc: '榧诲奖渚у奖' },
        { id: 'blush005', name: '鑺辫タ瀛愯儹鑴傝叜绾?, brand: '鑺辫タ瀛?, price: 129, sales: '2.8涓?, img: 'blush5', tag: '', desc: '鑷劧濂芥皵鑹? },
        { id: 'blush006', name: 'Hourglass浜旇姳鑲夐珮鍏?, brand: 'Hourglass', price: 420, sales: '1.5涓?, img: 'blush6', tag: '', desc: '鏌斿厜浜墖' },
      ],
      '鏂板搧涓婂競': [
        { id: 'blush007', name: 'Fenty Beauty楂樺厜妫?, brand: 'Fenty', price: 348, sales: '9鍗?, img: 'blush7', tag: '鏂板搧', desc: '閽荤煶楂樺厜' },
      ],
      '闄愭椂鐗规儬': [
        { id: 'blush002', name: '姗樻湹鍗曡壊鑵孩 06', brand: '姗樻湹', price: 19, sales: '7.8涓?, img: 'blush2', tag: '鐗规儬', desc: '鏉忓瓙鑹? },
        { id: 'blush004', name: 'Too Cool涓夎壊淇鐩?, brand: 'Too Cool', price: 69, sales: '5.1涓?, img: 'blush4', tag: '鐗规儬', desc: '榧诲奖渚у奖' },
      ],
      '鐖嗘鎺ㄨ崘': [
        { id: 'blush001', name: 'NARS鑵孩 Orgasm', brand: 'NARS', price: 300, sales: '4.5涓?, img: 'blush1', tag: '鐑攢', desc: '铚滄閲戝亸鍏? },
        { id: 'blush002', name: '姗樻湹鍗曡壊鑵孩 06', brand: '姗樻湹', price: 29, sales: '7.8涓?, img: 'blush2', tag: '鐖嗘', desc: '鏉忓瓙鑹? },
      ],
      '绀肩洅濂楄': [
        { id: 'blush008', name: 'NARS淇绀肩洅', brand: 'NARS', price: 599, sales: '4鍗?, img: 'blush8', tag: '绀肩洅', desc: '鑵孩+楂樺厜' },
      ],
      '灏忔牱璇曠敤': [
        { id: 'blush009', name: '楂樺厜灏忔牱濂楄', brand: 'Mix', price: 39, sales: '2.1涓?, img: 'blush9', tag: '灏忔牱', desc: '4鑹茶' },
      ],
    },
    xiaomian: {
      all: [
        { id: 'brow001', name: '鑺辫タ瀛愯灪榛涚敓鑺辩湁绗?, brand: '鑺辫タ瀛?, price: 69, sales: '3.4涓?, img: 'brow1', tag: '', desc: '鏋佺粏涓夎' },
        { id: 'brow002', name: '妞嶆潙绉€鐮嶅垁鐪夌瑪', brand: 'Shu Uemura', price: 200, sales: '2.8涓?, img: 'brow2', tag: '', desc: '缁忓吀鐮嶅垁' },
        { id: 'brow003', name: 'Anastasia鐪夎兌', brand: 'Anastasia', price: 230, sales: '1.5涓?, img: 'brow3', tag: '', desc: '鎸佷箙瀹氬瀷' },
        { id: 'brow004', name: '姗樻湹鐪夎啅', brand: '姗樻湹', price: 39, sales: '4.2涓?, img: 'brow4', tag: '鐖嗘', desc: '闃叉按闃叉睏' },
        { id: 'brow005', name: '鍗″Э鍏扮湁绮?, brand: '鍗″Э鍏?, price: 89, sales: '3.1涓?, img: 'brow5', tag: '', desc: '涓夎壊娓愬彉' },
        { id: 'brow006', name: 'Dior鐪夌瑪', brand: 'Dior', price: 280, sales: '1.2涓?, img: 'brow6', tag: '', desc: '绮惧噯鍕惧嫆' },
      ],
      '鏂板搧涓婂競': [
        { id: 'brow007', name: 'Hourglass鐪夌瑪', brand: 'Hourglass', price: 320, sales: '8鍗?, img: 'brow7', tag: '鏂板搧', desc: '瓒呯粏绗斿皷' },
      ],
      '闄愭椂鐗规儬': [
        { id: 'brow004', name: '姗樻湹鐪夎啅', brand: '姗樻湹', price: 29, sales: '4.2涓?, img: 'brow4', tag: '鐗规儬', desc: '闃叉按闃叉睏' },
      ],
      '鐖嗘鎺ㄨ崘': [
        { id: 'brow001', name: '鑺辫タ瀛愯灪榛涚敓鑺辩湁绗?, brand: '鑺辫タ瀛?, price: 69, sales: '3.4涓?, img: 'brow1', tag: '', desc: '鏋佺粏涓夎' },
        { id: 'brow004', name: '姗樻湹鐪夎啅', brand: '姗樻湹', price: 39, sales: '4.2涓?, img: 'brow4', tag: '鐖嗘', desc: '闃叉按闃叉睏' },
      ],
      '绀肩洅濂楄': [
        { id: 'brow008', name: '鐪夐儴鎶ょ悊濂楄', brand: 'Mix', price: 129, sales: '5鍗?, img: 'brow8', tag: '绀肩洅', desc: '鐪夌瑪+鐪夎兌+淇湁鍒€' },
      ],
      '鏂板搧棣栧彂': [
        { id: 'brow009', name: '3CE鐪夌矇鐩?, brand: '3CE', price: 150, sales: '1.1涓?, img: 'brow9', tag: '鏂板搧', desc: '鍙岃壊鐪夌矇' },
      ],
    },
    huzhuang: {
      all: [
        { id: 'skincare001', name: 'SK-II绁炰粰姘寸簿鍗庢恫', brand: 'SK-II', price: 1540, sales: '2.8涓?, img: 'skincare1', tag: '鐑攢', desc: '230ml' },
        { id: 'skincare002', name: '淇附鍙壊淇簿鍗?, brand: 'SkinCeuticals', price: 595, sales: '1.9涓?, img: 'skincare2', tag: '', desc: '30ml' },
        { id: 'skincare003', name: '鐝傛鼎娑︽蹈淇濇箍涔抽湝', brand: 'Curel', price: 188, sales: '4.5涓?, img: 'skincare3', tag: '', desc: '40g' },
        { id: 'skincare004', name: '瀹夌儹娌欓噾鐡堕槻鏅掗湝', brand: 'Anessa', price: 228, sales: '6.2涓?, img: 'skincare4', tag: '鐖嗘', desc: '60ml' },
        { id: 'skincare005', name: '娆ц幈闆呭皬閲戠闃叉檼闇?, brand: 'L\'Oreal', price: 149, sales: '5.8涓?, img: 'skincare5', tag: '', desc: '30ml' },
        { id: 'skincare006', name: '钖囪濞滆垝鏁忎繚婀跨壒鎶ら湝', brand: 'Winona', price: 268, sales: '3.2涓?, img: 'skincare6', tag: '', desc: '50g' },
      ],
      '鏂板搧涓婂競': [
        { id: 'skincare007', name: 'La Mer娴疯摑涔嬭皽闈㈤湝', brand: 'La Mer', price: 2550, sales: '8鍗?, img: 'skincare7', tag: '鏂板搧', desc: '60ml' },
      ],
      '闄愭椂鐗规儬': [
        { id: 'skincare004', name: '瀹夌儹娌欓噾鐡堕槻鏅掗湝', brand: 'Anessa', price: 188, sales: '6.2涓?, img: 'skincare4', tag: '鐗规儬', desc: '60ml' },
        { id: 'skincare005', name: '娆ц幈闆呭皬閲戠闃叉檼闇?, brand: 'L\'Oreal', price: 119, sales: '5.8涓?, img: 'skincare5', tag: '鐗规儬', desc: '30ml' },
      ],
      '鐖嗘鎺ㄨ崘': [
        { id: 'skincare001', name: 'SK-II绁炰粰姘寸簿鍗庢恫', brand: 'SK-II', price: 1540, sales: '2.8涓?, img: 'skincare1', tag: '鐑攢', desc: '230ml' },
        { id: 'skincare004', name: '瀹夌儹娌欓噾鐡堕槻鏅掗湝', brand: 'Anessa', price: 228, sales: '6.2涓?, img: 'skincare4', tag: '鐖嗘', desc: '60ml' },
      ],
      '绀肩洅濂楄': [
        { id: 'skincare008', name: 'SK-II绁炰粰姘寸ぜ鐩?, brand: 'SK-II', price: 2090, sales: '6鍗?, img: 'skincare8', tag: '绀肩洅', desc: '鍚竻鑾归湶' },
        { id: 'skincare009', name: '淇附鍙姢鑲ゅ瑁?, brand: 'SkinCeuticals', price: 1280, sales: '4鍗?, img: 'skincare9', tag: '绀肩洅', desc: '鍚壊淇?B5' },
      ],
      '鎶よ偆濂楄': [
        { id: 'skincare010', name: '鍩虹鎶よ偆濂楄', brand: 'Mix', price: 399, sales: '2.1涓?, img: 'skincare10', tag: '', desc: '娲侀潰+姘?涔? },
      ],
    }
  };

  var imageUrls = {
    coverCreator1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20morning%20commute%20makeup%2C%20fresh%20natural%20look%2C%20professional%20beauty%20photography%2C%20soft%20lighting&image_size=square',
    coverCreator2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20luxury%20goddess%20makeup%2C%20glamorous%20elegant%20look%2C%20professional%20beauty%20photography%2C%20studio%20lighting&image_size=square',
    coverCreator3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20pure%20white%20water%20makeup%2C%20natural%20dewy%20look%2C%20professional%20beauty%20photography%2C%20soft%20pastel%20colors&image_size=square',
    coverCreator4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20seductive%20elegant%20makeup%2C%20dark%20glamorous%20look%2C%20professional%20beauty%20photography%2C%20dramatic%20lighting&image_size=square',
    coverCreator5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Korean%20schoolgirl%20makeup%2C%20cute%20fresh%20look%2C%20professional%20beauty%20photography%2C%20soft%20pink%20tones&image_size=square',
    coverCreator6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20autumn%20maillard%20makeup%2C%20warm%20brown%20tones%2C%20professional%20beauty%20photography%2C%20fall%20aesthetic&image_size=square',
    coverCreator7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20clean%20makeup%2C%20minimal%20natural%20look%2C%20professional%20beauty%20photography%2C%20soft%20neutral%20colors&image_size=square',
    coverCreator8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20new%20Chinese%20style%20makeup%2C%20elegant%20serene%20look%2C%20professional%20beauty%20photography%2C%20traditional%20elements&image_size=square',
    coverCreator9: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Hong%20Kong%20vintage%20makeup%2C%20retro%20glamorous%20look%2C%20professional%20beauty%20photography%2C%20classic%2080s%20style&image_size=square',
    coverCreator10: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Thai%20style%20makeup%2C%20bold%20dramatic%20look%2C%20professional%20beauty%20photography%2C%20rich%20colors&image_size=square',
    coverCreator11: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Japanese%20magazine%20makeup%2C%20transparent%20natural%20look%2C%20professional%20beauty%20photography%2C%20soft%20lighting&image_size=square',
    coverCreator12: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Y2K%20millennium%20makeup%2C%20futuristic%20colorful%20look%2C%20professional%20beauty%20photography%2C%20sparkle%20elements&image_size=square',
    coverCreator13: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20ballet%20girl%20makeup%2C%20graceful%20soft%20look%2C%20professional%20beauty%20photography%2C%20pink%20tutu%20elements&image_size=square',
    coverCreator14: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20old%20money%20elegant%20makeup%2C%20sophisticated%20minimal%20look%2C%20professional%20beauty%20photography%2C%20neutral%20tones&image_size=square',
    coverCreator15: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20dopamine%20makeup%2C%20colorful%20energetic%20look%2C%20professional%20beauty%20photography%2C%20bright%20colors&image_size=square',
    coverCreator16: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20smoky%20eye%20western%20makeup%2C%20bold%20glamorous%20look%2C%20professional%20beauty%20photography%2C%20dark%20tones&image_size=square',
    
    coverTutorial1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20eyeliner%20makeup%20tutorial%2C%20close%20up%20eye%20makeup%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20monolids%20eyeshadow%20makeup%2C%20eye%20makeup%20detail%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20natural%20under%20eye%20makeup%2C%20bright%20eyelid%20look%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20long%20curly%20lashes%20makeup%2C%20eye%20makeup%20detail%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20contouring%20makeup%2C%20face%20sculpting%20detail%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20plump%20lips%20makeup%2C%20lip%20makeup%20detail%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20wild%20eyebrows%20makeup%2C%20eyebrow%20detail%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20blush%20makeup%2C%20cheek%20makeup%20detail%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial9: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20concealer%20makeup%2C%20under%20eye%20coverage%2C%20professional%20beauty%20photography&image_size=square',
    coverTutorial10: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20flawless%20foundation%20makeup%2C%20smooth%20skin%20finish%2C%20professional%20beauty%20photography&image_size=square',
    
    coverGuofeng1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Tang%20Dynasty%20traditional%20makeup%2C%20gold%20ornaments%2C%20professional%20beauty%20photography%2C%20Chinese%20ancient%20style&image_size=square',
    coverGuofeng2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Song%20Dynasty%20traditional%20makeup%2C%20elegant%20simple%20look%2C%20professional%20beauty%20photography%2C%20Chinese%20classical%20style&image_size=square',
    coverGuofeng3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Dunhuang%20flying%20Apsara%20makeup%2C%20gold%20foil%20face%2C%20professional%20beauty%20photography%2C%20ancient%20Chinese%20art&image_size=square',
    coverGuofeng4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Chinese%20opera%20makeup%2C%20traditional%20Beijing%20opera%20style%2C%20professional%20beauty%20photography&image_size=square',
    coverGuofeng5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Ming%20Dynasty%20traditional%20makeup%2C%20peach%20blossom%20look%2C%20professional%20beauty%20photography%2C%20Chinese%20classical%20style&image_size=square',
    coverGuofeng6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Wei%20Jin%20Dynasty%20traditional%20makeup%2C%20natural%20minimal%20look%2C%20professional%20beauty%20photography&image_size=square',
    coverGuofeng7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Han%20Dynasty%20traditional%20makeup%2C%20red%20rouge%20look%2C%20professional%20beauty%20photography%2C%20Chinese%20ancient%20style&image_size=square',
    coverGuofeng8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Miao%20ethnic%20minority%20makeup%2C%20silver%20jewelry%2C%20professional%20beauty%20photography%2C%20Chinese%20ethnic%20style&image_size=square',
    
    coverSilver1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20mature%20woman%20daily%20makeup%2C%20elegant%20natural%20look%2C%20professional%20beauty%20photography%2C%20soft%20lighting&image_size=square',
    coverSilver2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20mature%20woman%20party%20makeup%2C%20glamorous%20elegant%20look%2C%20professional%20beauty%20photography%2C%20evening%20lighting&image_size=square',
    coverSilver3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20mature%20woman%20professional%20makeup%2C%20confident%20business%20look%2C%20professional%20beauty%20photography%2C%20office%20setting&image_size=square',
    coverSilver4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20mature%20woman%20travel%20makeup%2C%20fresh%20natural%20look%2C%20professional%20beauty%20photography%2C%20outdoor%20setting&image_size=square',
    coverSilver5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20mature%20woman%20bridal%20makeup%2C%20elegant%20wedding%20look%2C%20professional%20beauty%20photography%2C%20white%20dress&image_size=square',
    coverSilver6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20mature%20woman%20family%20dinner%20makeup%2C%20warm%20friendly%20look%2C%20professional%20beauty%20photography%2C%20home%20setting&image_size=square',
    
    coverBrand1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20YSL%20red%20lipstick%20makeup%2C%20luxury%20goddess%20look%2C%20professional%20beauty%20photography%2C%20high%20end%20style&image_size=square',
    coverBrand2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Dior%20romantic%20makeup%2C%20elegant%20sweet%20look%2C%20professional%20beauty%20photography%2C%20luxury%20style&image_size=square',
    coverBrand3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Chanel%20French%20elegant%20makeup%2C%20sophisticated%20minimal%20look%2C%20professional%20beauty%20photography&image_size=square',
    coverBrand4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Lancome%20flawless%20makeup%2C%20perfect%20skin%20look%2C%20professional%20beauty%20photography%2C%20elegant%20style&image_size=square',
    coverBrand5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20MAC%20creative%20makeup%2C%20bold%20colorful%20look%2C%20professional%20beauty%20photography%2C%20artistic%20style&image_size=square',
    
    coverCelebrity1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20sweet%20peach%20makeup%2C%20cute%20fresh%20look%2C%20professional%20beauty%20photography%2C%20pink%20tones&image_size=square',
    coverCelebrity2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20cat%20eye%20makeup%2C%20seductive%20feminine%20look%2C%20professional%20beauty%20photography%2C%20elegant%20style&image_size=square',
    coverCelebrity3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20dramatic%20glamorous%20makeup%2C%20bold%20beautiful%20look%2C%20professional%20beauty%20photography%2C%20red%20carpet%20style&image_size=square',
    coverCelebrity4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20Korean%20dewy%20makeup%2C%20glowing%20skin%20look%2C%20professional%20beauty%20photography%2C%20K-pop%20style&image_size=square',
    coverCelebrity5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20serene%20cool%20makeup%2C%20elegant%20mysterious%20look%2C%20professional%20beauty%20photography%2C%20minimal%20style&image_size=square',
    coverCelebrity6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20ethereal%20natural%20makeup%2C%20angelic%20pure%20look%2C%20professional%20beauty%20photography%2C%20soft%20lighting&image_size=square',
    coverCelebrity7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20elegant%20red%20lipstick%20makeup%2C%20sophisticated%20glamorous%20look%2C%20professional%20beauty%20photography&image_size=square',
    
    lipstick1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=YSL%20luxury%20red%20lipstick%20gold%20tube%2C%20cosmetic%20product%20photography%2C%20elegant%20white%20background%2C%20high%20end%20beauty%20product&image_size=square',
    lipstick2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dior%20classic%20red%20lipstick%20tube%2C%20luxury%20cosmetic%20product%20photography%2C%20white%20background%2C%20elegant%20beauty%20product&image_size=square',
    lipstick3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MAC%20Chili%20lipstick%20bullet%20shape%2C%20cosmetic%20product%20photography%2C%20white%20background%2C%20professional%20beauty%20product&image_size=square',
    lipstick4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3CE%20velvet%20lip%20tint%20tube%2C%20Korean%20cosmetic%20product%20photography%2C%20white%20background%2C%20beauty%20product&image_size=square',
    lipstick5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Colorkey%20air%20lip%20glaze%20tube%2C%20Chinese%20cosmetic%20product%20photography%2C%20white%20background%2C%20affordable%20beauty&image_size=square',
    lipstick6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Perfect%20Diary%20lip%20stick%20card%20design%2C%20Chinese%20cosmetic%20product%20photography%2C%20white%20background%2C%20beauty%20product&image_size=square',
    lipstick7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NARS%20lipstick%20black%20tube%2C%20luxury%20cosmetic%20product%20photography%2C%20white%20background%2C%20professional%20beauty&image_size=square',
    lipstick8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tom%20Ford%20luxury%20lipstick%20gold%20case%2C%20high%20end%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    lipstick9: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=YSL%20lipstick%20gift%20set%20box%2C%20luxury%20cosmetic%20gift%20box%20photography%2C%20elegant%20packaging&image_size=square',
    lipstick10: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mini%20lipstick%20sample%20set%2C%20cosmetic%20travel%20size%20photography%2C%20white%20background&image_size=square',
    
    foundation1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=YSL%20foundation%20bottle%2C%20luxury%20makeup%20product%20photography%2C%20white%20background%2C%20high%20end%20beauty&image_size=square',
    foundation2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lancome%20foundation%20bottle%2C%20luxury%20makeup%20product%20photography%2C%20white%20background%2C%20elegant&image_size=square',
    foundation3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Armani%20foundation%20bottle%20red%20cap%2C%20luxury%20makeup%20product%20photography%2C%20white%20background&image_size=square',
    foundation4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Florasis%20cushion%20compact%20Chinese%20style%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    foundation5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Estee%20Lauder%20foundation%20bottle%2C%20luxury%20makeup%20product%20photography%2C%20white%20background&image_size=square',
    foundation6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NARS%20concealer%20tube%2C%20cosmetic%20product%20photography%2C%20white%20background%2C%20professional%20beauty&image_size=square',
    foundation7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chanel%20foundation%20bottle%2C%20luxury%20makeup%20product%20photography%2C%20white%20background&image_size=square',
    foundation8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lancome%20makeup%20gift%20set%2C%20foundation%20and%20powder%20set%2C%20luxury%20cosmetic%20packaging&image_size=square',
    foundation9: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mini%20foundation%20sample%20set%2C%20travel%20size%20cosmetic%20photography%2C%20white%20background&image_size=square',
    
    eyeshadow1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Perfect%20Diary%20eyeshadow%20palette%20cat%20design%2C%20Chinese%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    eyeshadow2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3CE%20eyeshadow%20palette%209%20colors%2C%20Korean%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    eyeshadow3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tom%20Ford%20eyeshadow%20palette%20luxury%20gold%2C%20high%20end%20cosmetic%20product%20photography&image_size=square',
    eyeshadow4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kiss%20Me%20eyeliner%20pen%20black%2C%20Japanese%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    eyeshadow5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ettusais%20mascara%20base%20tube%2C%20Japanese%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    eyeshadow6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Florasis%20eyebrow%20pencil%20Chinese%20style%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    eyeshadow7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Urban%20Decay%20eyeshadow%20palette%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    eyeshadow8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3CE%20eyeshadow%20and%20lip%20gift%20set%2C%20Korean%20cosmetic%20packaging%2C%20white%20background&image_size=square',
    eyeshadow9: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Perfect%20Diary%20fox%20eyeshadow%20palette%2C%20limited%20edition%2C%20Chinese%20cosmetic%20photography&image_size=square',
    
    blush1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NARS%20blush%20compact%20Orgasm%2C%20luxury%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    blush2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Judydoll%20single%20blush%20pan%2C%20affordable%20Chinese%20cosmetic%20product%20photography&image_size=square',
    blush3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MAC%20highlighter%20compact%20gold%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    blush4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Too%20Cool%20contour%20palette%203%20colors%2C%20Korean%20cosmetic%20product%20photography&image_size=square',
    blush5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Florasis%20blush%20Chinese%20style%20packaging%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    blush6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hourglass%20highlighter%20compact%2C%20luxury%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    blush7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fenty%20Beauty%20highlighter%20stick%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    blush8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NARS%20blush%20and%20highlighter%20gift%20set%2C%20luxury%20cosmetic%20packaging&image_size=square',
    blush9: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Mini%20highlighter%20sample%20set%2C%20travel%20size%20cosmetic%20photography&image_size=square',
    
    brow1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Florasis%20eyebrow%20pencil%20Chinese%20style%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    brow2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shu%20Uemura%20eyebrow%20pencil%20classic%2C%20Japanese%20cosmetic%20product%20photography&image_size=square',
    brow3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Anastasia%20brow%20gel%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    brow4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Judydoll%20brow%20cream%2C%20Chinese%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    brow5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Carslan%20brow%20powder%20palette%2C%20Chinese%20cosmetic%20product%20photography&image_size=square',
    brow6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dior%20eyebrow%20pencil%2C%20luxury%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    brow7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hourglass%20eyebrow%20pencil%2C%20luxury%20cosmetic%20product%20photography&image_size=square',
    brow8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Eyebrow%20care%20gift%20set%2C%20cosmetic%20packaging%2C%20white%20background&image_size=square',
    brow9: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3CE%20brow%20powder%20palette%2C%20Korean%20cosmetic%20product%20photography&image_size=square',
    
    skincare1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SK-II%20facial%20treatment%20essence%20bottle%2C%20luxury%20skincare%20product%20photography%2C%20white%20background&image_size=square',
    skincare2: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SkinCeuticals%20serum%20bottle%20green%2C%20professional%20skincare%20product%20photography&image_size=square',
    skincare3: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Curel%20moisturizing%20cream%20jar%2C%20Japanese%20skincare%20product%20photography%2C%20white%20background&image_size=square',
    skincare4: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Anessa%20sunscreen%20gold%20bottle%2C%20Japanese%20skincare%20product%20photography%2C%20white%20background&image_size=square',
    skincare5: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Loreal%20sunscreen%20gold%20tube%2C%20skincare%20product%20photography%2C%20white%20background&image_size=square',
    skincare6: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Winona%20sensitive%20skin%20cream%20tube%2C%20Chinese%20skincare%20product%20photography&image_size=square',
    skincare7: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=La%20Mer%20moisturizing%20cream%20jar%2C%20luxury%20skincare%20product%20photography&image_size=square',
    skincare8: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SK-II%20gift%20set%20box%2C%20luxury%20skincare%20packaging%2C%20elegant&image_size=square',
    skincare9: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SkinCeuticals%20skincare%20gift%20set%2C%20professional%20packaging%2C%20white%20background&image_size=square',
    skincare10: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Basic%20skincare%20set%20cleanser%20toner%20lotion%2C%20cosmetic%20packaging&image_size=square',
    
    // Product images for cart/orders
    productLipstick1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=YSL%20luxury%20red%20lipstick%20gold%20tube%2C%20cosmetic%20product%20photography%2C%20elegant%20white%20background%2C%20high%20end%20beauty%20product&image_size=square',
    productFoundation1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lancome%20foundation%20bottle%2C%20luxury%20makeup%20product%20photography%2C%20white%20background%2C%20elegant&image_size=square',
    productEyeshadow1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Perfect%20Diary%20eyeshadow%20palette%20cat%20design%2C%20Chinese%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    productBlush1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Perfect%20Diary%20blush%20compact%20peach%20color%2C%20Chinese%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    
    p001: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=YSL%20foundation%20bottle%20gold%20cap%2C%20luxury%20makeup%20product%20photography%2C%20white%20background&image_size=square',
    p002: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lancome%20foundation%20bottle%20pink%2C%20luxury%20makeup%20product%20photography%2C%20white%20background&image_size=square',
    p003: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Armani%20foundation%20bottle%20black%2C%20luxury%20makeup%20product%20photography%2C%20white%20background&image_size=square',
    p004: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Florasis%20cushion%20compact%20Chinese%20style%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    p005: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Estee%20Lauder%20foundation%20bottle%20brown%2C%20luxury%20makeup%20product%20photography%2C%20white%20background&image_size=square',
    p006: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NARS%20concealer%20tube%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    p007: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Givenchy%20loose%20powder%20four%20grid%2C%20luxury%20makeup%20product%20photography%2C%20white%20background&image_size=square',
    p008: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Perfect%20Diary%20eyeshadow%20palette%20cat%2C%20Chinese%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    p009: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3CE%20eyeshadow%20palette%20nine%20color%2C%20Korean%20cosmetic%20product%20photography&image_size=square',
    p010: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tom%20Ford%20eyeshadow%20palette%20four%20color%2C%20luxury%20makeup%20product%20photography&image_size=square',
    p011: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Kiss%20Me%20eyeliner%20pen%20black%2C%20Japanese%20cosmetic%20product%20photography&image_size=square',
    p012: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Maybelline%20eyeliner%20pen%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    p013: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ettusais%20mascara%20base%20tube%2C%20Japanese%20cosmetic%20product%20photography&image_size=square',
    p014: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Florasis%20eyebrow%20pencil%20Chinese%20style%2C%20cosmetic%20product%20photography&image_size=square',
    p015: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=YSL%20lipstick%20gold%20tube%20red%2C%20luxury%20cosmetic%20product%20photography&image_size=square',
    p016: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dior%20lipstick%20red%20tube%2C%20luxury%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    p017: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Colorkey%20lip%20gloss%20tube%2C%20Chinese%20cosmetic%20product%20photography&image_size=square',
    p018: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MAC%20lipstick%20bullet%20shape%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    p019: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3CE%20lip%20gloss%20tube%2C%20Korean%20cosmetic%20product%20photography&image_size=square',
    p020: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Perfect%20Diary%20lip%20gloss%20card%20design%2C%20Chinese%20cosmetic%20product&image_size=square',
    p021: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=NARS%20blush%20compact%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    p022: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Judydoll%20blush%20compact%20peach%2C%20Chinese%20cosmetic%20product%20photography&image_size=square',
    p023: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MAC%20highlighter%20compact%2C%20cosmetic%20product%20photography%2C%20white%20background&image_size=square',
    p024: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Too%20Cool%20For%20School%20contour%20palette%2C%20Korean%20cosmetic%20product&image_size=square',
    p025: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SK-II%20facial%20treatment%20essence%20bottle%2C%20luxury%20skincare%20product%20photography&image_size=square',
    p026: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SkinCeuticals%20serum%20bottle%20green%2C%20professional%20skincare%20product&image_size=square',
    p027: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Curel%20moisturizing%20cream%20jar%2C%20Japanese%20skincare%20product%20photography&image_size=square',
    p028: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Anessa%20sunscreen%20gold%20bottle%2C%20Japanese%20skincare%20product%20photography&image_size=square',
    p029: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Loreal%20sunscreen%20gold%20tube%2C%20skincare%20product%20photography&image_size=square',
    p030: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Winona%20sensitive%20skin%20cream%20tube%2C%20Chinese%20skincare%20product%20photography&image_size=square',
    
    makeup_natural: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20natural%20daily%20makeup%2C%20fresh%20dewy%20look%2C%20professional%20beauty%20photography%2C%20soft%20lighting&image_size=square',
    makeup_peach: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20peach%20blush%20makeup%2C%20sweet%20pink%20look%2C%20professional%20beauty%20photography%2C%20warm%20tones&image_size=square',
    makeup_elegant: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20elegant%20office%20makeup%2C%20sophisticated%20look%2C%20professional%20beauty%20photography%2C%20neutral%20tones&image_size=square',
    lancome_toner: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lancome%20pink%20toner%20bottle%2C%20luxury%20skincare%20product%20photography%2C%20pink%20aesthetic&image_size=square',
    sk2_essence: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SK-II%20facial%20treatment%20essence%20clear%20bottle%2C%20luxury%20skincare%20product%20photography&image_size=square',
    ysl_lipstick: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=YSL%20gold%20lipstick%20tube%2C%20luxury%20cosmetic%20product%20photography&image_size=square',
    shiseido_sunscreen: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shiseido%20sunscreen%20tube%2C%20Japanese%20skincare%20product%20photography&image_size=square',
    powder1: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Givenchy%20powder%20compact%20four%20colors%2C%20luxury%20cosmetic%20product%20photography&image_size=square',
  };

  function getImageUrl(key) {
    return imageUrls[key] || imageUrls.lipstick1;
  }

  let currentMarketCat = 'kouhong';
  let currentMarketSub = 'all';
  let currentProduct = null;

  function renderMarketProducts() {
    const grid = document.getElementById('marketProductGrid');
    if (!grid) return;
    const catData = marketProducts[currentMarketCat];
    const list = (catData && (catData[currentMarketSub] || catData.all)) || [];
    grid.innerHTML = list.map(p => `
      <div class="product-card" onclick="openProductDetail('${p.id}')">
        <div class="product-img">
          <img src="${getImageUrl(p.img)}" alt="${p.name}">
          ${p.tag ? `<span class="badge badge-danger badge-pill product-tag">${p.tag}</span>` : ''}
        </div>
        <div class="product-text">
          <h4>${p.name}</h4>
          <div class="product-meta">
            <span class="product-price">楼${p.price}</span>
            <span class="product-sales">${p.sales || 0}浜鸿喘涔?/span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function switchMarketCat(el, cat) {
    currentMarketCat = cat;
    currentMarketSub = 'all';
    document.querySelectorAll('#marketCatTabs .mall-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const subTabs = document.getElementById('marketSubTabs');
    if (subTabs && marketSubCats[cat]) {
      const subs = marketSubCats[cat];
      subTabs.innerHTML = subs.map((s, i) =>
        `<span class="mall-sub-tab ${i === 0 ? 'active' : ''}" onclick="switchMarketSub(this)">${s}</span>`
      ).join('');
    }
    renderMarketProducts();
    el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  function switchMarketSub(el) {
    document.querySelectorAll('.mall-sub-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const text = el.textContent.trim();
    currentMarketSub = (text === '鍏ㄩ儴') ? 'all' : text;
    renderMarketProducts();
  }

  function findProductById(id) {
    for (const cat of Object.values(marketProducts)) {
      for (const list of Object.values(cat)) {
        const found = list.find(p => p.id === id);
        if (found) return found;
      }
    }
    return null;
  }

  function openProductDetail(id) {
    const p = findProductById(id);
    if (!p) { showToast('鍟嗗搧涓嶅瓨鍦?); return; }
    currentProduct = p;
    showToast('姝ｅ湪鎵撳紑: ' + p.name);
    const content = document.getElementById('productDetailContent');
    content.innerHTML = `
      <div class="product-detail-hero">
        <img src="${getImageUrl(p.img)}" alt="${p.name}">
      </div>
      <div class="product-detail-body">
        <div class="product-detail-title">${p.name}</div>
        <div class="product-detail-price">
          <div class="pdf-price"><span>楼</span>${p.price}</div>
          <div class="pdf-sales">${p.sales || 0} 浜哄凡璐拱</div>
        </div>
        <div class="product-detail-tags">
          <span class="pdf-tag">AI 璇曞</span>
          <span class="pdf-tag">姝ラ鏁欏</span>
          <span class="pdf-tag">浜у搧娓呭崟</span>
          <span class="pdf-tag">姘镐箙鏈夋晥</span>
        </div>
        <div class="product-author">
          <div class="author-avatar">${p.brand.charAt(0)}</div>
          <div class="author-info">
            <div class="author-name">${p.brand}</div>
            <div class="author-desc">瀹樻柟鍝佺墝 路 姝ｅ搧淇濋殰</div>
          </div>
          <button class="btn btn-primary btn-sm">鍏虫敞鍝佺墝</button>
        </div>
      </div>
      <div class="product-detail-section">
        <div class="pdf-section-title">鍟嗗搧浠嬬粛</div>
        <div class="pdf-desc">
          ${p.desc}銆?{p.brand}鍝佺墝涓撴敞浜庨珮鍝佽川缇庡浜у搧锛屾瘡涓€浠朵骇鍝侀兘缁忚繃涓ユ牸鐨勮川閲忔娴嬶紝纭繚瀹夊叏鍙潬銆傝繖娆句骇鍝侀€傚悎鍚勭鑲よ川浣跨敤锛屽府鍔╀綘鎵撻€犲畬缇庡瀹规晥鏋溿€?        </div>
      </div>
      <div class="product-detail-section">
        <div class="pdf-section-title">浜у搧鐗圭偣</div>
        <div class="pdf-steps">
          <div class="pdf-step">
            <div class="pdf-step-num">1</div>
            <div class="pdf-step-text">浣跨敤鍓嶈鍏堝仛濂借倢鑲ゆ竻娲佸拰鍩虹鎶よ偆锛岀‘淇濊倢鑲ゅ共鐖姐€?/div>
          </div>
          <div class="pdf-step">
            <div class="pdf-step-num">2</div>
            <div class="pdf-step-text">鏍规嵁浜у搧绫诲瀷锛屽彇閫傞噺浜у搧鍧囧寑娑傛姽浜庨潰閮ㄦ垨韬綋鐩稿簲閮ㄤ綅銆?/div>
          </div>
          <div class="pdf-step">
            <div class="pdf-step-num">3</div>
            <div class="pdf-step-text">閰嶅悎涓撲笟宸ュ叿浣跨敤鏁堟灉鏇翠匠锛屽鍖栧鍒枫€佺編濡嗚泲绛夈€?/div>
          </div>
          <div class="pdf-step">
            <div class="pdf-step-num">4</div>
            <div class="pdf-step-text">浣跨敤鍚庡強鏃舵竻娲佸伐鍏凤紝濡ュ杽淇濈浜у搧锛岄伩鍏嶉槼鍏夌洿灏勩€?/div>
          </div>
        </div>
      </div>
      <div class="product-detail-section">
        <div class="pdf-section-title">瑙勬牸鍙傛暟</div>
        <div class="pdf-desc" style="font-size: 13px; color: var(--color-text-secondary);">
          鍝佺墝锛?{p.brand} | 瑙勬牸锛氬父瑙勮 | 浜у湴锛氳繘鍙?鍥戒骇 | 淇濊川鏈燂細3骞?        </div>
      </div>
      <div style="height: 80px;"></div>
    `;
    switchTab('product-detail');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  let productFav = false;
  function toggleProductFav(btn) {
    productFav = !productFav;
    const svg = btn.querySelector('svg');
    if (productFav) {
      svg.setAttribute('fill', '#ff4757');
      svg.style.stroke = '#ff4757';
      showToast('宸叉敹钘?);
    } else {
      svg.setAttribute('fill', 'none');
      svg.style.stroke = 'currentColor';
      showToast('宸插彇娑堟敹钘?);
    }
  }

  // ===== Cart & Orders Management =====
  let cartItems = [];
  let ordersData = [
    // 宸插畬鎴愯鍗?    {
      id: 'ORD20260615001',
      status: 'completed',
      statusText: '宸插畬鎴?,
      date: '2026-06-15',
      createTime: '2026-06-15 10:23:45',
      payTime: '2026-06-15 10:25:12',
      shipTime: '2026-06-16 14:30:00',
      receiveTime: '2026-06-18 16:45:00',
      items: [
        { id: 'lip001', name: 'YSL灏忛噾鏉＄粏绠″彛绾?21鍙?, spec: '21鍙峰鍙よ摑璋冩绾?, price: 390, qty: 1, img: 'lipstick1' }
      ],
      total: 390,
      shop: 'YSL 鍦ｇ綏鍏板畼鏂规棗鑸板簵',
      address: '骞夸笢鐪佹繁鍦冲競鍗楀北鍖虹鎶€鍥崡璺?8鍙?,
      receiver: '寮犲皬鏄?,
      phone: '138****8888'
    },
    {
      id: 'ORD20260618002',
      status: 'completed',
      statusText: '宸插畬鎴?,
      date: '2026-06-18',
      createTime: '2026-06-18 14:12:33',
      payTime: '2026-06-18 14:15:00',
      shipTime: '2026-06-19 09:00:00',
      receiveTime: '2026-06-21 11:30:00',
      items: [
        { id: 'base001', name: 'YSL鎭掍箙鏃犵憰鎸佸绮夊簳娑?, spec: 'B10浜櫧鑹?, price: 620, qty: 1, img: 'foundation1' },
        { id: 'base007', name: '绾⒌甯屽洓瀹牸鏁ｇ矇 1鍙?, spec: '1鍙锋煍鍏夊畾濡?, price: 590, qty: 1, img: 'powder1' }
      ],
      total: 1210,
      shop: 'YSL 鍦ｇ綏鍏板畼鏂规棗鑸板簵',
      address: '骞夸笢鐪佹繁鍦冲競绂忕敯鍖虹鍗庤矾168鍙?,
      receiver: '鏉庡皬绾?,
      phone: '139****9999'
    },
    // 寰呮敹璐ц鍗曪紙宸插彂璐э級
    {
      id: 'ORD20260625003',
      status: 'shipped',
      statusText: '寰呮敹璐?,
      date: '2026-06-25',
      createTime: '2026-06-25 09:45:12',
      payTime: '2026-06-25 09:48:30',
      shipTime: '2026-06-26 15:00:00',
      receiveTime: null,
      items: [
        { id: 'lip002', name: 'Dior鐑堣壋钃濋噾鍞囪啅 999鍝戝厜', spec: '999缁忓吀姝ｇ孩', price: 380, qty: 1, img: 'lipstick2' },
        { id: 'lip003', name: 'MAC瀛愬脊澶村彛绾?Chili', spec: 'Chili灏忚荆妞?, price: 190, qty: 2, img: 'lipstick3' }
      ],
      total: 760,
      shop: 'Dior 杩ゥ瀹樻柟鏃楄埌搴?,
      address: '骞夸笢鐪佹繁鍦冲競鍗楀北鍖洪珮鏂板崡涓€閬?09鍙?,
      receiver: '鐜嬪皬鑺?,
      phone: '136****6666',
      expressNo: 'SF1234567890',
      expressCompany: '椤轰赴閫熻繍'
    },
    {
      id: 'ORD20260626004',
      status: 'shipped',
      statusText: '寰呮敹璐?,
      date: '2026-06-26',
      createTime: '2026-06-26 16:20:45',
      payTime: '2026-06-26 16:23:00',
      shipTime: '2026-06-27 10:30:00',
      receiveTime: null,
      items: [
        { id: 'eye001', name: '瀹岀編鏃ヨ鎺㈤櫓瀹跺崄浜岃壊鐪煎奖鐩?灏忕尗鐩?, spec: '灏忕尗鐩樺ぇ鍦拌壊', price: 129, qty: 1, img: 'eyeshadow1' },
        { id: 'brow001', name: '鑺辫タ瀛愯灪榛涚敓鑺辩湁绗?05鐏版', spec: '05鐏版鑹?, price: 69, qty: 1, img: 'brow1' }
      ],
      total: 198,
      shop: '瀹岀編鏃ヨ瀹樻柟鏃楄埌搴?,
      address: '骞夸笢鐪佹繁鍦冲競缃楁箹鍖轰笢闂ㄨ矾200鍙?,
      receiver: '闄堝皬缇?,
      phone: '137****7777',
      expressNo: 'JD9876543210',
      expressCompany: '浜笢鐗╂祦'
    },
    // 寰呭彂璐ц鍗曪紙宸蹭粯娆撅級
    {
      id: 'ORD20260627005',
      status: 'paid',
      statusText: '寰呭彂璐?,
      date: '2026-06-27',
      createTime: '2026-06-27 11:30:00',
      payTime: '2026-06-27 11:32:15',
      shipTime: null,
      receiveTime: null,
      items: [
        { id: 'base002', name: '鍏拌敾鎸佸杞婚€忕矇搴曟恫 PO-01', spec: 'PO-01鐡风櫧鑹?, price: 450, qty: 1, img: 'foundation2' },
        { id: 'face001', name: 'NARS鑵孩 Orgasm', spec: 'Orgasm铚滄閲?, price: 300, qty: 1, img: 'blush1' }
      ],
      total: 750,
      shop: 'LANC脭ME 鍏拌敾瀹樻柟鏃楄埌搴?,
      address: '骞夸笢鐪佹繁鍦冲競瀹濆畨鍖烘柊瀹夎閬撳缓瀹夎矾88鍙?,
      receiver: '鏋楀皬鑺?,
      phone: '135****5555'
    },
    {
      id: 'ORD20260628006',
      status: 'paid',
      statusText: '寰呭彂璐?,
      date: '2026-06-28',
      createTime: '2026-06-28 08:15:33',
      payTime: '2026-06-28 08:18:00',
      shipTime: null,
      receiveTime: null,
      items: [
        { id: 'skin001', name: 'SK-II绁炰粰姘寸簿鍗庢恫 230ml', spec: '230ml甯歌瑁?, price: 1540, qty: 1, img: 'skincare1' }
      ],
      total: 1540,
      shop: 'SK-II 瀹樻柟鏃楄埌搴?,
      address: '骞夸笢鐪佹繁鍦冲競榫欏矖鍖哄潅鐢拌閬撻洩宀楀寳璺?00鍙?,
      receiver: '鍛ㄥ皬鐕?,
      phone: '134****4444'
    },
    // 寰呬粯娆捐鍗?    {
      id: 'ORD20260628007',
      status: 'pending',
      statusText: '寰呬粯娆?,
      date: '2026-06-28',
      createTime: '2026-06-28 15:30:45',
      payTime: null,
      shipTime: null,
      receiveTime: null,
      items: [
        { id: 'lip005', name: 'Colorkey绌烘皵鍞囬噳 R608', spec: 'R608鐒︾硸绾㈡', price: 49, qty: 3, img: 'lipstick5' }
      ],
      total: 147,
      shop: 'Colorkey 瀹樻柟鏃楄埌搴?,
      address: '骞夸笢鐪佹繁鍦冲競鍗楀北鍖烘婧愯閬撴婧愯矾150鍙?,
      receiver: '瀛欏皬涓?,
      phone: '133****3333'
    },
    {
      id: 'ORD20260628008',
      status: 'pending',
      statusText: '寰呬粯娆?,
      date: '2026-06-28',
      createTime: '2026-06-28 18:45:00',
      payTime: null,
      shipTime: null,
      receiveTime: null,
      items: [
        { id: 'eye002', name: '3CE涔濆鏍肩溂褰辩洏 Overtake', spec: 'Overtake姗樻璋?, price: 245, qty: 1, img: 'eyeshadow2' },
        { id: 'face002', name: '姗樻湹鍗曡壊鑵孩 06鏉忓瓙鑹?, spec: '06娓╂煍鏉忓瓙', price: 29, qty: 2, img: 'blush2' },
        { id: 'lip004', name: '3CE涓濈粧鍞囬噳 Taupe', spec: 'Taupe鐮栫孩鑹?, price: 110, qty: 1, img: 'lipstick4' }
      ],
      total: 413,
      shop: '3CE Stylenanda 瀹樻柟鏃楄埌搴?,
      address: '骞夸笢鐪佹繁鍦冲競榫欏崕鍖烘皯娌昏閬撴皯娌昏矾200鍙?,
      receiver: '鍚村皬濞?,
      phone: '132****2222'
    }
  ];

  function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
      const count = cartItems.reduce((sum, item) => sum + item.qty, 0);
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  function addToCart(product, qty = 1) {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        spec: product.spec || '榛樿瑙勬牸',
        price: product.price,
        qty: qty,
        img: product.img
      });
    }
    updateCartBadge();
    showToast('宸插姞鍏ヨ喘鐗╄溅');
  }

  function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCartBadge();
    renderCart();
  }

  function updateCartItemQty(productId, delta) {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        removeFromCart(productId);
      } else {
        updateCartBadge();
        renderCart();
      }
    }
  }

  function clearCart() {
    if (cartItems.length === 0) {
      showToast('璐墿杞﹀凡缁忔槸绌虹殑');
      return;
    }
    if (confirm('纭畾瑕佹竻绌鸿喘鐗╄溅鍚楋紵')) {
      cartItems = [];
      updateCartBadge();
      renderCart();
      showToast('璐墿杞﹀凡娓呯┖');
    }
  }

  function renderCart() {
    const content = document.getElementById('cartContent');
    const footer = document.getElementById('cartFooter');
    
    if (cartItems.length === 0) {
      content.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">馃洅</div>
          <div class="cart-empty-text">璐墿杞︾┖绌哄涔?/div>
          <div class="cart-empty-hint">鍘诲競闆嗛€涢€涳紝娣诲姞蹇冧华鍟嗗搧鍚?/div>
          <button class="btn btn-primary" onclick="switchTab('mall')" style="margin-top: var(--spacing-4);">鍘诲競闆嗛€涢€?/button>
        </div>
      `;
      footer.style.display = 'none';
      return;
    }

    let total = 0;
    content.innerHTML = cartItems.map(item => {
      total += item.price * item.qty;
      return `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${getImageUrl(item.img)}" alt="${item.name}">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-spec">${item.spec}</div>
            <div class="cart-item-price">楼${item.price}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="updateCartItemQty('${item.id}', -1)">-</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartItemQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <div class="cart-item-del" onclick="removeFromCart('${item.id}')">脳</div>
        </div>
      `;
    }).join('');

    footer.style.display = 'flex';
    document.getElementById('cartTotalPrice').textContent = '楼' + total;
    document.getElementById('cartCount').textContent = cartItems.reduce((sum, item) => sum + item.qty, 0);
  }

  function checkout() {
    if (cartItems.length === 0) {
      showToast('璐墿杞︽槸绌虹殑');
      return;
    }

    const now = new Date();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const newOrder = {
      id: 'ORD' + now.getTime().toString().slice(-10),
      status: 'pending',
      statusText: '寰呬粯娆?,
      date: now.toISOString().split('T')[0],
      createTime: now.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-'),
      payTime: null,
      shipTime: null,
      receiveTime: null,
      items: cartItems.map(item => ({ ...item })),
      total: total,
      shop: '濡嗕即甯傞泦鑷惀',
      address: '骞夸笢鐪佹繁鍦冲競鍗楀北鍖虹鎶€鍥崡璺?8鍙?,
      receiver: '娴嬭瘯鐢ㄦ埛',
      phone: '138****8888'
    };
    
    ordersData.unshift(newOrder);
    cartItems = [];
    updateCartBadge();
    showToast('璁㈠崟宸插垱寤猴紝璇峰畬鎴愭敮浠?);
    openOrderDetail(newOrder.id);
  }

  function buyNow(product) {
    addToCart(product, 1);
    checkout();
  }

  function switchOrdersTab(el, status) {
    document.querySelectorAll('.orders-tab').forEach(tab => tab.classList.remove('active'));
    el.classList.add('active');
    renderOrdersList(status);
  }

  function renderOrdersList(status = 'all') {
    const list = document.getElementById('ordersList');
    const filtered = status === 'all' ? ordersData : ordersData.filter(o => o.status === status);
    
    if (filtered.length === 0) {
      list.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">馃搵</div>
          <div class="cart-empty-text">鏆傛棤璁㈠崟</div>
          <div class="cart-empty-hint">鍘诲競闆嗚喘涔板晢鍝佸惂</div>
        </div>
      `;
      return;
    }

    list.innerHTML = filtered.map(order => `
      <div class="order-card" onclick="openOrderDetail('${order.id}')">
        <div class="order-header">
          <span class="order-shop">${order.shop}</span>
          <span class="order-status ${order.status}">${order.statusText}</span>
        </div>
        <div class="order-items">
          ${order.items.map(item => `
            <div class="order-item">
              <div class="order-item-img">
                <img src="${getImageUrl(item.img)}" alt="${item.name}">
              </div>
              <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-spec">${item.spec}</div>
              </div>
              <div class="order-item-right">
                <div class="order-item-price">楼${item.price}</div>
                <div class="order-item-qty">x${item.qty}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="order-footer">
          <div class="order-total">鍏?{order.items.length}浠讹紝鍚堣锛?span class="order-total-price">楼${order.total}</span></div>
          <div class="order-actions">
            ${order.status === 'pending' ? '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); payOrder(\'' + order.id + '\')">绔嬪嵆鏀粯</button><button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); cancelOrder(\'' + order.id + '\')">鍙栨秷璁㈠崟</button>' : ''}
            ${order.status === 'paid' ? '<button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); remindShip(\'' + order.id + '\')">鎻愰啋鍙戣揣</button>' : ''}
            ${order.status === 'shipped' ? '<button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); confirmReceive(\'' + order.id + '\')">纭鏀惰揣</button><button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); viewLogistics(\'' + order.id + '\')">鏌ョ湅鐗╂祦</button>' : ''}
            ${order.status === 'completed' ? '<button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); buyAgain(\'' + order.id + '\')">鍐嶆璐拱</button>' : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  function openOrderDetail(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (!order) return;

    const content = document.getElementById('orderDetailContent');
    const footer = document.getElementById('orderDetailFooter');

    content.innerHTML = `
      <div class="order-detail-section">
        <div class="order-detail-title">璁㈠崟鐘舵€?/div>
        <div class="order-status-timeline">
          <div class="timeline-item ${order.status === 'pending' || order.status === 'paid' || order.status === 'shipped' || order.status === 'completed' ? 'active' : ''}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-title">鎻愪氦璁㈠崟</div>
              <div class="timeline-time">${order.createTime || order.date}</div>
            </div>
          </div>
          <div class="timeline-item ${order.status === 'paid' || order.status === 'shipped' || order.status === 'completed' ? 'active' : ''}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-title">浠樻鎴愬姛</div>
              <div class="timeline-time">${order.payTime || '寰呬粯娆?}</div>
            </div>
          </div>
          <div class="timeline-item ${order.status === 'shipped' || order.status === 'completed' ? 'active' : ''}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-title">鍟嗗搧鍙戣揣</div>
              <div class="timeline-time">${order.shipTime || '寰呭彂璐?}</div>
            </div>
          </div>
          <div class="timeline-item ${order.status === 'completed' ? 'active' : ''}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-title">纭鏀惰揣</div>
              <div class="timeline-time">${order.receiveTime || '寰呮敹璐?}</div>
            </div>
          </div>
        </div>
      </div>
      ${order.status === 'shipped' && order.expressNo ? `
      <div class="order-detail-section">
        <div class="order-detail-title">鐗╂祦淇℃伅</div>
        <div class="order-detail-row">
          <span class="order-detail-label">鐗╂祦鍏徃</span>
          <span class="order-detail-value">${order.expressCompany}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">鐗╂祦鍗曞彿</span>
          <span class="order-detail-value">${order.expressNo}</span>
        </div>
      </div>
      ` : ''}
      <div class="order-detail-section">
        <div class="order-detail-title">鏀惰揣淇℃伅</div>
        <div class="order-detail-row">
          <span class="order-detail-label">鏀惰揣浜?/span>
          <span class="order-detail-value">${order.receiver || '鐢ㄦ埛'}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">鑱旂郴鐢佃瘽</span>
          <span class="order-detail-value">${order.phone || ''}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">鏀惰揣鍦板潃</span>
          <span class="order-detail-value">${order.address || ''}</span>
        </div>
      </div>
      <div class="order-detail-section">
        <div class="order-detail-title">璁㈠崟淇℃伅</div>
        <div class="order-detail-row">
          <span class="order-detail-label">璁㈠崟缂栧彿</span>
          <span class="order-detail-value">${order.id}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">涓嬪崟鏃堕棿</span>
          <span class="order-detail-value">${order.createTime || order.date}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">搴楅摵</span>
          <span class="order-detail-value">${order.shop}</span>
        </div>
      </div>
      <div class="order-detail-section">
        <div class="order-detail-title">鍟嗗搧鍒楄〃</div>
        ${order.items.map(item => `
          <div class="order-item" style="margin-bottom: var(--spacing-2);">
            <div class="order-item-img">
              <img src="${getImageUrl(item.img)}" alt="${item.name}">
            </div>
            <div class="order-item-info">
              <div class="order-item-name">${item.name}</div>
              <div class="order-item-spec">${item.spec}</div>
            </div>
            <div class="order-item-right">
              <div class="order-item-price">楼${item.price}</div>
              <div class="order-item-qty">x${item.qty}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="order-detail-section">
        <div class="order-detail-title">閲戦鏄庣粏</div>
        <div class="order-detail-row">
          <span class="order-detail-label">鍟嗗搧鎬婚</span>
          <span class="order-detail-value">楼${order.total}</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">杩愯垂</span>
          <span class="order-detail-value">楼0</span>
        </div>
        <div class="order-detail-row">
          <span class="order-detail-label">瀹炰粯閲戦</span>
          <span class="order-detail-value" style="color: var(--color-primary-dark); font-weight: var(--font-weight-bold);">楼${order.total}</span>
        </div>
      </div>
      <div style="height: 80px;"></div>
    `;

    // 搴曢儴鎸夐挳閫昏緫
    let footerHtml = '';
    if (order.status === 'pending') {
      footerHtml = '<button class="btn btn-outline btn-lg" onclick="cancelOrder(\'' + order.id + '\')">鍙栨秷璁㈠崟</button><button class="btn btn-primary btn-lg" onclick="payOrder(\'' + order.id + '\')">绔嬪嵆鏀粯 楼' + order.total + '</button>';
    } else if (order.status === 'paid') {
      footerHtml = '<button class="btn btn-outline btn-lg" onclick="remindShip(\'' + order.id + '\')">鎻愰啋鍙戣揣</button>';
    } else if (order.status === 'shipped') {
      footerHtml = '<button class="btn btn-outline btn-lg" onclick="viewLogistics(\'' + order.id + '\')">鏌ョ湅鐗╂祦</button><button class="btn btn-primary btn-lg" onclick="confirmReceive(\'' + order.id + '\')">纭鏀惰揣</button>';
    } else if (order.status === 'completed') {
      footerHtml = '<button class="btn btn-primary btn-lg" onclick="buyAgain(\'' + order.id + '\')">鍐嶆璐拱</button>';
    }
    footer.innerHTML = footerHtml;

    switchTab('order-detail');
  }

  function payOrder(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (!order) return;
    
    const now = new Date();
    order.status = 'paid';
    order.statusText = '寰呭彂璐?;
    order.payTime = now.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-');
    
    showToast('鏀粯鎴愬姛锛佸晢瀹跺皢灏藉揩鍙戣揣');
    openOrderDetail(orderId);
  }

  function cancelOrder(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (!order) return;
    
    if (confirm('纭畾瑕佸彇娑堟璁㈠崟鍚楋紵')) {
      ordersData = ordersData.filter(o => o.id !== orderId);
      showToast('璁㈠崟宸插彇娑?);
      switchTab('orders');
    }
  }

  function remindShip(orderId) {
    showToast('宸叉彁閱掑晢瀹跺彂璐э紝璇疯€愬績绛夊緟');
  }

  function shipOrder(orderId) {
    // 妯℃嫙鍙戣揣鍔熻兘锛堢敤浜庢祴璇曪級
    const order = ordersData.find(o => o.id === orderId);
    if (!order) return;
    
    const now = new Date();
    order.status = 'shipped';
    order.statusText = '寰呮敹璐?;
    order.shipTime = now.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-');
    order.expressNo = 'SF' + Math.random().toString().slice(2, 12);
    order.expressCompany = '椤轰赴閫熻繍';
    
    showToast('鍟嗗宸插彂璐?);
    openOrderDetail(orderId);
  }

  function viewLogistics(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (!order) return;
    
    showToast('鐗╂祦淇℃伅锛? + order.expressCompany + ' ' + order.expressNo);
  }

  function confirmReceive(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (!order) return;
    
    if (confirm('纭畾宸叉敹鍒板晢鍝佸悧锛?)) {
      const now = new Date();
      order.status = 'completed';
      order.statusText = '宸插畬鎴?;
      order.receiveTime = now.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-');
      showToast('宸茬‘璁ゆ敹璐э紝鎰熻阿鎮ㄧ殑璐拱锛?);
      openOrderDetail(orderId);
    }
  }

  function buyAgain(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (!order) return;
    
    order.items.forEach(item => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img,
        spec: item.spec
      }, item.qty);
    });
    
    showToast('鍟嗗搧宸插姞鍏ヨ喘鐗╄溅');
    switchTab('cart');
  }

  function openCategoryPanel() {
    document.getElementById('category-panel').classList.add('show');
  }

  function closeCategoryPanel(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('category-panel').classList.remove('show');
  }

  function selectCategory(name) {
    closeCategoryPanel();
    showToast('宸查€夊搧绫伙細' + name);
    const search = document.getElementById('mallSearch');
    if (search) {
      search.value = name;
      search.focus();
    }
  }

  // ===== Favorites =====
  let favorites = [];
  let currentTemplateId = 'tpl_001';

  function toggleFavorite() {
    const btn = document.getElementById('detail-fav-btn');
    const idx = favorites.indexOf(currentTemplateId);
    if (idx > -1) {
      favorites.splice(idx, 1);
      if (btn) btn.classList.remove('favorited');
      showToast('宸插彇娑堟敹钘?);
    } else {
      favorites.push(currentTemplateId);
      if (btn) btn.classList.add('favorited');
      showToast('宸叉敹钘?);
    }
    updateFavCount();
    renderFavoritesList();
  }

  function updateFavCount() {
    const el = document.getElementById('profile-fav-count');
    if (el) el.textContent = 28 + favorites.length;
  }

  function renderFavoritesList() {
    const list = document.getElementById('favorites-list');
    if (!list) return;
    if (favorites.length === 0) {
      list.innerHTML = `
        <div class="favorites-empty">
          <div class="favorites-empty-icon">馃</div>
          <div class="favorites-empty-text">杩樻病鏈夋敹钘忓唴瀹瑰摝</div>
          <div class="favorites-empty-text" style="margin-top: 4px; font-size: 12px;">鍘诲彂鐜伴〉鐪嬬湅鍠滄鐨勫瀹瑰惂</div>
        </div>`;
      return;
    }
    const sampleCards = [
      { id: 'c002', img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20luxurious%20goddess%20makeup%2C%20golden%20shimmer%2C%20red%20lip%2C%20elegant%20fashion%20photography&image_size=portrait_4_3', title: '娴撻绯诲崈閲戝锝滈珮绾ф劅瀵屽鍗冮噾濡嗘暀绋?, badge: 'L2 绮鹃€?, badgeClass: 'l2', creator: '闃跨传鐨勭編瀛︽棩璁?, avatar: '闃?, price: '50 GP', h: 180 },
      { id: 'c003', img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20pure%20white%20water%20makeup%2C%20transparent%20skin%2C%20natural%20look%2C%20fresh%20beauty%20photography&image_size=portrait_4_3', title: '绾鐧藉紑姘村锝滀吉绱犻绁炲櫒 5鍒嗛挓鎼炲畾', badge: '鍏嶈垂', badgeClass: 'free', creator: '妗冨瓙杞硸', avatar: '妗?, price: '鍏嶈垂', h: 220 },
      { id: 'g001', img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20Tang%20Dynasty%20makeup%2C%20red%20eyeshadow%2C%20golden%20accessories%2C%20ancient%20beauty%20portrait&image_size=portrait_4_3', title: '澶у攼鐩涗笘濡嗭綔闈為仐鏂囧寲鍒涙剰濡嗗鍒嗕韩', badge: '鍥介', badgeClass: 'gufeng', creator: '鑺辫タ瀛?, avatar: '鍞?, price: '80 GP', h: 200 },
      { id: 't002', img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Asian%20woman%20single%20eyelid%20eyeshadow%20tutorial%2C%20earth%20tone%2C%20makeup%20education%2C%20beauty%20photography&image_size=portrait_4_3', title: '鍗曠溂鐨秷鑲跨溂褰卞叕寮忥綔鏂版墜涔熻兘鐢诲ソ', badge: 'L3 澶у笀', badgeClass: 'l3', creator: '鐪煎鐮旂┒鎵€', avatar: '鐪?, price: '60 GP', h: 210 }
    ];
    list.innerHTML = favorites.map((fid, i) => {
      const card = sampleCards[i % sampleCards.length];
      return `
        <div class="waterfall-card" onclick="openTemplateDetail('${card.id}')">
          <div class="waterfall-card-img" style="height: ${card.h}px;">
            <img src="${card.img}" alt="${card.title}">
            <span class="waterfall-badge ${card.badgeClass}">${card.badge}</span>
          </div>
          <div class="waterfall-card-info">
            <div class="waterfall-card-title">${card.title}</div>
            <div class="waterfall-card-bottom">
              <div class="waterfall-card-creator">
                <div class="waterfall-creator-avatar">${card.avatar}</div>
                <span class="waterfall-creator-name">${card.creator}</span>
              </div>
              <span class="waterfall-card-price">${card.price}</span>
            </div>
          </div>
        </div>`;
    }).join('');
  }

  // ===== Share =====
  function openShareModal() {
    document.getElementById('share-modal').classList.add('show');
  }

  function closeShareModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('share-modal').classList.remove('show');
  }

  function doShare(platform) {
    closeShareModal();
    
    var shareUrl = encodeURIComponent(window.location.href);
    var shareTitle = encodeURIComponent('姊靛Ξ缇庡 - 鍙戠幇涓撳睘浣犵殑缇?);
    var shareDesc = encodeURIComponent('AI楠ㄧ浉璇嗗埆锛屼负浣犲畾鍒朵笓灞炲瀹癸紝鍗冧汉鍗冮潰涓嶆挒鑴?);
    
    switch(platform) {
      case '鎶栭煶':
        window.open('https://www.douyin.com/share/video?url=' + shareUrl + '&title=' + shareTitle, '_blank');
        showToast('姝ｅ湪鎵撳紑鎶栭煶鍒嗕韩...');
        break;
      case '灏忕孩涔?:
        window.open('https://www.xiaohongshu.com/share?source=web&url=' + shareUrl + '&title=' + shareTitle, '_blank');
        showToast('姝ｅ湪鎵撳紑灏忕孩涔﹀垎浜?..');
        break;
      case '寰俊':
        if (navigator.share) {
          navigator.share({
            title: '姊靛Ξ缇庡 - 鍙戠幇涓撳睘浣犵殑缇?,
            text: 'AI楠ㄧ浉璇嗗埆锛屼负浣犲畾鍒朵笓灞炲瀹癸紝鍗冧汉鍗冮潰涓嶆挒鑴?,
            url: window.location.href
          }).then(function() {
            showToast('鍒嗕韩鎴愬姛');
          }).catch(function(err) {
            copyToClipboard(shareUrl);
          });
        } else {
          copyToClipboard(shareUrl);
          showToast('閾炬帴宸插鍒讹紝璇峰湪寰俊涓矘璐村垎浜?);
        }
        break;
      case '鏈嬪弸鍦?:
        if (navigator.share) {
          navigator.share({
            title: '姊靛Ξ缇庡 - 鍙戠幇涓撳睘浣犵殑缇?,
            text: 'AI楠ㄧ浉璇嗗埆锛屼负浣犲畾鍒朵笓灞炲瀹癸紝鍗冧汉鍗冮潰涓嶆挒鑴?,
            url: window.location.href
          }).then(function() {
            showToast('鍒嗕韩鎴愬姛');
          }).catch(function(err) {
            copyToClipboard(shareUrl);
          });
        } else {
          copyToClipboard(shareUrl);
          showToast('閾炬帴宸插鍒讹紝璇峰湪寰俊鏈嬪弸鍦堢矘璐村垎浜?);
        }
        break;
      case '寰崥':
        var weiboUrl = 'https://service.weibo.com/share/share.php?url=' + shareUrl + '&title=' + shareTitle + '&pic=' + shareUrl + '&appkey=';
        window.open(weiboUrl, '_blank', 'width=550,height=450');
        showToast('姝ｅ湪鎵撳紑寰崥鍒嗕韩...');
        break;
      case 'QQ':
        var qqUrl = 'https://connect.qq.com/widget/shareqq/index.html?url=' + shareUrl + '&title=' + shareTitle + '&desc=' + shareDesc;
        window.open(qqUrl, '_blank', 'width=550,height=450');
        showToast('姝ｅ湪鎵撳紑QQ鍒嗕韩...');
        break;
      case '澶嶅埗閾炬帴':
        copyToClipboard(window.location.href);
        break;
      case '淇濆瓨鍥剧墖':
        saveShareImage();
        break;
      default:
        showToast('宸插垎浜埌' + platform);
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function() {
        showToast('閾炬帴宸插鍒跺埌鍓创鏉?);
      }).catch(function() {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('閾炬帴宸插鍒跺埌鍓创鏉?);
    } catch (err) {
      showToast('澶嶅埗澶辫触锛岃鎵嬪姩澶嶅埗');
    }
    document.body.removeChild(textArea);
  }

  function saveShareImage() {
    showToast('姝ｅ湪鐢熸垚鍒嗕韩鍥剧墖...');
    setTimeout(function() {
      showToast('鍥剧墖宸蹭繚瀛樺埌鐩稿唽');
    }, 1500);
  }

  // ===== Upload Page Functions =====
  var uploadType = 'image';
  
  function setUploadType(type) {
    uploadType = type;
    document.querySelectorAll('.upload-tab').forEach(function(tab) {
      tab.classList.remove('active');
      if (tab.getAttribute('data-type') === type) {
        tab.classList.add('active');
      }
    });
  }
  
  function triggerUpload() {
    showToast('璇烽€夋嫨鏂囦欢涓婁紶');
  }
  
  function removeUpload() {
    document.getElementById('uploadPreview').style.display = 'none';
    showToast('宸茬Щ闄ょ礌鏉?);
  }
  
  function startAIGeneration() {
    var progressEl = document.getElementById('aiProgress');
    var resultEl = document.getElementById('aiResultPreview');
    
    progressEl.style.display = 'block';
    resultEl.style.display = 'none';
    
    showToast('AI鏅鸿兘鎷嗚В宸插惎鍔?);
    
    var progressText = progressEl.querySelector('.progress-text');
    var stages = ['姝ｅ湪鍒嗘瀽绱犳潗...', '璇嗗埆濡嗗姝ラ...', '鐢熸垚鍔ㄦ晥鎷嗚В...', '娑﹁壊鏂囨鍐呭...', '瀹屾垚锛?];
    var stageIndex = 0;
    
    var interval = setInterval(function() {
      stageIndex++;
      if (stageIndex < stages.length) {
        progressText.textContent = stages[stageIndex];
      }
      if (stageIndex >= stages.length - 1) {
        clearInterval(interval);
        setTimeout(function() {
          progressEl.style.display = 'none';
          resultEl.style.display = 'block';
          showToast('AI鎷嗚В瀹屾垚锛岃棰勮璋冩暣');
        }, 500);
      }
    }, 800);
  }
  
  function editAIResult() {
    showToast('杩涘叆缂栬緫妯″紡');
  }
  
  function setPrice(price) {
    var input = document.querySelector('.price-input');
    if (input) {
      input.value = price;
    }
    document.querySelectorAll('.range-item').forEach(function(item) {
      item.classList.remove('active');
    });
    var priceClass = price === 0 ? 'free' : price <= 30 ? 'low' : price <= 50 ? 'mid' : 'high';
    document.querySelector('.range-item.' + priceClass).classList.add('active');
    showToast('宸茶缃环鏍间负 ' + (price === 0 ? '鍏嶈垂' : price + ' GP'));
  }
  
  function toggleTag(el) {
    el.classList.toggle('active');
    var activeTags = document.querySelectorAll('.tag-option.active').length;
    var countEl = document.querySelector('.tag-count');
    if (countEl) {
      countEl.textContent = '宸查€?' + activeTags + '/5';
    }
    if (activeTags > 5) {
      el.classList.remove('active');
      showToast('鏈€澶氶€夋嫨5涓爣绛?);
    }
  }
  
  function openGoodsPicker() {
    document.getElementById('goodsEmpty').style.display = 'none';
    document.getElementById('goodsList').style.display = 'flex';
    showToast('宸叉坊鍔犲晢鍝佸叧鑱?);
  }
  
  function removeGoods(el) {
    el.parentElement.remove();
    var goodsList = document.getElementById('goodsList');
    if (goodsList.children.length === 0) {
      goodsList.style.display = 'none';
      document.getElementById('goodsEmpty').style.display = 'block';
    }
    showToast('宸茬Щ闄ゅ晢鍝佸叧鑱?);
  }
  
  function publishWork() {
    var btn = document.querySelector('.publish-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg> 鍙戝竷涓?..';
      btn.style.opacity = '0.8';
      btn.style.cursor = 'not-allowed';
    }
    
    setTimeout(function() {
      showToast('馃帀 浣滃搧鍙戝竷鎴愬姛锛?);
    }, 800);
    
    setTimeout(function() {
      showToast('鈴?姝ｅ湪瀹℃牳涓紝棰勮10鍒嗛挓鍐呭畬鎴?);
    }, 1800);
    
    setTimeout(function() {
      showToast('馃摙 瀹℃牳閫氳繃鍚庡皢鍦ㄩ搴撳睍绀?);
    }, 2800);
    
    setTimeout(function() {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg> 绔嬪嵆鍙戝竷浣滃搧';
        btn.style.opacity = '1';
        btn.style.cursor = 'pointer';
      }
      switchTab('creator');
    }, 3500);
  }

  // ===== Modals =====
  function openIngredientScan() {
    document.getElementById('ingredient-scan-modal').classList.add('show');
  }
  function closeIngredientScan() {
    document.getElementById('ingredient-scan-modal').classList.remove('show');
  }

  // Scan Mode Switch
  var currentScanMode = 'camera';
  function switchScanMode(mode, evt) {
    currentScanMode = mode;
    document.querySelectorAll('.scan-mode-tab').forEach(function(tab) {
      tab.classList.remove('active');
    });
    if (evt && evt.target) {
      evt.target.classList.add('active');
    }

    document.getElementById('scanMode-camera').style.display = mode === 'camera' ? 'flex' : 'none';
    document.getElementById('scanMode-album').style.display = mode === 'album' ? 'flex' : 'none';
    document.getElementById('scanMode-manual').style.display = mode === 'manual' ? 'block' : 'none';
  }
  
  function selectFromAlbum() {
    showToast('璇蜂粠鐩稿唽閫夋嫨鍥剧墖');
  }
  
  function searchManualInput() {
    var input = document.getElementById('manualScanInput').value;
    if (input) {
      startIngredientScan();
    } else {
      showToast('璇疯緭鍏ヤ骇鍝佸悕绉?);
    }
  }
  
  function quickSearch(keyword) {
    document.getElementById('manualScanInput').value = keyword;
    showToast('宸插～鍏? ' + keyword);
  }

  let ingredientScanAnimating = false;
  function startIngredientScan() {
    if (ingredientScanAnimating) return;
    ingredientScanAnimating = true;
    showToast('姝ｅ湪璇嗗埆鎴愬垎...');
    setTimeout(() => {
      ingredientScanAnimating = false;
      closeIngredientScan();
      showScanResult();
      gpBalance += 30;
      updateGpDisplay();
      showToast('鎵弿瀹屾垚 +30 GP');
    }, 2000);
  }

  function openGpCenter() {
    document.getElementById('gp-center-modal').classList.add('show');
  }
  function closeGpCenter() {
    document.getElementById('gp-center-modal').classList.remove('show');
  }

  function openTemplateDetail(templateId) {
    const template = findTemplateById(templateId);
    if (template) {
      renderTemplateDetail(template);
    }
    updateTemplateActionBtn(templateId);
    document.getElementById('template-detail-modal').classList.add('show');
  }

  function findTemplateById(id) {
    const feed = MakeupPalData.libraryFeed;
    const allTemplates = [
      ...feed.creators,
      ...feed.tutorials,
      ...feed.qa,
      ...feed.guofeng,
      ...feed.silver,
      ...feed.brands,
      ...feed.celebrities
    ];
    return allTemplates.find(t => t.id === id);
  }

  function renderTemplateDetail(template) {
    const hero = document.querySelector('.template-detail-hero');
    const coverKey = template.coverImage || template.cover || '';
    const coverUrl = coverKey ? getImageUrl(coverKey) : '';
    
    hero.style.background = coverUrl 
      ? `url(${coverUrl}) center/cover no-repeat` 
      : 'linear-gradient(135deg, #E8D5C4, #C4956A)';
    
    hero.innerHTML = `
      ${coverUrl ? '' : '<span style="font-size: 80px;">馃拕</span>'}
      <div class="template-detail-back" onclick="closeTemplateDetail()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </div>
      <div class="template-detail-actions">
        <div class="template-detail-action-btn" id="detail-fav-btn" onclick="toggleFavorite()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <div class="template-detail-action-btn" onclick="openShareModal()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </div>
      </div>
      ${template.tag ? `<span class="template-badge-corner">${template.tag}</span>` : ''}
    `;

    const title = template.title || template.question || '';
    const creator = template.creatorName || template.authorName || template.brandName || template.celebrityName || '';
    const likes = template.likes || 0;
    const views = template.viewCount || template.collections || 0;
    
    document.querySelector('.template-detail-title').textContent = title;
    document.querySelector('.template-creator-name').textContent = creator;
    
    const statNums = document.querySelectorAll('.template-stat-num');
    statNums[0].textContent = (4.5 + Math.random() * 0.5).toFixed(1);
    statNums[1].textContent = fmtNum(views);
    statNums[2].textContent = Math.floor(Math.random() * 8) + 6;
    statNums[3].textContent = Math.floor(Math.random() * 15) + 5 + 'min';
    
    const desc = template.summary || template.effect || template.category || '';
    document.querySelector('.template-desc').textContent = desc || '鏆傛棤璇︾粏鎻忚堪';
  }
  function closeTemplateDetail() {
    document.getElementById('template-detail-modal').classList.remove('show');
  }

  let currentStep = 4;
  let completedSteps = [1, 2, 3];

  const stepDetails = {
    1: {
      title: '鎵撳簳濡?,
      desc: '<strong>绗?姝?路 鎵撳簳濡?/strong><br>1. <strong>濡嗗墠涔?/strong>锛氬彇閫傞噺濡嗗墠涔冲潎鍖€娑傛姽鍏ㄨ劯锛屽钩婊戣倢鑲ょ汗鐞?br>2. <strong>绮夊簳娑?/strong>锛氫娇鐢ㄧ矇搴曞埛鎴栫編濡嗚泲锛屼粠T鍖哄悜澶栬交杞绘媿鎵?br>3. <strong>閬憰</strong>锛氶拡瀵归粦鐪煎湀銆佺棙鍗扮瓑鐟曠柕杩涜灞€閮ㄩ伄鐟?br>4. <strong>鍧囧寑鑲よ壊</strong>锛氱‘淇濆叏鑴歌偆鑹插潎鍖€锛屾棤鏄庢樉鍒嗙晫绾?,
      motionId: 'motion-step-1'
    },
    2: {
      title: '瀹氬',
      desc: '<strong>绗?姝?路 瀹氬</strong><br>1. <strong>T鍖哄畾濡?/strong>锛氱敤鏁ｇ矇鎵戦噸鐐规寜鍘嬮澶淬€侀蓟瀛愩€佷笅宸?br>2. <strong>榧荤考涓や晶</strong>锛氱粏鑷村畾濡嗭紝闃叉鑴卞<br>3. <strong>鐪间笅鍖哄煙</strong>锛氱敤鏁ｇ矇鍒疯交杞绘壂杩囷紝闃叉鍗＄矇<br>4. <strong>鍏ㄨ劯杞绘壂</strong>锛氱敤澶у彿鏁ｇ矇鍒峰叏鑴歌交鎵竴閬?,
      motionId: 'motion-step-2'
    },
    3: {
      title: '鐢荤湁',
      desc: '<strong>绗?姝?路 鐢荤湁</strong><br>1. <strong>纭畾鐪夊舰</strong>锛氭牴鎹劯鍨嬬‘瀹氱湁澶淬€佺湁宄般€佺湁灏句綅缃?br>2. <strong>濉厖鐪夊ご</strong>锛氱敤鐪夌瑪杞昏交鐐规秱锛岃惀閫犳瘺娴佹劅<br>3. <strong>濉厖鐪夎韩</strong>锛氶『鐫€鐪夊舰濉厖锛屼繚鎸佽嚜鐒惰繃娓?br>4. <strong>姊崇悊鐪夋瘺</strong>锛氱敤鐪夊埛姊崇悊鐪夋瘺锛屼娇棰滆壊鍧囧寑',
      motionId: 'motion-step-3'
    },
    4: {
      title: '鐢荤溂褰?,
      desc: '<strong>绗?姝?路 鐢荤溂褰?/strong><br>1. <strong>鎵撳簳鑹?/strong>锛氫娇鐢ㄦ祬绫宠壊浠庣潾姣涙牴閮ㄥ悜涓婃檿鏌撹嚦鐪肩獫澶?br>2. <strong>涓昏壊璋?/strong>锛氬彇铚滄鑹茬溂褰憋紝閲嶇偣娑傛姽鍦ㄥ弻鐪肩毊瑜剁毐鍐?br>3. <strong>鍔犳繁鐪煎熬</strong>锛氱敤娣辨鑹茬溂褰卞湪鐪煎熬涓夎鍖哄姞娣?br>4. <strong>鎻愪寒</strong>锛氬湪鐪肩毊涓ぎ鍜屽崸铓曞鐐规秱鐝犲厜鐧借壊',
      motionId: 'motion-step-4'
    },
    5: {
      title: '鐢荤溂绾?,
      desc: '<strong>绗?姝?路 鐢荤溂绾?/strong><br>1. <strong>瀹氫綅</strong>锛氫粠鐪间腑寮€濮嬶紝娌跨潃鐫瘺鏍归儴鍚戠溂灏炬弿缁?br>2. <strong>濉厖</strong>锛氬～琛ョ潾姣涢棿鐨勭┖闅欙紝浣跨溂绾挎洿瀹屾暣<br>3. <strong>鐪煎熬涓婃壃</strong>锛氱溂灏惧井寰笂鎵害5-10搴?br>4. <strong>鍐呯溂绾?/strong>锛氱敤缁嗗ご鐪肩嚎绗斿～鍏呭唴鐪肩嚎锛屾斁澶х溂鐫?,
      motionId: 'motion-step-5'
    },
    6: {
      title: '娑傜潾姣涜啅',
      desc: '<strong>绗?姝?路 娑傜潾姣涜啅</strong><br>1. <strong>澶圭潾姣?/strong>锛氱敤鐫瘺澶瑰皢鐫瘺澶圭繕<br>2. <strong>鏍归儴鎵撳簳</strong>锛氫粠鏍归儴寮€濮嬶紝Z瀛楀瀷鍚戜笂鍒?br>3. <strong>涓</strong>锛氱户缁璟瀛楀瀷鍒锋硶锛屽鍔犵潾姣涢暱搴?br>4. <strong>鐫瘺灏?/strong>锛氳交杞诲埛杩囩潾姣涘皷锛屼娇鐫瘺鏇寸氦闀?,
      motionId: 'motion-step-6'
    },
    7: {
      title: '鐢昏叜绾?,
      desc: '<strong>绗?姝?路 鐢昏叜绾?/strong><br>1. <strong>寰瑧瀹氫綅</strong>锛氬井绗戞壘鍒扮瑧鑲屼綅缃?br>2. <strong>鎵撳湀娑傛姽</strong>锛氱敤鑵孩鍒峰湪绗戣倢澶勬墦鍦堟壂娑?br>3. <strong>鍚戜笂鏅曟煋</strong>锛氬悜鏂滀笂鏂规檿鏌撹嚦澶槼绌翠綅缃?br>4. <strong>杩囨浮鑷劧</strong>锛氱‘淇濅笌绮夊簳杈圭晫鑷劧杩囨浮',
      motionId: 'motion-step-7'
    },
    8: {
      title: '淇',
      desc: '<strong>绗?姝?路 淇</strong><br>1. <strong>棰ч涓嬫柟</strong>锛氫粠棰ч涓嬫柟鏂滃悜鍒疯嚦涓嬮瑙?br>2. <strong>涓嬮绾?/strong>锛氭部涓嬮绾胯交杞绘壂娑?br>3. <strong>榧绘涓や晶</strong>锛氬湪榧绘涓や晶杞昏交淇<br>4. <strong>杩囨浮鍧囧寑</strong>锛氱敤骞插噣鍒峰瓙灏嗕慨瀹硅繃娓″潎鍖€',
      motionId: 'motion-step-8'
    },
    9: {
      title: '娑傚彛绾?,
      desc: '<strong>绗?姝?路 娑傚彛绾?/strong><br>1. <strong>鍕惧嫆鍞囩嚎</strong>锛氱敤鍞囩嚎绗斿嬀鍕掑槾鍞囪疆寤?br>2. <strong>濉厖鍞囪壊</strong>锛氱敤鍙ｇ孩鎴栧攪閲夊～鍏呭槾鍞?br>3. <strong>鏅曟煋杈圭紭</strong>锛氱敤鎵嬫寚杞昏交鏅曟煋鍢村攪杈圭紭<br>4. <strong>琛ヨ壊</strong>锛氭鏌ュ苟琛ユ秱涓嶅潎鍖€鐨勫湴鏂?,
      motionId: 'motion-step-9'
    },
    10: {
      title: '楂樺厜鎻愪寒',
      desc: '<strong>绗?0姝?路 楂樺厜鎻愪寒</strong><br>1. <strong>榧绘</strong>锛氬湪榧绘涓ぎ娑傛姽楂樺厜<br>2. <strong>鐪夐</strong>锛氬湪鐪夐浣嶇疆杞昏交鎻愪寒<br>3. <strong>棰ч</strong>锛氬湪棰ч鏈€楂樼偣娑傛姽楂樺厜<br>4. <strong>鍞囧嘲</strong>锛氬湪鍞囧嘲澶勮交杞荤偣娑?,
      motionId: 'motion-step-10'
    }
  };

  function showStepDetail(stepNum) {
    const detail = stepDetails[stepNum];
    if (!detail) return;

    document.querySelectorAll('.tutorial-motion-highlight').forEach(el => {
      el.classList.remove('active');
    });

    const motionEl = document.getElementById(detail.motionId);
    if (motionEl) {
      motionEl.classList.add('active');
    }

    document.getElementById('currentStepName').textContent = '褰撳墠锛? + detail.title;
    document.getElementById('stepDesc').innerHTML = detail.desc;

    document.querySelectorAll('.tutorial-item').forEach((el, index) => {
      el.classList.remove('active');
    });

    currentStep = stepNum;
  }

  function completeStep(stepNum) {
    if (completedSteps.includes(stepNum)) return;

    completedSteps.push(stepNum);
    completedSteps.sort((a, b) => a - b);

    const itemEl = document.querySelectorAll('.tutorial-item')[stepNum - 1];
    if (itemEl) {
      itemEl.classList.remove('active');
      itemEl.classList.add('done');

      const btn = itemEl.querySelector('.tutorial-check-btn');
      if (btn) {
        btn.classList.remove('active');
        btn.classList.add('completed');
        btn.disabled = true;
        btn.textContent = '鉁?瀹屾垚';
      }

      const numEl = itemEl.querySelector('.step-num');
      if (numEl) {
        numEl.textContent = '鉁?;
      }
    }

    const nextStepNum = stepNum + 1;
    if (nextStepNum <= 10) {
      const nextItem = document.querySelectorAll('.tutorial-item')[nextStepNum - 1];
      if (nextItem) {
        nextItem.classList.add('active');
        const nextBtn = nextItem.querySelector('.tutorial-check-btn');
        if (nextBtn) {
          nextBtn.classList.remove('disabled');
          nextBtn.classList.add('active');
          nextBtn.disabled = false;
          nextBtn.onclick = (e) => {
            e.stopPropagation();
            completeStep(nextStepNum);
          };
        }
        showStepDetail(nextStepNum);
      }
    }

    updateProgress();

    if (completedSteps.length === 10) {
      showToast('馃帀 鎭枩锛佸瀹规暀绋嬪叏閮ㄥ畬鎴愶紒');
    } else {
      showToast(`鉁?绗?{stepNum}姝ュ畬鎴愶紝缁х画鍔犳补锛乣);
    }
  }

  function updateProgress() {
    const progress = completedSteps.length;
    const percentage = (progress / 10) * 100;

    const badge = document.getElementById('stepProgressBadge');
    if (badge) {
      badge.textContent = `${progress} / 10 姝;
    }

    const fill = document.getElementById('stepProgressFill');
    if (fill) {
      fill.style.width = `${percentage}%`;
    }
  }

  function unlockTemplate() {
    if (gpBalance < 50) {
      showToast('GP 涓嶈冻锛屽揩鍘诲厖鍊煎惂');
      closeTemplateDetail();
      openRechargeModal();
      return;
    }
    gpBalance -= 50;
    updateGpDisplay();
    showToast('瑙ｉ攣鎴愬姛锛佹鍦ㄨ烦杞瘯濡?..');
    setTimeout(() => {
      closeTemplateDetail();
      switchTab('mirror');
    }, 1000);
  }

  let currentTemplateId = '';
  const purchasedTemplates = ['f001', 'f002'];
  const favoritedTemplates = ['f001', 'f003'];

  function followMakeup(templateId) {
    console.log('followMakeup called with templateId:', templateId);
    showToast('姝ｅ湪鍔犺浇濡嗗妯℃澘...');
    setTimeout(() => {
      closeTemplateDetail();
      switchTab('mirror');
      showToast('宸茶繘鍏ョ剷鏂扮晫闈紝寮€濮嬪寲濡嗗惂锛?);
    }, 800);
  }

  function handleTemplateAction(e) {
    console.log('handleTemplateAction called, e:', e);
    if (e) e.stopPropagation();
    console.log('currentTemplateId:', currentTemplateId);
    console.log('purchasedTemplates:', purchasedTemplates);
    const isPurchased = purchasedTemplates.includes(currentTemplateId);
    console.log('isPurchased:', isPurchased);
    if (isPurchased) {
      followMakeup(currentTemplateId);
    } else {
      unlockTemplate();
    }
  }

  function updateTemplateActionBtn(templateId) {
    currentTemplateId = templateId;
    const isPurchased = purchasedTemplates.includes(templateId);
    const isFavorited = favoritedTemplates.includes(templateId);
    const btn = document.getElementById('template-action-btn');
    const price = document.getElementById('template-footer-price');

    if (isPurchased) {
      btn.textContent = '璺熺潃鍖栧';
      btn.style.background = 'linear-gradient(135deg, #D4A574, #C4956A)';
      btn.style.boxShadow = '0 4px 12px rgba(196, 149, 106, 0.4)';
      price.style.display = 'none';
    } else {
      btn.textContent = '绔嬪嵆瑙ｉ攣';
      btn.style.background = 'linear-gradient(135deg, #E8D5C4, #C4956A)';
      btn.style.boxShadow = '0 4px 12px rgba(200, 150, 100, 0.3)';
      price.style.display = 'flex';
    }

    const favBtn = document.getElementById('detail-fav-btn');
    if (isFavorited) {
      favBtn.classList.add('favorited');
    } else {
      favBtn.classList.remove('favorited');
    }
  }

  function openTrendingModal() {
    document.getElementById('trending-modal').classList.add('show');
  }
  function closeTrendingModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('trending-modal').classList.remove('show');
  }

  function openRechargeModal() {
    document.getElementById('recharge-modal').classList.add('show');
  }
  function closeRechargeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('recharge-modal').classList.remove('show');
  }

  function selectRecharge(el, amount) {
    selectedRecharge = amount;
    document.querySelectorAll('.recharge-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
  }

  function doRecharge() {
    gpBalance += selectedRecharge;
    updateGpDisplay();
    closeRechargeModal();
    showToast('鍏呭€兼垚鍔燂紒+' + selectedRecharge + ' GP');
  }

  // ===== Scan Result Modal (existing) =====
  let scanAnimating = false;
  function startScan() {
    if (scanAnimating) return;
    scanAnimating = true;
    const camera = document.getElementById('scanCamera');
    if (camera) camera.classList.add('scanning');
    showToast('姝ｅ湪璇嗗埆鎴愬垎...');

    setTimeout(() => {
      if (camera) camera.classList.remove('scanning');
      scanAnimating = false;
      showScanResult();
    }, 1800);
  }

  function showScanResult() {
    document.getElementById('scan-modal').classList.add('show');
  }

  function closeScanModal(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('scan-modal').classList.remove('show');
  }

  // ===== Face Auth Onboarding =====
  let faceAuthStep = 0;
  let faSelectedNeed = '';
  let faAgreed = false;
  let faSelectedSource = '';

  function showFaceAuth() {
    const fa = document.getElementById('face-auth-overlay');
    if (fa) fa.classList.add('show');
    faceAuthStep = 0;
    faSelectedNeed = '';
    faAgreed = false;
    faSelectedSource = '';
    updateFaceAuthStep();
  }

  function hideFaceAuth() {
    const fa = document.getElementById('face-auth-overlay');
    if (fa) fa.classList.remove('show');
  }

  function updateFaceAuthStep() {
    const steps = document.querySelectorAll('.face-auth-step');
    steps.forEach((s, i) => {
      s.classList.toggle('active', i === faceAuthStep);
    });
    const progressBar = document.getElementById('face-auth-progress-bar');
    if (progressBar) {
      const progress = ((faceAuthStep + 1) / 4) * 100;
      progressBar.style.width = progress + '%';
    }
  }

  function faNextStep() {
    if (faceAuthStep < 3) {
      faceAuthStep++;
      updateFaceAuthStep();
    }
  }

  function faPrevStep() {
    if (faceAuthStep > 0) {
      faceAuthStep--;
      updateFaceAuthStep();
    }
  }

  function faPickNeed(el, need) {
    faSelectedNeed = need;
    document.querySelectorAll('.fa-need-item').forEach(item => item.classList.remove('selected'));
    el.classList.add('selected');
    const nextBtn = document.getElementById('fa-step1-next');
    if (nextBtn) nextBtn.disabled = false;
  }

  function faToggleAgree() {
    const checkbox = document.getElementById('fa-agree-checkbox');
    if (checkbox) {
      faAgreed = !checkbox.checked;
      checkbox.checked = faAgreed;
    } else {
      faAgreed = !faAgreed;
    }
    const nextBtn = document.getElementById('fa-step2-next');
    if (nextBtn) nextBtn.disabled = !faAgreed;
  }

  function faPickSource(el, source) {
    faSelectedSource = source;
    document.querySelectorAll('.fa-source-item').forEach(item => item.classList.remove('selected'));
    el.classList.add('selected');
    setTimeout(() => {
      faFinishAuth();
    }, 300);
  }

  function faFinishAuth() {
    try {
      localStorage.setItem('faceAuthDone', 'true');
      localStorage.setItem('faSelectedNeed', faSelectedNeed);
      localStorage.setItem('faAgreed', faAgreed ? 'true' : 'false');
      localStorage.setItem('faSelectedSource', faSelectedSource);
    } catch (e) {}
    hideFaceAuth();
    showOnboarding();
  }

  // 鍙湪鎺у埗鍙扮洿鎺ヨ皟鐢ㄧ殑閲嶇疆鍑芥暟
  function resetFaceAuthFlow() {
    try {
      localStorage.removeItem('faceAuthDone');
      localStorage.removeItem('faSelectedNeed');
      localStorage.removeItem('faAgreed');
      localStorage.removeItem('faSelectedSource');
    } catch (e) {}
    showFaceAuth();
  }

  function initFaceAuth() {
    try {
      const done = localStorage.getItem('faceAuthDone');
      if (done === 'true') {
        return false;
      }
    } catch (e) {}
    showFaceAuth();
    return true;
  }

  // ===== Onboarding =====
  let obSelectedSkin = '';
  let obSelectedStyles = [];
  let obScanning = false;

  function showOnboarding() {
    const ob = document.getElementById('onboarding-overlay');
    if (ob) ob.classList.add('show');
    onboardingStep = 0;
    obSelectedSkin = '';
    obSelectedStyles = [];
    obScanning = false;
    updateOnboardingStep();
    console.log('Onboarding shown, step 0');
  }

  function goToNextStep() {
    console.log('goToNextStep called, current step:', onboardingStep);
    if (onboardingStep < 4) {
      onboardingStep++;
      updateOnboardingStep();
    } else {
      finishOnboarding();
    }
  }

  function goToPrevStep() {
    console.log('goToPrevStep called, current step:', onboardingStep);
    if (onboardingStep > 0) {
      onboardingStep--;
      updateOnboardingStep();
    }
  }

  function skipOnboarding() {
    console.log('skipOnboarding called');
    finishOnboarding();
  }

  function updateOnboardingStep() {
    const steps = document.querySelectorAll('.onboarding-step');
    steps.forEach((s, i) => {
      s.classList.toggle('active', i === onboardingStep);
    });
    const dots = document.querySelectorAll('.onboarding-dots span');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === onboardingStep);
    });
    console.log('updateOnboardingStep done, step =', onboardingStep);
  }

  function pickSkinType(el, type) {
    obSelectedSkin = type;
    document.querySelectorAll('.ob-skin-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    const nextBtn = document.getElementById('ob-step1-next');
    if (nextBtn) nextBtn.disabled = false;
    console.log('Skin selected:', type);
  }

  function startObFaceScan() {
    if (obScanning) return;
    obScanning = true;
    const ring = document.querySelector('.ob-scan-ring');
    const status = document.getElementById('ob-scan-status');
    const btn = document.getElementById('ob-scan-btn');

    if (ring) ring.classList.add('scanning');
    if (status) {
      status.textContent = 'AI 鍒嗘瀽涓?..';
      status.classList.add('scanning');
    }
    if (btn) btn.disabled = true;

    console.log('Face scan started');

    setTimeout(() => {
      if (ring) ring.classList.remove('scanning');
      if (status) {
        status.textContent = '鎵弿瀹屾垚锛?;
        status.classList.remove('scanning');
        status.classList.add('done');
      }
      obScanning = false;
      console.log('Face scan done, going to next step');
      setTimeout(() => {
        goToNextStep();
      }, 500);
    }, 2000);
  }

  function toggleObStyle(el, style) {
    const idx = obSelectedStyles.indexOf(style);
    if (idx > -1) {
      obSelectedStyles.splice(idx, 1);
      el.classList.remove('selected');
    } else {
      obSelectedStyles.push(style);
      el.classList.add('selected');
    }
    console.log('Style toggled:', style, 'selected:', obSelectedStyles);
  }

  function finishOnboarding() {
    console.log('finishOnboarding called');
    gpBalance += 100;
    updateGpDisplay();
    const ob = document.getElementById('onboarding-overlay');
    if (ob) ob.classList.remove('show');
    showToast('娆㈣繋鍔犲叆濡嗕即锛?100 GP');
  }


  // ===== 鍏ㄥ眬鏁版嵁璁块棶 (鍩轰簬 MakeupPalData) =====
  function getHotRankingData() {
    return MakeupPalData.hotRanking || [];
  }
  function getBannerData() {
    return MakeupPalData.banners || [];
  }
  function getDailyTasksData() {
    return MakeupPalData.dailyTasks || [];
  }
  function getAchievementsData() {
    return MakeupPalData.achievements || [];
  }
  function getLevelsData() {
    return MakeupPalData.levels || [];
  }
  function getSkinProfileData() {
    return MakeupPalData.skinProfile || {};
  }
  function getOnboardingStepsData() {
    return MakeupPalData.onboardingSteps || [];
  }
  function getIngredientScanData() {
    return MakeupPalData.ingredientScanResults || [];
  }
  function getLocalProblemsData() {
    return MakeupPalData.localProblems || [];
  }

  // ===== Event Listeners =====
  document.querySelectorAll('.mall-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.mall-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Hero Banner Carousel
  var currentSlide = 0;
  var totalSlides = 4;
  var slideInterval;

  function goToSlide(index) {
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.hero-dots span');
    if (!slides.length || !dots.length) return;
    slides.forEach(function(s) { s.classList.remove('active'); });
    dots.forEach(function(d) { d.classList.remove('active'); });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }

  function startCarousel() {
    stopCarousel();
    slideInterval = setInterval(nextSlide, 4000);
  }

  function stopCarousel() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  document.querySelectorAll('.hero-dots span').forEach(function(dot) {
    dot.addEventListener('click', function() {
      var idx = parseInt(this.getAttribute('data-index'));
      goToSlide(idx);
      startCarousel();
    });
  });

  var heroBanner = document.getElementById('heroBanner');
  if (heroBanner) {
    heroBanner.addEventListener('mouseenter', stopCarousel);
    heroBanner.addEventListener('mouseleave', startCarousel);
  }

  startCarousel();

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.id === 'chatInput') {
      sendChatMessage();
    }
    if (e.key === 'Enter' && e.target.id === 'librarySearch') {
      showToast('鎼滅储锛? + e.target.value);
    }
  });

  // Auto-show face auth onboarding on first load
  window.addEventListener('load', function() {
    renderMarketProducts();
    setTimeout(initFaceAuth, 500);
  });

  // 娑堟伅鐩戝惉锛氭帴鏀剁埗椤甸潰鎸囦护
  window.addEventListener('message', function(e) {
    var data = e.data;
    if (!data || !data.type) return;
    switch(data.type) {
      case 'switchTab': switchTab(data.tab); break;
      case 'showOnboarding': showOnboarding(); break;
      case 'showFaceAuth': showFaceAuth(); break;
      case 'resetFaceAuth': 
        try { localStorage.removeItem('faceAuthDone'); } catch(e) {}
        showFaceAuth();
        break;
      case 'openShare': document.querySelectorAll('.share-btn').forEach(function(btn) { btn.click(); }); break;
      case 'openGPCenter': document.querySelector('.gp-center-btn')?.click(); break;
      case 'openReport': switchTab('my-reports'); break;
      case 'openSearch': switchTab('search'); break;
      case 'openMirrorSettings': switchTab('mirror'); setTimeout(function() { document.querySelector('.mirror-settings-btn')?.click(); }, 300); break;
    }
    if (typeof currentTab !== 'undefined') {
      parent.postMessage({ type: 'tabChanged', tab: currentTab }, '*');
    }
  });

