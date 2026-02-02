import { motion } from "framer-motion";
import SimpleBar from "simplebar-react";
import { Heart, MessageCircle } from "lucide-react";

const communityPosts = [
  { id: 1, user: "sarah.fit", avatar: "https://randomuser.me/api/portraits/women/44.jpg", content: "Just smashed my PR today 💪 Feeling stronger every week!", likes: 124, comments: 12 },
  { id: 2, user: "mike.trains", avatar: "https://randomuser.me/api/portraits/men/32.jpg", content: "What’s your go-to post workout meal? Looking for ideas 👀", likes: 89, comments: 7 },
  { id: 3, user: "emily.yoga", avatar: "https://randomuser.me/api/portraits/women/65.jpg", content: "Morning mobility routine done 🧘‍♀️ Highly recommend this!", likes: 156, comments: 18 },
  { id: 4, user: "james.athlete", avatar: "https://randomuser.me/api/portraits/men/41.jpg", content: "Recovery day doesn’t mean lazy day. Stretch + walk 🚶‍♂️", likes: 63, comments: 4 },
  { id: 5, user: "olivia.nutrition", avatar: "https://randomuser.me/api/portraits/women/12.jpg", content: "Protein + carbs = better performance. Don’t skip meals!", likes: 142, comments: 21 },
  { id: 6, user: "daniel.lifts", avatar: "https://randomuser.me/api/portraits/men/55.jpg", content: "Consistency > motivation. Show up even on bad days.", likes: 201, comments: 33 },
];

export default function CommunityDeviceHeroResponsive() {
  return (
    <section className="relative py-10 px-4 sm:px-6 overflow-hidden">
      {/* Top blend gradient */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-white to-transparent z-0" />

      {/* Background gradient + blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-orange-50 z-[-1]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-400/30 blur-3xl rounded-full z-[-1]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-orange-400/20 blur-3xl rounded-full z-[-1]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink-400/10 blur-3xl rounded-full z-[-1]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-4 sm:mb-6">
            Join Our Community
            <br />
            Connect. Share. Grow.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
            Be part of a supportive fitness community where members share progress, ask questions, and motivate each other every day.
          </p>
          <a
            href="/community"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 transition px-6 sm:px-8 py-3 sm:py-4 font-semibold shadow-xl"
          >
            Explore Community
          </a>
        </div>

        {/* RIGHT DEVICES */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          {/* Full-width Tablet Behind */}
          <div className="absolute w-[90%] sm:w-[600px] h-[220px] sm:h-[400px] bg-black rounded-[24px] shadow-2xl z-0">
            <div className="w-full h-full bg-white rounded-[20px] sm:rounded-[24px] overflow-hidden flex flex-col">
              <div className="flex justify-between px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-xs border-b bg-white">
                <span>LTE</span>
                <span>12:45</span>
                <span>🔋 87%</span>
              </div>
              <SimpleBar className="flex-1">
                <motion.div
                  className="px-2 sm:px-4 py-2 sm:py-4 space-y-2 sm:space-y-4"
                  animate={{ y: ["0%", "-35%", "0%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {communityPosts.map((post) => (
                    <div key={post.id} className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <img src={post.avatar} className="w-5 sm:w-8 h-5 sm:h-8 rounded-full" />
                        <span className="font-semibold text-[10px] sm:text-sm">{post.user}</span>
                      </div>
                      <p className="text-[10px] sm:text-sm text-gray-800 mb-1 sm:mb-3">{post.content}</p>
                      <div className="flex items-center gap-3 sm:gap-6 text-[9px] sm:text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 sm:w-4 h-3 sm:h-4" /> {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4" /> {post.comments}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </SimpleBar>
            </div>
          </div>

          {/* Mobile Front */}
          <div className="relative w-[250px] sm:w-[320px] h-[500px] sm:h-[620px] bg-black rounded-[32px] sm:rounded-[40px] p-2 sm:p-3 shadow-2xl z-20 -translate-y-4">
            <div className="w-full h-full bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col">
              <div className="flex justify-between px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-xs border-b bg-white">
                <span>LTE</span>
                <span>12:45</span>
                <span>🔋 87%</span>
              </div>
              <SimpleBar className="flex-1">
                <motion.div
                  className="px-2 sm:px-3 py-2 sm:py-4 space-y-2 sm:space-y-4"
                  animate={{ y: ["0%", "-40%", "0%"] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  {communityPosts.map((post) => (
                    <div key={post.id} className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <img src={post.avatar} className="w-5 sm:w-8 h-5 sm:h-8 rounded-full" />
                        <span className="font-semibold text-[10px] sm:text-sm">{post.user}</span>
                      </div>
                      <p className="text-[10px] sm:text-sm text-gray-800 mb-1 sm:mb-3">{post.content}</p>
                      <div className="flex items-center gap-3 sm:gap-6 text-[9px] sm:text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 sm:w-4 h-3 sm:h-4" /> {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 sm:w-4 h-3 sm:h-4" /> {post.comments}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </SimpleBar>
            </div>
          </div>

          {/* Small Tablet Preview Behind Mobile (Left Side) */}
          <div className="absolute w-[180px] sm:w-[300px] h-[120px] sm:h-[180px] bg-black rounded-[16px] sm:rounded-[24px] shadow-2xl -left-8 sm:-left-12 top-24 rotate-[-8deg] z-10">
            <div className="w-full h-full bg-white rounded-[16px] sm:rounded-[20px] overflow-hidden flex flex-col">
              <div className="flex justify-between px-2 sm:px-3 py-1 text-[8px] sm:text-[10px] border-b bg-white">
                <span>LTE</span>
                <span>12:45</span>
                <span>🔋 87%</span>
              </div>
              <SimpleBar className="flex-1">
                <motion.div
                  className="px-1 sm:px-2 py-1 sm:py-2 space-y-1 sm:space-y-2"
                  animate={{ y: ["0%", "-40%", "0%"] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                  {communityPosts.map((post) => (
                    <div key={post.id} className="bg-gray-50 rounded-lg p-1 sm:p-2">
                      <div className="flex items-center gap-1 sm:gap-2 mb-1">
                        <img src={post.avatar} className="w-4 sm:w-5 h-4 sm:h-5 rounded-full" />
                        <span className="font-semibold text-[8px] sm:text-[10px]">{post.user}</span>
                      </div>
                      <p className="text-[8px] sm:text-[10px] text-gray-800 mb-1">{post.content}</p>
                      <div className="flex items-center gap-2 sm:gap-3 text-[7px] sm:text-[9px] text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart className="w-2.5 sm:w-3 h-2.5 sm:h-3" /> {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3" /> {post.comments}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </SimpleBar>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
