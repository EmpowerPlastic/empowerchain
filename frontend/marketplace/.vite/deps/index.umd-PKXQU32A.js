import {
  __commonJS
} from "./chunk-I7XXR53E.js";

// node_modules/@segment/analytics.js-video-plugins/dist/index.umd.js
var require_index_umd = __commonJS({
  "node_modules/@segment/analytics.js-video-plugins/dist/index.umd.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.analyticsVideoPlugins = t() : e.analyticsVideoPlugins = t();
    }(window, function() {
      return function(e) {
        var t = {};
        function a(n) {
          if (t[n])
            return t[n].exports;
          var i = t[n] = { i: n, l: false, exports: {} };
          return e[n].call(i.exports, i, i.exports, a), i.l = true, i.exports;
        }
        return a.m = e, a.c = t, a.d = function(e2, t2, n) {
          a.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
        }, a.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, a.t = function(e2, t2) {
          if (1 & t2 && (e2 = a(e2)), 8 & t2)
            return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var n = /* @__PURE__ */ Object.create(null);
          if (a.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
            for (var i in e2)
              a.d(n, i, (function(t3) {
                return e2[t3];
              }).bind(null, i));
          return n;
        }, a.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return a.d(t2, "a", t2), t2;
        }, a.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, a.p = "", a(a.s = 2);
      }([function(e, t, a) {
        "use strict";
        a.r(t);
        var n = "function" == typeof fetch ? fetch.bind() : function(e2, t2) {
          return t2 = t2 || {}, new Promise(function(a2, n2) {
            var i = new XMLHttpRequest();
            for (var r in i.open(t2.method || "get", e2, true), t2.headers)
              i.setRequestHeader(r, t2.headers[r]);
            function o() {
              var e3, t3 = [], a3 = [], n3 = {};
              return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(i2, r2, o2) {
                t3.push(r2 = r2.toLowerCase()), a3.push([r2, o2]), e3 = n3[r2], n3[r2] = e3 ? e3 + "," + o2 : o2;
              }), { ok: 2 == (i.status / 100 | 0), status: i.status, statusText: i.statusText, url: i.responseURL, clone: o, text: function() {
                return Promise.resolve(i.responseText);
              }, json: function() {
                return Promise.resolve(i.responseText).then(JSON.parse);
              }, blob: function() {
                return Promise.resolve(new Blob([i.response]));
              }, headers: { keys: function() {
                return t3;
              }, entries: function() {
                return a3;
              }, get: function(e4) {
                return n3[e4.toLowerCase()];
              }, has: function(e4) {
                return e4.toLowerCase() in n3;
              } } };
            }
            i.withCredentials = "include" == t2.credentials, i.onload = function() {
              a2(o());
            }, i.onerror = n2, i.send(t2.body);
          });
        };
        t.default = n;
      }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var a2 = 0; a2 < t2.length; a2++) {
              var n2 = t2[a2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
            }
          }
          return function(t2, a2, n2) {
            return a2 && e2(t2.prototype, a2), n2 && e2(t2, n2), t2;
          };
        }();
        var i = function() {
          function e2(t2, a2) {
            !function(e3, t3) {
              if (!(e3 instanceof t3))
                throw new TypeError("Cannot call a class as a function");
            }(this, e2), this.pluginName = t2;
          }
          return n(e2, [{ key: "track", value: function(e3, t2) {
            window.analytics.track(e3, t2, { integration: { name: this.pluginName } });
          } }]), e2;
        }();
        t.default = i;
      }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.YouTubeAnalytics = t.VimeoAnalytics = void 0;
        var n = r(a(3)), i = r(a(4));
        function r(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        t.VimeoAnalytics = n.default, t.YouTubeAnalytics = i.default;
      }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var a2 = 0; a2 < t2.length; a2++) {
              var n2 = t2[a2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
            }
          }
          return function(t2, a2, n2) {
            return a2 && e2(t2.prototype, a2), n2 && e2(t2, n2), t2;
          };
        }(), i = r(a(0));
        function r(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        var o = function(e2) {
          function t2(e3, a2) {
            !function(e4, t3) {
              if (!(e4 instanceof t3))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2);
            var n2 = function(e4, t3) {
              if (!e4)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
            }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, "VimeoAnalytics"));
            return n2.authToken = a2, n2.player = e3, n2.metadata = { content: {}, playback: { videoPlayer: "Vimeo" } }, n2.mostRecentHeartbeat = 0, n2.isPaused = false, n2;
          }
          return function(e3, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }(t2, e2), n(t2, [{ key: "initialize", value: function() {
            var e3 = this, t3 = { loaded: this.retrieveMetadata, play: this.trackPlay, pause: this.trackPause, ended: this.trackEnded, timeupdate: this.trackHeartbeat };
            for (var a2 in t3)
              this.registerHandler(a2, t3[a2]);
            this.player.getVideoId().then(function(t4) {
              e3.retrieveMetadata({ id: t4 });
            }).catch(console.error);
          } }, { key: "registerHandler", value: function(e3, t3) {
            var a2 = this;
            this.player.on(e3, function(e4) {
              a2.updateMetadata(e4), t3.call(a2, e4);
            });
          } }, { key: "trackPlay", value: function() {
            this.isPaused ? (this.track("Video Playback Resumed", this.metadata.playback), this.isPaused = false) : (this.track("Video Playback Started", this.metadata.playback), this.track("Video Content Started", this.metadata.content));
          } }, { key: "trackEnded", value: function() {
            this.track("Video Playback Completed", this.metadata.playback), this.track("Video Content Completed", this.metadata.content);
          } }, { key: "trackHeartbeat", value: function() {
            var e3 = this.mostRecentHeartbeat, t3 = this.metadata.playback.position;
            t3 !== e3 && t3 - e3 >= 10 && (this.track("Video Content Playing", this.metadata.content), this.mostRecentHeartbeat = Math.floor(t3));
          } }, { key: "trackPause", value: function() {
            this.isPaused = true, this.track("Video Playback Paused", this.metadata.playback);
          } }, { key: "retrieveMetadata", value: function(e3) {
            var t3 = this;
            return new Promise(function(a2, n2) {
              var r2 = e3.id;
              (0, i.default)("https://api.vimeo.com/videos/" + r2, { headers: { Authorization: "Bearer " + t3.authToken } }).then(function(e4) {
                return e4.ok ? e4.json() : n2(e4);
              }).then(function(e4) {
                t3.metadata.content.title = e4.name, t3.metadata.content.description = e4.description, t3.metadata.content.publisher = e4.user.name, t3.metadata.playback.position = 0, t3.metadata.playback.totalLength = e4.duration;
              }).catch(function(e4) {
                return console.error("Request to Vimeo API Failed with: ", e4), n2(e4);
              });
            });
          } }, { key: "updateMetadata", value: function(e3) {
            var t3 = this;
            return new Promise(function(a2, n2) {
              t3.player.getVolume().then(function(n3) {
                n3 && (t3.metadata.playback.sound = 100 * n3), t3.metadata.playback.position = e3.seconds, a2();
              }).catch(n2);
            });
          } }]), t2;
        }(r(a(1)).default);
        t.default = o;
      }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = /* @__PURE__ */ function() {
          function e2(e3, t2) {
            for (var a2 = 0; a2 < t2.length; a2++) {
              var n2 = t2[a2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, n2.key, n2);
            }
          }
          return function(t2, a2, n2) {
            return a2 && e2(t2.prototype, a2), n2 && e2(t2, n2), t2;
          };
        }(), i = o(a(0)), r = o(a(1));
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        var s = function(e2) {
          function t2(e3, a2) {
            !function(e4, t3) {
              if (!(e4 instanceof t3))
                throw new TypeError("Cannot call a class as a function");
            }(this, t2);
            var n2 = function(e4, t3) {
              if (!e4)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e4 : t3;
            }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this, "YoutubeAnalytics"));
            return n2.player = e3, n2.apiKey = a2, n2.playerLoaded = false, n2.playbackStarted = false, n2.contentStarted = false, n2.isPaused = false, n2.isBuffering = false, n2.isSeeking = false, n2.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 0 }, n2.metadata = [{ playback: { video_player: "youtube" }, content: {} }], n2.playlistIndex = 0, n2;
          }
          return function(e3, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }(t2, e2), n(t2, [{ key: "initialize", value: function() {
            window.segmentYoutubeOnStateChange = this.onPlayerStateChange.bind(this), window.segmentYoutubeOnReady = this.onPlayerReady.bind(this), this.player.addEventListener("onReady", "segmentYoutubeOnReady"), this.player.addEventListener("onStateChange", "segmentYoutubeOnStateChange");
          } }, { key: "onPlayerReady", value: function(e3) {
            this.retrieveMetadata();
          } }, { key: "onPlayerStateChange", value: function(e3) {
            var t3 = this.player.getCurrentTime();
            switch (this.metadata[this.playlistIndex] && (this.metadata[this.playlistIndex].playback.position = this.metadata[this.playlistIndex].content.position = t3, this.metadata[this.playlistIndex].playback.quality = this.player.getPlaybackQuality(), this.metadata[this.playlistIndex].playback.sound = this.player.isMuted() ? 0 : this.player.getVolume()), e3.data) {
              case -1:
                if (this.playerLoaded)
                  break;
                this.retrieveMetadata(), this.playerLoaded = true;
                break;
              case YT.PlayerState.BUFFERING:
                this.handleBuffer();
                break;
              case YT.PlayerState.PLAYING:
                this.handlePlay();
                break;
              case YT.PlayerState.PAUSED:
                this.handlePause();
                break;
              case YT.PlayerState.ENDED:
                this.handleEnd();
            }
            this.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 1e3 * this.player.getCurrentTime() };
          } }, { key: "retrieveMetadata", value: function() {
            var e3 = this;
            return new Promise(function(t3, a2) {
              var n2 = e3.player.getVideoData(), r2 = e3.player.getPlaylist() || [n2.video_id], o2 = r2.join();
              (0, i.default)("https://www.googleapis.com/youtube/v3/videos?id=" + o2 + "&part=snippet,contentDetails&key=" + e3.apiKey).then(function(e4) {
                if (!e4.ok) {
                  var t4 = new Error("Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)");
                  throw t4.response = e4, t4;
                }
                return e4.json();
              }).then(function(a3) {
                e3.metadata = [];
                for (var n3 = 0, i2 = 0; i2 < r2.length; i2++) {
                  var o3 = a3.items[i2];
                  e3.metadata.push({ content: { title: o3.snippet.title, description: o3.snippet.description, keywords: o3.snippet.tags, channel: o3.snippet.channelTitle, airdate: o3.snippet.publishedAt } }), n3 += l(o3.contentDetails.duration);
                }
                for (i2 = 0; i2 < r2.length; i2++)
                  e3.metadata[i2].playback = { total_length: n3, video_player: "youtube" };
                t3();
              }).catch(function(t4) {
                e3.metadata = r2.map(function(e4) {
                  return { playback: { video_player: "youtube" }, content: {} };
                }), a2(t4);
              });
            });
          } }, { key: "handleBuffer", value: function() {
            var e3 = this.determineSeek();
            this.playbackStarted || (this.playbackStarted = true, this.track("Video Playback Started", this.metadata[this.playlistIndex].playback)), e3 && !this.isSeeking && (this.isSeeking = true, this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback)), this.isSeeking && (this.track("Video Playback Seek Completed", this.metadata[this.playlistIndex].playback), this.isSeeking = false);
            var t3 = this.player.getPlaylist();
            t3 && 0 === this.player.getCurrentTime() && this.player.getPlaylistIndex() !== this.playlistIndex && (this.contentStarted = false, this.playlistIndex === t3.length - 1 && 0 === this.player.getPlaylistIndex() && (this.track("Video Playback Completed", this.metadata[this.player.getPlaylistIndex()].playback), this.track("Video Playback Started", this.metadata[this.player.getPlaylistIndex()].playback))), this.track("Video Playback Buffer Started", this.metadata[this.playlistIndex].playback), this.isBuffering = true;
          } }, { key: "handlePlay", value: function() {
            this.contentStarted || (this.playlistIndex = this.player.getPlaylistIndex(), -1 === this.playlistIndex && (this.playlistIndex = 0), this.track("Video Content Started", this.metadata[this.playlistIndex].content), this.contentStarted = true), this.isBuffering && (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback), this.isBuffering = false), this.isPaused && (this.track("Video Playback Resumed", this.metadata[this.playlistIndex].playback), this.isPaused = false);
          } }, { key: "handlePause", value: function() {
            var e3 = this.determineSeek();
            this.isBuffering && (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback), this.isBuffering = false), this.isPaused || (e3 ? (this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback), this.isSeeking = true) : (this.track("Video Playback Paused", this.metadata[this.playlistIndex].playback), this.isPaused = true));
          } }, { key: "handleEnd", value: function() {
            this.track("Video Content Completed", this.metadata[this.playlistIndex].content), this.contentStarted = false;
            var e3 = this.player.getPlaylistIndex(), t3 = this.player.getPlaylist();
            (t3 && e3 === t3.length - 1 || -1 === e3) && (this.track("Video Playback Completed", this.metadata[this.playlistIndex].playback), this.playbackStarted = false);
          } }, { key: "determineSeek", value: function() {
            var e3 = this.isPaused || this.isBuffering ? 0 : Date.now() - this.lastRecordedTime.timeReported, t3 = 1e3 * this.player.getCurrentTime() - this.lastRecordedTime.timeElapsed;
            return Math.abs(e3 - t3) > 2e3;
          } }]), t2;
        }(r.default);
        function l(e2) {
          var t2 = e2.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
          return t2 = t2.slice(1).map(function(e3) {
            if (null != e3)
              return e3.replace(/\D/, "");
          }), 3600 * (parseInt(t2[0]) || 0) + 60 * (parseInt(t2[1]) || 0) + (parseInt(t2[2]) || 0);
        }
        t.default = s;
      }]);
    });
  }
});
export default require_index_umd();
//# sourceMappingURL=index.umd-PKXQU32A.js.map
