# ReactNaviveOne

在前文我們介紹了 React Native 的開發環境，並且以官網的範例跑在虛擬機上。
現在我們來試圖建立一個簡單的 App ，讓我們可以評估 RN 目前的發展程度。

我們在開發 iOS App 時，我們可以藉由 Storyboard 或是 XIB 檔案，建立我們的 Navigation 邏輯以及完成 UI 配置等視覺元素的建置。在 Android 方面，Android Studio 也有一個很漂亮的所見即所得的 UI Designer 。

React Native 作為一個開發中的框架，如果要有一個像是 Android Studio 或是 Visual Studio 所提供的那種等級 UI Designer ，會是一個技術上會不斷重工的辛苦工作。不過 React Native 在這邊透過直接在測試機上進行更新 (Cmd + R) 來解決了需要觀看設計成果以及提供設計工具的需求。所以在我們先使用這樣的方式來觀看我們的設計成果。

然後我們繼續前進來看看以 React Native 進行開發，這樣才能幫助我們評估這項技術與其他跨平台技術進行比較。與評估目前 React Native 的進展。

首先我們來開發一個簡單的系統。目標由雲端站台提供餐廳的位置，電話與說明資訊。
在這個 App 中，我們可以看到 React Native 怎麼處理來自網路的資料，如何加入地圖，如何呼叫系統功能。

以下是這個 App 的概念圖式





然後我們要來解決第一個問題，就是怎麼樣建立這五個 View
然後進行導航。
這次我們先進行 iOS 的部分，然後在下一篇文章中和大家報告 Android 的部分。

在 React Native 這邊要加一個 View 十分容易，直接加個 js 檔就可以。
在命名上，如果iOS 與 Android 最好是命名為 [View 名稱].ios.js 。其中 ios 可換為 android 來描述 Android的View 。當然我們在後面會提到放到一個指定目錄下，讓 iOS 與 Android 可以分享商業邏輯與使用者介面配置。不過我們會在下一篇文章要處理 Android 的 Back Button ，所以現在先寫 iOS 的部分。

iOS 以 ViewController 作為 App 的核心，控制 View 層以及 Model 層。而 React Native 中相似的角色就是繼承自 React.Component 的物件。

所以先建立 MasterPage, DetailPage, MyMapPage 以及 MyWebPage ，並且將 export default 這兩個關鍵字後的 class 更名為 SplashPage 。




這兩個關鍵字 export 與 default 是很重要的起始點。不過我們現在先不要解釋，等到提到 React Native 的執行架構時一起報告。

然後我們引入一個十分重要的 Library : React Navigation
這個 Library 下，有許多關於 Navigation 的類別，負責各種與 Navigation 相關的工作。
我們這次先使用基本的 StackNavigator 。
StackNavigator 就是以 Stack ( 先進後出 ) 的資料結構來處理 Navigation 。這邊可以借用 UINavigationController 的運作概念來思考 StackNavigator 的角色。

請在專案目錄下的命令行輸入以下指令，然後 npm 會安裝相應的 package 。

npm install --save react-navigation

然後我們自 react-navigation 引入 StackNavigator





接下來在先宣告好，加入StackNavigator 的物件。( 這邊的基本結構是 Dictionary ，所以注意左邊的是 Key ，右邊的是 Value ) 在一開始，我們只指定 screen 這個屬性。




完成了以上的工作，我們就完成了基本的 Navigation 結構。
接下來我們只要呼叫以下函示，就可以完成轉換頁面的效果。




另外，如果要取消左上角的 Back 按鈕，我們可以在 navigationOptions 對 headerLeft 設定





小結：

這邊示範的是 React Native 在 iOS 上的轉頁功能。
下一篇我們來處理 Android 上的轉頁效果。
