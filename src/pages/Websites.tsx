import React from "react";
import {Card, CardContent} from "@mui/material";

const Websites = () => {
    return (
        <Card>
            <CardContent>
                <div style={{
                    textAlign: "center",
                    marginTop: 20,
                }}>
                    <h3>帮助用户摆脱google全文网页翻译(
                        <a href="https://chrome.google.com/webstore/detail/it-mercenaries-and-hunter/eilakanollhbgdoppbffeikcbkhmeloc?hl=zh-CN&authuser=0"
                           target="_blank">需要安装插件</a>
                        )</h3>
                    <h4>仅将网站重要的信息翻译后填充回网页下方。方便您更容易的查看相关信息。</h4>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <img src="/imgs/upwork.png" style={{
                        width: 400,
                        height: 300,
                    }}/>
                </div>
                <section style={{fontSize: 16, fontWeight: '600', marginTop: 30,}}>
                    <div>我们目前适配的网站（持续适配中，欢迎提供意见）：</div>
                    <ul>
                        <li>
                            <a href="https://www.freelancer.com/" target="_blank">freelancer(接个人项目)</a>
                        </li>
                        <li>
                            <a href="https://www.upwork.com/" target="_blank">upwork(接个人项目)</a>
                        </li>
                    </ul>
                </section>

                <section>
                    <div>翻译服务是自建的服务器，如遇到网络问题，请点击刷新按钮。</div>
                </section>
                <section>
                    <div style={{padding: '12px 0', color: 'gray'}}>任何意见欢迎联系 madison.mh.ma@gmail.com</div>
                </section>
            </CardContent>
        </Card>
    )
}

export default Websites