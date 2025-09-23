import { motion } from "framer-motion";
import { Award, Code, Users, Calendar, Star, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  count?: string;
  unlocked: boolean;
}

interface AchievementBadgeProps {
  achievement: Achievement;
  index: number;
}

const achievementVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
  hover: {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.2 },
  },
};

export default function AchievementBadge({ achievement, index }: AchievementBadgeProps) {
  const { title, description, icon: Icon, color, count, unlocked } = achievement;

  return (
    <motion.div
      variants={achievementVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      className={cn(
        "relative p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer group",
        unlocked
          ? "bg-gradient-to-br from-card/80 to-card/60 border-primary/30 hover:border-primary/50"
          : "bg-gradient-to-br from-muted/50 to-muted/30 border-muted-foreground/20 opacity-60"
      )}
    >
      {/* Animated background gradient */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl",
          unlocked ? "from-primary/5 to-accent/5" : "from-muted/5 to-muted/5"
        )}
        initial={false}
      />

      {/* Glow effect for unlocked achievements */}
      {unlocked && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      )}

      <div className="relative z-10 flex items-start space-x-3">
        {/* Icon container */}
        <motion.div
          className={cn(
            "p-2 rounded-lg flex items-center justify-center",
            unlocked
              ? `bg-gradient-to-br ${color} shadow-lg`
              : "bg-muted-foreground/20"
          )}
          whileHover={unlocked ? { rotate: [0, -5, 5, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Icon 
            className={cn(
              "w-5 h-5",
              unlocked ? "text-white" : "text-muted-foreground"
            )} 
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className={cn(
              "font-semibold text-sm",
              unlocked ? "text-foreground" : "text-muted-foreground"
            )}>
              {title}
            </h3>
            {count && unlocked && (
              <motion.span
                className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {count}
              </motion.span>
            )}
          </div>
          <p className={cn(
            "text-xs leading-relaxed",
            unlocked ? "text-muted-foreground" : "text-muted-foreground/60"
          )}>
            {description}
          </p>

          {/* Unlock animation */}
          {unlocked && (
            <motion.div
              className="mt-2 flex items-center space-x-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs text-primary font-medium">Achieved</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Locked overlay */}
      {!unlocked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-xs text-muted-foreground font-medium bg-muted/80 px-2 py-1 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Coming Soon
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

// Sample achievements data
export const achievements: Achievement[] = [
  {
    id: "projects",
    title: "Projects Master",
    description: "Successfully delivered 8+ comprehensive digital solutions",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    count: "8+",
    unlocked: true,
  },
  {
    id: "completed",
    title: "Projects Completed",
    description: "Built and launched 8+ full-stack applications",
    icon: Trophy,
    color: "from-emerald-500 to-emerald-600",
    count: "8+",
    unlocked: true,
  },
  {
    id: "experience",
    title: "Experienced Developer",
    description: "3+ years of professional development experience",
    icon: Calendar,
    color: "from-green-500 to-green-600",
    count: "3+ Years",
    unlocked: true,
  },
  {
    id: "innovation",
    title: "Innovation Ideas",
    description: "Contributed innovative ideas in hackathons within organization",
    icon: Award,
    color: "from-purple-500 to-purple-600",
    unlocked: true,
  },
  {
    id: "client",
    title: "Client Favorite",
    description: "Maintained excellent client satisfaction rating",
    icon: Star,
    color: "from-yellow-500 to-yellow-600",
    count: "5⭐",
    unlocked: true,
  },
];