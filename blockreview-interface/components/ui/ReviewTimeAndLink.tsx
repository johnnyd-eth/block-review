import React from 'react';
import { formatDistance, format } from 'date-fns';
import { Tooltip } from 'antd';

export function ReviewTimeAndLink({ timestamp }: {timestamp: Date | undefined}) {
  if (!timestamp) return null
  const timeAgo = formatDistance(timestamp, new Date(), { addSuffix: true });
  const formattedDate = format(timestamp, 'yyyy-MM-dd h:mmaaa OOOO');

  return (
    <Tooltip title={formattedDate}>
      <span className='text-gray-400 text-sm'>{timeAgo}</span>
    </Tooltip>
  );
};
