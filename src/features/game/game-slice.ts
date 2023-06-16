import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type LandSamuraiState = {
  name: string;
  samurai: number;
  power: number;
};

export type LandState = {
  war_id: number;
  id: number;
  name: string;
  desc: string;
  uri: string;
  value: number;
  roads: number[];
  attackerClan: number;
  clan: number;
  attackersPower: number;
  defendersPower: number;
  attackerSamurai: LandSamuraiState[];
  defenderSamurai: LandSamuraiState[];
};

export type ClanState = {
  lightStones: number;
  ID: number;
  baseLocation: number;
}

export type GameState = {
  clan: number;
  samurai?: any;
  land?: LandState;
  deck: any[];
  isLoaded: boolean;
  lands: LandState[];
  clans: ClanState[];
};

export const initialState: GameState = {
  clan: 0,
  samurai: null,
  land: null,
  deck: [],
  isLoaded: false,
  lands: [],
  clans: []
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setSamurai: (state, action: PayloadAction<any>) => {
      state.samurai = action.payload;
    },
    setLand: (state, action: PayloadAction<LandState>) => {
      state.land = action.payload;
    },
    setDeck: (state, action: PayloadAction<any[]>) => {
      state.deck = action.payload;
    },
    setLands: (state, action: PayloadAction<LandState[]>) => {
      state.lands = action.payload;
    },
    setClans: (state, action: PayloadAction<ClanState[]>) => {
      state.clans = action.payload;
    }
  },
});

export const { setSamurai, setDeck, setLand, setLands, setClans } = gameSlice.actions;

export default gameSlice.reducer;
