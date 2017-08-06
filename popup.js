sap.ui.getCore().attachInit(function(){
        var oList = new sap.m.List();
        var oItem = new sap.m.StandardListItem({
          title: "{title}",
          description:"{description}",
          info: "{author}"
        });
        var oJSONDataModel = new sap.ui.model.json.JSONModel('https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=de5d1111dbc343c6b78477b08ab4dd33');
        oList.setModel(oJSONDataModel);
        oList.bindItems('/articles',oItem); 
        var oDPage1 = new sap.m.Page({
          title: "My News App",
          headerContent:[
            new sap.m.Button({
              icon:"sap-icon://home",
              type:"Accept",
              press:function(){
                var oJSONDataModel = new sap.ui.model.json.JSONModel('https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=de5d1111dbc343c6b78477b08ab4dd33');
                oList.setModel(oJSONDataModel);
                oList.bindItems('/articles',oItem);                 
              }
            })
            ],
          content:[
            new sap.m.FlexBox({
              items:[
                new sap.m.VBox({
                  width: "100%",
                  items:[
                    oList
                    ],
                  alignItems: "Center",
                  justifyContent:"Center",
                  backgroundDesign: "Solid"
                })
                ],
              alignItems: "Center",
              justifyContent: "Center"
            })
            ]
        });
        var oList2 = new sap.m.List('mList',{
              mode: sap.m.ListMode.SingleSelectMaster ,
              selectionChange : function(e) {
                if (this._prevSelect) {
                   this._prevSelect.$().css('background-color', '');        
                }
                var item = e.getParameter('listItem');
                item.$().css('background-color', '#5cc7b2');
                this._prevSelect = item;
                if(item.sId == '__item1-mList-0'){
                var oJSONDataModel = new sap.ui.model.json.JSONModel(' https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=de5d1111dbc343c6b78477b08ab4dd33');
                oList.setModel(oJSONDataModel);
                oList.bindItems('/articles',oItem);                     
                }
                else if (item.sId == '__item1-mList-1'){
                var oJSONDataModel = new sap.ui.model.json.JSONModel('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=de5d1111dbc343c6b78477b08ab4dd33');
                oList.setModel(oJSONDataModel);
                oList.bindItems('/articles',oItem);                   
                }
                else if (item.sId == '__item1-mList-2'){
                var oJSONDataModel = new sap.ui.model.json.JSONModel('https://newsapi.org/v1/articles?source=daily-mail&sortBy=top&apiKey=de5d1111dbc343c6b78477b08ab4dd33');
                oList.setModel(oJSONDataModel);
                oList.bindItems('/articles',oItem);                   
                }
                else if (item.sId == '__item1-mList-3'){
                var oJSONDataModel = new sap.ui.model.json.JSONModel('https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=de5d1111dbc343c6b78477b08ab4dd33');
                oList.setModel(oJSONDataModel);
                oList.bindItems('/articles',oItem);                   
                }
                else if (item.sId == '__item1-mList-4'){
                var oJSONDataModel = new sap.ui.model.json.JSONModel('https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=de5d1111dbc343c6b78477b08ab4dd33');
                oList.setModel(oJSONDataModel);
                oList.bindItems('/articles',oItem);                   
                }
              },
              updateFinished : function(oEvent){ 
              var firstItem = sap.ui.getCore().byId("mList").getItems()[0]; 
              sap.ui.getCore().byId("mList").setSelectedItem(firstItem,true); 
              }
        });
        var oItem2 = new sap.m.CustomListItem({
          content:[
              new sap.m.HBox({
                items:[
                  new sap.m.Image({
                    width: "80%",
                    height: "80%",
                    src: "{channelLogo}"
                  }).addStyleClass("myCustomChannelLogo")
                  ],
                alignItems: "Center",
                justifyContent: "Center"
              })
            ],
          press:function(){
            alert();
          }
        });
        var oJSONDataModel2 = new sap.ui.model.json.JSONModel("channels.json");
        //oJSONDataModel2.loadData();
        oList2.setModel(oJSONDataModel2);
        oList2.bindItems('/',oItem2);      
        var oMPage1 = new sap.m.Page({
          title: "Channels",
          content:[
            oList2
            ]
        });
        var app = new sap.m.SplitApp("app1",{
          detailPages:[
              oDPage1
            ],
          masterPages:[
              oMPage1
            ]
        });
        //app.addPage(oDPage1);
        app.placeAt("content");
      });