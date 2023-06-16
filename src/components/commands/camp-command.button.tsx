import useCampCommand from '@/features/commands/camp.command';
import { useGame } from '@/hooks/useGame';
import { BigNumber } from 'alchemy-sdk';
import classNames from 'classnames';
import { useAccount } from 'wagmi';

export function CampCommandButton() {
  const { game } = useGame();
  const account = useAccount();

  const { isError, data, isLoading, isSuccess, writeAsync, error } = useCampCommand();

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
    });
  };

  const className = classNames(
    'flex items-center justify-center rounded-full  px-4 py-2',
    {
      'bg-neutral-950/50': isSuccess,
      'bg-neutral-950/10': isLoading,
      'bg-neutral-950/20': !isLoading && !isSuccess,
      'bg-red-500/50': isError,
    },
  );

  return (
    <button onClick={handleClick} className={className}>
      <i className="ri-landscape-line mr-1 text-2xl"></i>
      <span>
        {isLoading ? 'Camping...' : isSuccess && !isLoading ? 'Camped' : 'Camp'}
      </span>
    </button>
  );
}
