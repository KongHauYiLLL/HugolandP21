import React from 'react';
import { PlayerTag } from '../types/game';
import { Heart, Sword, Shield, MapPin, Coins, Gem, Sparkles, TrendingUp } from 'lucide-react';

interface PlayerStatsProps {
  playerStats: {
    hp: number;
    maxHp: number;
    atk: number;
    def: number;
  };
  zone: number;
  coins: number;
  gems: number;
  shinyGems: number;
  playerTags: PlayerTag[];
  progression: {
    level: number;
    experience: number;
    experienceToNext: number;
    skillPoints: number;
  };
}

export const PlayerStats: React.FC<PlayerStatsProps> = ({ 
  playerStats, 
  zone, 
  coins, 
  gems, 
  shinyGems, 
  playerTags,
  progression
}) => {
  const unlockedTags = playerTags.filter(tag => tag.unlocked);

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black p-4 sm:p-6 rounded-lg shadow-2xl border border-slate-600">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Hero Status</h2>
      
      {/* Player Tags */}
      {unlockedTags.length > 0 && (
        <div className="mb-4">
          <h3 className="text-white font-semibold text-sm mb-2">Player Tags</h3>
          <div className="flex flex-wrap gap-2">
            {unlockedTags.map((tag) => (
              <div
                key={tag.id}
                className={`px-2 py-1 rounded-full text-xs font-semibold ${tag.color} bg-black/30 border border-current/30`}
              >
                {tag.icon} {tag.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3 sm:space-y-4">
        {/* Character Level */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Character Level</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-indigo-400 font-bold text-lg">Lv.{progression.level}</span>
            <div className="flex-1">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(progression.experience / progression.experienceToNext) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-300 mt-1">
                {progression.experience}/{progression.experienceToNext} XP
              </p>
            </div>
            <span className="text-yellow-400 font-semibold text-sm">
              SP: {progression.skillPoints}
            </span>
          </div>
        </div>
        
        {/* Health */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Health</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 sm:h-3">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-400 h-2 sm:h-3 rounded-full transition-all duration-300"
              style={{ width: `${(playerStats.hp / playerStats.maxHp) * 100}%` }}
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">{playerStats.hp}/{playerStats.maxHp}</p>
        </div>

        {/* Combat Stats */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Sword className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Attack</span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-orange-400">{playerStats.atk}</p>
          </div>
          
          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Defense</span>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-blue-400">{playerStats.def}</p>
          </div>
        </div>

        {/* Zone */}
        <div className="bg-black/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Current Zone</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-green-400">{zone}</p>
          {zone >= 10 && (
            <p className="text-xs text-green-300 mt-1">Enemies can drop items!</p>
          )}
        </div>

        {/* Resources */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Coins className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Coins</span>
            </div>
            <p className="text-base sm:text-xl font-bold text-yellow-400">{coins}</p>
          </div>
          
          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Gem className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Gems</span>
            </div>
            <p className="text-base sm:text-xl font-bold text-purple-400">{gems}</p>
          </div>

          <div className="bg-black/30 p-2 sm:p-3 rounded-lg">
            <div className="flex items-center gap-1 sm:gap-2 mb-1">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              <span className="text-white font-semibold text-xs sm:text-sm">Shiny</span>
            </div>
            <p className="text-base sm:text-xl font-bold text-yellow-400">{shinyGems}</p>
          </div>
        </div>
      </div>
    </div>
  );
};