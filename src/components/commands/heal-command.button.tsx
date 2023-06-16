import useHealCommand from '@/features/commands/heal.command';
import { useGame } from '@/hooks/useGame';
import { BigNumber } from 'alchemy-sdk';
import classNames from 'classnames';
import { useAccount } from 'wagmi';

export function HealCommandButton() {
  const { game } = useGame();
  const account = useAccount();

  const { isError, data, writeAsync, error } = useHealCommand();

  const handleClick = async (e) => {
    e.preventDefault();

    if (!account.isConnected) {
      return;
    }

    if (!game.samurai) {
      return;
    }

    await writeAsync({
      args: [
        BigInt(game.samurai.Id),
      ]
    })
  };

  const className = classNames(
    'flex items-center justify-center rounded-full  px-4 py-2 bg-neutral-950/50'
  );

  return (
    <button onClick={handleClick} className={className}>
      <i className="ri-landscape-line mr-1 text-2xl"></i>
      <span>
        Heal
      </span>
    </button>
  );
}
