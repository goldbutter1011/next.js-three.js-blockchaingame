import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  ClanState,
  LandState,
  setDeck,
  setLand,
  setLands,
  setClans,
  setSamurai,
} from '@/features/game/game-slice';

export const useGame = () => {
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game);

  return {
    game,
    setSamurai: (payload: any) => dispatch(setSamurai(payload)),
    setDeck: (payload: any[]) => dispatch(setDeck(payload)),
    setLand: (payload: LandState) => dispatch(setLand(payload)),
    setLands: (payload: LandState[]) => dispatch(setLands(payload)),
    setClans: (payload: ClanState[]) => dispatch(setClans(payload)),
  };
};
