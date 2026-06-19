(function() {
    const CFG = {
        siteUrl: "https://webhome-i-game.com.cn",
        keyword: "爱游戏",
        seed: "7134c5e8fbec5ada",
        bannerText: "欢迎访问本站，本站以" + "爱游戏" + "为核心，提供丰富的内容展示。"
    };

    const tags = ["游戏资讯", "攻略心得", "玩家社区", "活动推荐", "爱游戏"];

    function createCard(title, desc, link) {
        const card = document.createElement("div");
        card.className = "site-helper-card";
        const h3 = document.createElement("h3");
        h3.textContent = title;
        const p = document.createElement("p");
        p.textContent = desc;
        const a = document.createElement("a");
        a.href = link;
        a.textContent = "了解更多";
        a.target = "_blank";
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(a);
        return card;
    }

    function createBadge(text) {
        const span = document.createElement("span");
        span.className = "site-helper-badge";
        span.textContent = text;
        return span;
    }

    function initHelper() {
        const container = document.createElement("div");
        container.id = "site-helper-container";
        container.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:9999;background:#fff;border:1px solid #ddd;border-radius:12px;padding:16px;max-width:300px;box-shadow:0 4px 12px rgba(0,0,0,0.1);font-family:sans-serif;";

        const header = document.createElement("div");
        header.textContent = "💡 页面提示";
        header.style.cssText = "font-weight:bold;margin-bottom:8px;color:#333;";

        const desc = document.createElement("p");
        desc.textContent = CFG.bannerText;
        desc.style.cssText = "font-size:13px;color:#555;margin:0 0 10px;";

        const cardArea = document.createElement("div");
        cardArea.style.cssText = "margin-bottom:10px;";
        const card = createCard("爱游戏专区", "汇聚所有" + CFG.keyword + "相关内容，点击前往。", CFG.siteUrl);
        cardArea.appendChild(card);

        const badgeArea = document.createElement("div");
        badgeArea.style.cssText = "display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;";
        tags.forEach(function(tag) {
            badgeArea.appendChild(createBadge(tag));
        });

        const footer = document.createElement("div");
        footer.style.cssText = "font-size:11px;color:#999;border-top:1px solid #eee;padding-top:8px;margin-top:4px;";
        footer.textContent = "访问说明：本站为" + CFG.keyword + "主题站点，所有内容仅供展示参考。";

        container.appendChild(header);
        container.appendChild(desc);
        container.appendChild(cardArea);
        container.appendChild(badgeArea);
        container.appendChild(footer);

        document.body.appendChild(container);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initHelper);
    } else {
        initHelper();
    }

    var style = document.createElement("style");
    style.textContent = ".site-helper-card { background:#f9f9f9; border-radius:8px; padding:10px; border:1px solid #e0e0e0; } .site-helper-card h3 { margin:0 0 6px; font-size:15px; color:#222; } .site-helper-card p { margin:0 0 8px; font-size:13px; color:#666; } .site-helper-card a { color:#1a73e8; text-decoration:none; font-size:13px; } .site-helper-badge { background:#e8f0fe; color:#1a73e8; border-radius:12px; padding:2px 10px; font-size:12px; display:inline-block; }";
    document.head.appendChild(style);
})();