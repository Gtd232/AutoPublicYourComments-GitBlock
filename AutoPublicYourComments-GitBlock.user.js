// ==UserScript==
// @name         焯级无敌可调全/半自动公开评论神器
// @namespace    AXOLOTL.TFGS
// @version      114514
// @description  唔唔唔美西螈力量帮你全/半自动公开评论！
// @author       Waterblock79+Gtd232
// @match        http://gitblock.cn/*
// @match        https://gitblock.cn/*
// @match        http://aerfaying.com/*
// @match        https://aerfaying.com/*
// @match        http://3eworld.cn/*
// @match        https://3eworld.cn/*
// @icon         https://cdn.gitblock.cn/Media?name=11E4D54652FE811D8AE24371393C95C2.svg
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    if (localStorage.getItem('AutoLevel') === null) {
        localStorage.setItem('AutoLevel', 'F');
    }
    if (localStorage.getItem('AutoLevel') === 'H') {
        let GKButton = document.createElement("div");
        GKButton.id = "GKButton";
        GKButton.class = "comment-panel_load-more_18oUL";
        GKButton.style = "position: fixed;right: 10%;top: 10%;";
        GKButton.innerHTML = "<a class=\"btn btn-primary btn\" onclick=\"document.querySelectorAll('.comment_comment_P_hgY[id] .comment_handleBtn_hP56Y > span').forEach(item => {if (getElementParents(item).find(item => item.classList.contains('markdown_body_1wo0f'))) return;if (item.innerHTML == '公开' && Blockey.Utils.getContext().targetType != 'ForumPost'{item.click();}\">公开可见且有权公开的评论</a>";
        GKButton.onclick = "document.querySelectorAll('.comment_handleBtn_hP56Y>*').forEach( item => {if(item.innerHTML == '公开'){item.click();}} )";
        document.body.appendChild(GKButton);
    } else {
        setInterval(() => {
        document.querySelectorAll('.comment_comment_P_hgY[id] .comment_handleBtn_hP56Y > span').forEach(item => {
            // 防止有人在个人简介等地方伪装公开按钮，导致未经允许的情况下打开未知链接
            if (getElementParents(item).find(item => item.classList.contains('markdown_body_1wo0f'))) return;
            // 判断是否匹配并点击
            if (item.innerHTML == '公开' && Blockey.Utils.getContext().targetType != 'ForumPost') {
                item.click();
            }
        });
    }, 1000)
    }
    if (window.location.href.substring(window.location.href.length - 2) === 'SS') {
        let settingDiv = document.createElement("div");
        settingDiv.innerHTML = "<button onclick=\"localStorage.setItem('AutoLevel', 'H');alert('已尝试写入本地储存');\">更改为半自动公开模式</button><button onclick=\"localStorage.setItem('AutoLevel', 'F');alert('已尝试写入本地储存');\">更改为全自动公开模式</button>";
        settingDiv.style = "position: fixed;right: 50%;top: 20%;";
        document.body.appendChild(settingDiv);
    }
})();
